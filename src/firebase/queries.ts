import { db } from './firebase';
import {
    query,
    collection,
    getDocs,
    getDoc,
    doc,
    deleteDoc,
    updateDoc,
    setDoc,
    where,
    orderBy,
    startAfter,
    endBefore,
    limit,
    limitToLast,
    increment,
    QueryDocumentSnapshot,
    type DocumentData,
    Timestamp,
    addDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';

// ========================
// INTERFACE DEFINITIONS
// ========================

export interface Student {
  docId?: string; 
  sid: string;
  name: {
      Vorname: string;
      Nachname: string;
  };
  KID: string;
  Katalognummer: number;
}

export interface Klasse {
    KID: string;
    Name: string;
    KV: string;
    SchuelerAnzahl: number;
}

export interface Lehrer {
    lid: string;
    name: {
        Vorname: string;
        Nachname: string;
    };
    Kürzel: string;
    Fächer: string[];
}

export interface User {
    uid: string;
    email: string;
    role: string;
    sid?: string;
    lid?: string;
}

export interface Absence {
    id?: string;
    sid: string;
    Start: number;
    Ende: number;
    createdAt: Timestamp;
    date: Timestamp;
    entschuldigt: boolean;
    type: string;
    Grund: string;
}

interface LessonTime {
    start: string;
    end: string;
}

interface TimetableDay {
    [key: string]: {
        Fach: string;
        Lehrer: string;
        startTime: string;
        endTime: string;
    };
}
interface Timetable {
    TID: string; // Timetable ID (optional, could use Firestore-generated ID)
    KID: string; // Foreign key referencing the Klasse document
    Stunden: string[]; // Your array of Stunden (assuming string array)
    // ... other timetable-related fields (e.g., validity period)
}
// ========================
// STUDENT FUNCTIONS
// ========================

export const getAllSchueler = async (): Promise<Student[]> => {
    try {
      const schuelerQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'));
      const querySnapshot = await getDocs(schuelerQuery);
      return querySnapshot.docs.map(doc => ({
        docId: doc.id,
        sid: doc.data().sid,
        name: doc.data().Name ,
        KID: doc.data().KID,
        Katalognummer: doc.data().Katalognummer
      }));
    } catch (error) {
      console.error("Fehler beim Laden der Schüler:", error);
      return [];
    }
  };

export const getSchueler = async (
  sortKey: string = 'Nachname',
  sortOrder: 'asc' | 'desc' = 'asc',
  pageSize: number = 9,
  lastVisible: QueryDocumentSnapshot<DocumentData> | null = null,
  direction: 'next' | 'prev' = 'next'
): Promise<{ schueler: Student[]; lastDoc: QueryDocumentSnapshot<DocumentData>; firstDoc: QueryDocumentSnapshot<DocumentData> }> => {
  let schuelerQuery;

  if (sortKey === 'KID') {
      schuelerQuery = query(
          collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
          orderBy('KID', sortOrder),
          orderBy('Katalognummer', 'asc'),
          direction === 'next' ? limit(pageSize) : limitToLast(pageSize),
      );
  } else {
      schuelerQuery = query(
          collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
          orderBy(sortKey, sortOrder),
          direction === 'next' ? limit(pageSize) : limitToLast(pageSize),
      );
  }

  if (lastVisible) {
      if (sortKey === 'KID') {
          schuelerQuery = query(
              collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
              orderBy('KID', sortOrder),
              orderBy('Katalognummer', sortOrder),
              direction === 'next' ? startAfter(lastVisible) : endBefore(lastVisible),
              direction === 'next' ? limit(pageSize) : limitToLast(pageSize),
          );
      } else {
          schuelerQuery = query(
              collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
              orderBy(sortKey, sortOrder),
              direction === 'next' ? startAfter(lastVisible) : endBefore(lastVisible),
              direction === 'next' ? limit(pageSize) : limitToLast(pageSize),
          );
      }
  }

  const querySnapshot = await getDocs(schuelerQuery);
  const schueler: Student[] = [];
  querySnapshot.forEach(doc => {
      const studentData = { docId: doc.id, ...(doc.data() as Record<string, unknown>) } as Student;
      console.log('Geladener Schüler aus Firestore:', studentData);
      schueler.push(studentData);
  });

  const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
  const firstDoc = querySnapshot.docs[0];

  console.log('Erster geladener Snapshot:', firstDoc?.id);
  console.log('Letzter geladener Snapshot:', lastDoc?.id);
  console.log('Anzahl der geladenen Schüler:', schueler.length);
  console.log(schueler);

  return {
      schueler,
      lastDoc,
      firstDoc
  };
};

export const getSchuelerByKlasse = async (kid: string): Promise<Student[]> => {
    try {

      const schuelerRef = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler');
      const q = query(schuelerRef, where('KID', '==', kid));
      const querySnapshot = await getDocs(q);
      console.log("Schüler in Klasse", kid, ":", querySnapshot.docs.map(doc => doc.data()));
      
      return querySnapshot.docs.map(doc => ({
        sid: doc.data().sid,
        KID: doc.data().KID || '', // Ensure KID is included
        Katalognummer: Number(doc.data().Katalognummer) || 0,
        name: {
          Vorname: doc.data().Name?.Vorname || '',
          Nachname: doc.data().Name?.Nachname || ''
        }
      } as Student));
    
    } catch (error) {
      console.error('Fehler beim Laden der Schüler:', error);
      throw new Error('Schüler konnten nicht geladen werden');
    }
  };

export const getSchuelerBySid = async (sid: string): Promise<Student | null> => {
  const schuelerCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler');
  const q = query(schuelerCollection, where('sid', '==', sid));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
      return null;
  }

  const docSnap = querySnapshot.docs[0];
  console.log("Schüler",docSnap.data());
  return docSnap.exists() ? { docId: docSnap.id, ...docSnap.data() } as Student : null;
};

export const editStudent = async (sid: string, updatedData: Partial<Student>): Promise<void> => {
    try {
      const schuelerCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler');
      const q = query(schuelerCollection, where('sid', '==', sid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
          throw new Error(`Student with sid "${sid}" not found`);
      }
      
      const studentDoc = querySnapshot.docs[0];
      const studentIdToEdit = studentDoc.id; 
      const studentRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler', studentIdToEdit);

      await updateDoc(studentRef, updatedData);
    } catch (error) {
        console.error(`Error updating student ${sid}:`, error);
        throw error;
    }
};

export const createStudent = async (newStudent: Omit<Student, 'sid' | 'docId'>): Promise<string> => {
  try {
      // Get the Klasse document using the KID from newStudent
      const klasseRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', newStudent.KID);
      const klasseDoc = await getDoc(klasseRef);

      if (!klasseDoc.exists()) {
          throw new Error(`Klasse with KID ${newStudent.KID} not found.`);
      }

      const klasseData = klasseDoc.data() as Klasse;
      const neueSchuelerAnzahl = klasseData.SchuelerAnzahl + 1;

      // Update the SchuelerAnzahl in the Klasse document
      await updateDoc(klasseRef, { SchuelerAnzahl: neueSchuelerAnzahl });

      // Create a new student document with a generated ID
      const studentRef = doc(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'));
      await setDoc(studentRef, {
          ...newStudent,
      });

      return studentRef.id; // Return the generated student DOCUMENT ID (docId)
  } catch (error) {
      console.error('Error creating student:', error);
      throw error;
  }
};

export const deleteStudent = async (sid: string): Promise<void> => {
  try {
      // Query for the student with the matching sid field
      const schuelerCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler');
      const q = query(schuelerCollection, where('sid', '==', sid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
          throw new Error(`Student with sid "${sid}" not found`);
      }

      // Assuming only one student should have a given sid (you might need to adjust if not)
      const studentDoc = querySnapshot.docs[0];
      const studentData = studentDoc.data();
      const studentIdToDelete = studentDoc.id; // Get the actual document ID

      // Delete the found student document
      const studentRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler', studentIdToDelete);
      await deleteDoc(studentRef);

      // Update class student count
      const klasseRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', studentData.KID);
      const klasseDoc = await getDoc(klasseRef);
      if (klasseDoc.exists()) {
          const klasseData = klasseDoc.data() as Klasse;
          await updateDoc(klasseRef, { SchuelerAnzahl: klasseData.SchuelerAnzahl - 1 });
      }
  } catch (error) {
      console.error(`Error deleting student with sid ${sid}:`, error);
      throw error;
  }
};

export const getSchuelerCountForKlasse = async (KID: string): Promise<number> => {
    const schuelerQuery = query(
        collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
        where('KID', '==', KID)
    );
    const querySnapshot = await getDocs(schuelerQuery);
    return querySnapshot.size;
};

export const updateStudentSid = async (
  documentId: string, 
  newSid: string
): Promise<void> => {
  try {
    const studentRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler', documentId);
    await updateDoc(studentRef, { sid: newSid });
  } catch (error) {
    console.error("Error updating student SID:", error);
    throw error;
  }
};

// ========================
// CLASS FUNCTIONS
// ========================

export const getKlassen = async (
    sortKey: string = 'Name',
    sortOrder: 'asc' | 'desc' = 'asc',
    pageSize: number = 9,
    lastVisible: QueryDocumentSnapshot<DocumentData> | null = null
): Promise<{ klassen: Klasse[]; lastDoc: QueryDocumentSnapshot<DocumentData> }> => {
    let klassenQuery = query(
        collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
        orderBy(sortKey, sortOrder),
        limit(pageSize),
    );

    if (lastVisible) {
        klassenQuery = query(
            collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
            orderBy(sortKey, sortOrder),
            startAfter(lastVisible),
            limit(pageSize),
        );
    }

    const querySnapshot = await getDocs(klassenQuery);
    const klassen = querySnapshot.docs.map(doc => ({ KID: doc.id, ...doc.data() } as Klasse));

    return {
        klassen,
        lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1]
    };
};

export const getAllKlassen = async (): Promise<Klasse[]> => {
    try {
      const klassenQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'));
      const querySnapshot = await getDocs(klassenQuery);
      return querySnapshot.docs.map(doc => ({ KID: doc.id, ...doc.data() } as Klasse));
    } catch (error) {
      console.error("Fehler beim Laden der Klassen:", error);
      return [];
    }
  };

export const getKlasseFromKID = async (KID: string): Promise<Klasse | null> => {
    try {
        if (!KID || typeof KID !== 'string') {
            console.error('Invalid KID provided:', KID);
            return null;
        }

        const klassenQuery = query(
            collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
            where('KID', '==', KID)
        );

        const querySnapshot = await getDocs(klassenQuery);

        if (querySnapshot.empty) {
            console.log(`No class found with KID: ${KID}`);
            return null;
        }

        const doc = querySnapshot.docs[0];
        return { KID, ...doc.data() } as Klasse;
    } catch (error) {
        console.error('Error fetching class:', error);
        return null;
    }
};

export const getKIDFromClassName = async (className: string): Promise<string | null> => {
    const klasseQuery = query(
        collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
        where('Name', '==', className)
    );
    const querySnapshot = await getDocs(klasseQuery);
    return querySnapshot.empty ? null : querySnapshot.docs[0].data().KID;
};

export const editKlasse = async (KID: string, updatedData: Partial<Klasse>): Promise<void> => {
    try {
        const klasseRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', KID);
        await updateDoc(klasseRef, updatedData);
    } catch (error) {
        console.error(`Error updating class ${KID}:`, error);
        throw error;
    }
};

export const createKlasse = async (newKlasse: Omit<Klasse, 'KID' | 'SchuelerAnzahl'>, stunden: string[]): Promise<string> => {
    try {
        const KID = uuidv4();

        await setDoc(
            doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', KID),
            {
                ...newKlasse,
                KID,
                SchuelerAnzahl: 0
            }
        );

        // Create a new document in the Timetables collection
        const timetableDocRef = doc(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Stundenplan'));
        await setDoc(timetableDocRef, {
            TID: timetableDocRef.id,
            KID: KID,
            Stunden: stunden
        });

        return KID;
    } catch (error) {
        console.error('Error creating class:', error);
        throw error;
    }
};

export const deleteKlasse = async (KID: string): Promise<void> => {
    try {
        const klasseRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', KID);

        // Query for the timetable document in the 'Stundenplan' collection
        const stundenplanCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Stundenplan');
        const q = query(stundenplanCollection, where('KID', '==', KID));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // Assuming there's only one timetable document with the matching KID
            querySnapshot.forEach(async (timetableDoc) => {
                await deleteDoc(timetableDoc.ref);
                console.log(`Timetable with ID ${timetableDoc.id} for class ${KID} deleted.`);
            });
        } else {
            console.warn(`No timetable found for class ${KID} in 'Stundenplan' collection.`);
        }

        // Delete the Klasse document
        await deleteDoc(klasseRef);
        console.log(`Class ${KID} deleted successfully.`);

    } catch (error) {
        console.error(`Error deleting class ${KID}:`, error);
        throw error;
    }
};

// ========================
// TEACHER FUNCTIONS
// ========================

export const getLehrer = async (
    sortKey: string = 'name.Nachname',
    sortOrder: 'asc' | 'desc' = 'asc',
    pageSize: number = 9,
    lastVisible: QueryDocumentSnapshot<DocumentData> | null = null
): Promise<{ lehrer: Lehrer[]; lastDoc: QueryDocumentSnapshot<DocumentData> }> => {
    let lehrerQuery = query(
        collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'),
        orderBy(sortKey, sortOrder),
        limit(pageSize),
    );

    if (lastVisible) {
        lehrerQuery = query(
            collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'),
            orderBy(sortKey, sortOrder),
            startAfter(lastVisible),
            limit(pageSize),
        );
    }

    const querySnapshot = await getDocs(lehrerQuery);
    const lehrer = querySnapshot.docs.map(doc => ({ lid: doc.id, ...doc.data() } as Lehrer));

    return {
        lehrer,
        lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1]
    };
};

export const isTeacherKV = async (uid: string, sid: string): Promise<boolean> => {
    try {
        // Step 1: Get the user and verify they are a teacher (Lehrer)
        const userRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'User', uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            return false; // User not found
        }

        const userData = userSnap.data() as User;

        // Check if user is a teacher (Lehrer)
        if (userData.role !== 'lehrer' || !userData.lid) {
            return false; // Not a teacher or no lid
        }

        // Step 2: Get the student by sid
        const studentRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler', sid);
        const studentSnap = await getDoc(studentRef);

        if (!studentSnap.exists()) {
            return false; // Student not found
        }

        const studentData = studentSnap.data() as Student;

        // Step 3: Get the class and check KV
        const klasseRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', studentData.KID);
        const klasseSnap = await getDoc(klasseRef);

        if (!klasseSnap.exists()) {
            return false; // Class not found
        }

        const klasseData = klasseSnap.data() as Klasse;

        // Check if the teacher's lid matches the class's KV
        return klasseData.KV === userData.lid;

    } catch (error) {
        console.error('Error checking if teacher is KV:', error);
        return false;
    }
};

export const getLehrerByKuerzel = async (kuerzel: string): Promise<Lehrer | null> => {
    const lehrerQuery = query(
        collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'),
        where('Kürzel', '==', kuerzel)
    );
    const querySnapshot = await getDocs(lehrerQuery);
    if (querySnapshot.empty) return null;
    const doc = querySnapshot.docs[0];
    return { lid: doc.id, ...doc.data() } as Lehrer;
};

export const getLehrerByLid = async (lid: string): Promise<Lehrer | null> => {
  const lehrerQuery = query(
    collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'),
    where('lid', '==', lid)
);
const querySnapshot = await getDocs(lehrerQuery);
if (querySnapshot.empty) return null;
const doc = querySnapshot.docs[0];
return { lid: doc.id, ...doc.data() } as Lehrer;
};

export const editLehrer = async (lid: string, updatedData: Partial<Lehrer>): Promise<void> => {
  try {
    const lehrerCollectionRef = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer');
    const q = query(lehrerCollectionRef, where('lid', '==', lid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docToUpdate = querySnapshot.docs[0];
      const lehrerRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', docToUpdate.id);
      await updateDoc(lehrerRef, updatedData);
      console.log(`Lehrer mit lid ${lid} erfolgreich aktualisiert.`);
    } else {
      console.log(`Kein Lehrer mit der lid ${lid} gefunden.`);
      // Optional: Hier könntest du einen Fehler werfen, wenn das Bearbeiten eines nicht existierenden Lehrers als Fehlerfall betrachtet werden soll.
      // throw new Error(`Lehrer mit lid ${lid} nicht gefunden.`);
    }
  } catch (error) {
    console.error(`Fehler beim Aktualisieren des Lehrers mit lid ${lid}:`, error);
    throw error;
  }
};


export const createLehrer = async (newLehrer: Omit<Lehrer, 'lid'>): Promise<string> => {
    try {
        const lid = uuidv4();

        await setDoc(
            doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', lid),
            {
                ...newLehrer,
                lid
            }
        );

        return lid;
    } catch (error) {
        console.error('Error creating teacher:', error);
        throw error;
    }
};

export const deleteLehrer = async (lid: string): Promise<void> => {
  try {
    const lehrerCollectionRef = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer');
    const q = query(lehrerCollectionRef, where('lid', '==', lid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Es wurde mindestens ein Dokument mit der passenden lid gefunden
      // Da 'lid' eindeutig sein sollte, gehen wir davon aus, dass es maximal ein Dokument gibt
      const docToDelete = querySnapshot.docs[0];
      const lehrerRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', docToDelete.id);
      await deleteDoc(lehrerRef);
      console.log(`Lehrer mit lid ${lid} erfolgreich gelöscht.`);
    } else {
      console.log(`Kein Lehrer mit der lid ${lid} gefunden.`);
      // Optional: Hier könntest du einen Fehler werfen, wenn das Löschen eines nicht existierenden Lehrers als Fehlerfall betrachtet werden soll.
      // throw new Error(`Lehrer mit lid ${lid} nicht gefunden.`);
    }
  } catch (error) {
    console.error(`Fehler beim Löschen des Lehrers mit lid ${lid}:`, error);
    throw error;
  }
};

export const getLehrerKuerzelByLid = async (lid: string): Promise<string | null> => {
    try {
        const teacherRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', lid);
        const docSnap = await getDoc(teacherRef);
        if (docSnap.exists()) {
            const teacherData = docSnap.data() as Lehrer;
            return teacherData.Kürzel || null;
        }
        return null;
    } catch (error) {
        console.error('Error fetching teacher Kürzel:', error);
        return null;
    }
};

// ========================
// ATTENDANCE & ABSENCE FUNCTIONS
// ========================

export const getAttendances = async (): Promise<DocumentData[]> => {
    const attendanceQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Anwesenheiten'));
    const querySnapshot = await getDocs(attendanceQuery);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getAbsences = async (
  sortKey: string = 'date',
  sortOrder: 'asc' | 'desc' = 'desc',
  pageSize: number = 10,
  lastVisible: QueryDocumentSnapshot<DocumentData> | null = null,
  direction: 'next' | 'prev' = 'next'
): Promise<{ 
  absences: Absence[]; 
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
  firstDoc: QueryDocumentSnapshot<DocumentData> | null;
  hasMore: boolean 
}> => {
  try {
    let absencesQuery = query(
      collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Abwesenheiten'),
      orderBy(sortKey, sortOrder),
      direction === 'next' ? limit(pageSize) : limitToLast(pageSize)
    );

    // Apply pagination cursor
    if (lastVisible) {
      absencesQuery = query(
        collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Abwesenheiten'),
        orderBy(sortKey, sortOrder),
        direction === 'next' ? startAfter(lastVisible) : endBefore(lastVisible),
        direction === 'next' ? limit(pageSize) : limitToLast(pageSize)
      );
    }

    const querySnapshot = await getDocs(absencesQuery);
    const absences = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Absence[];

    // Determine if there are more documents
    const hasMore = absences.length === pageSize;

    return {
      absences,
      lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1] || null,
      firstDoc: querySnapshot.docs[0] || null,
      hasMore
    };
  } catch (error) {
    console.error("Error fetching absences:", error);
    return {
      absences: [],
      lastDoc: null,
      firstDoc: null,
      hasMore: false
    };
  }
};
  
  export const createAbsence = async (absence: Omit<Absence, 'id'>): Promise<void> => {
    const absencesRef = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Abwesenheiten');
    await addDoc(absencesRef, absence);
  };
export const updateAbsence = async (absenceId: string, updates: Partial<Absence>): Promise<void> => {
    const absenceRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Abwesenheiten', absenceId);
    await updateDoc(absenceRef, updates);
};
export const deleteAbsence = async (absenceId: string): Promise<void> => {
    const absenceRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Abwesenheiten', absenceId);
    await deleteDoc(absenceRef);
  };

// ========================
// USER FUNCTIONS
// ========================

export const getCurrentUser = async (): Promise<User | null> => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user || !user.email) {
    console.log('Kein angemeldeter Benutzer oder keine E-Mail gefunden.');
    return null;
  }

  console.log('Angemeldeter Benutzer:', user);


  const userCollectionRef = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'User');
  const emailQuery = query(userCollectionRef, where('email', '==', user.email));

  try {
    const querySnapshot = await getDocs(emailQuery);

    if (!querySnapshot.empty) {
      // Da die E-Mail eindeutig sein sollte, erwarten wir maximal ein Dokument
      const docSnap = querySnapshot.docs[0];
      return { ...docSnap.data(), uid: docSnap.id } as User;
    } else {
      console.log('Kein Benutzer mit der E-Mail gefunden:', user.email);
      return null;
    }
  } catch (error) {
    console.error('Fehler beim Abrufen des Benutzers anhand der E-Mail:', error);
    return null;
  }
};
