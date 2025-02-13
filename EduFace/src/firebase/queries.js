import { db } from './firebase';
import { query, collection, getDocs, getDoc, doc, deleteDoc, updateDoc, addDoc, setDoc, where, orderBy, startAfter, endBefore, limit, limitToLast, increment } from 'firebase/firestore';

export const getSchueler = async (sortKey = 'Nachname', sortOrder = 'asc', pageSize = 9, lastVisible = null, direction = 'next') => {
    let schuelerQuery;
    if (sortKey === 'KID') {
        schuelerQuery = query(
            collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
            orderBy('KID', sortOrder),
            orderBy('Katalognummer', 'asc'),
            direction === 'next' ? limit(pageSize) : limitToLast(pageSize)
        );
    } else {
        schuelerQuery = query(
            collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
            orderBy(sortKey, sortOrder),
            direction === 'next' ? limit(pageSize) : limitToLast(pageSize)
        );
    }

    if (lastVisible) {
        if (sortKey === 'KID') {
            schuelerQuery = query(
                collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
                orderBy('KID', sortOrder),
                orderBy('Katalognummer', sortOrder),
                direction === 'next' ? startAfter(lastVisible) : endBefore(lastVisible),
                direction === 'next' ? limit(pageSize) : limitToLast(pageSize)
            );
        } else {
            schuelerQuery = query(
                collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
                orderBy(sortKey, sortOrder),
                direction === 'next' ? startAfter(lastVisible) : endBefore(lastVisible),
                direction === 'next' ? limit(pageSize) : limitToLast(pageSize)
            );
        }
    }

    const querySnapshot = await getDocs(schuelerQuery);
    const schueler = [];
    querySnapshot.forEach((doc) => {
        schueler.push({ sid: doc.id, ...doc.data() });
    });

    console.log('Fetched students from Firestore:', schueler); // Debug log

    const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    const firstDoc = querySnapshot.docs[0];
    return { schueler, lastDoc, firstDoc };
};

export const getKlassen = async (sortKey = 'Name', sortOrder = 'asc', pageSize = 9, lastVisible = null) => {
    let klassenQuery = query(
        collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
        orderBy(sortKey, sortOrder),
        limit(pageSize)
    );

    if (lastVisible) {
        klassenQuery = query(
            collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
            orderBy(sortKey, sortOrder),
            startAfter(lastVisible),
            limit(pageSize)
        );
    }

    const querySnapshot = await getDocs(klassenQuery);
    const klassen = [];
    querySnapshot.forEach((doc) => {
        klassen.push({ KID: doc.id, ...doc.data() });
    });

    const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    return { klassen, lastDoc };
};

export const getSchuelerCountForKlasse = async (KID) => {
    const schuelerQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'), where('KID', '==', KID));
    const querySnapshot = await getDocs(schuelerQuery);
    return querySnapshot.size;
};

export const getKlasseFromKID = async (KlasseId) => {
    const klasseRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', KlasseId.toString());
    const docSnap = await getDoc(klasseRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
        return null;
    }
};

export const getKIDFromClassName = async (className) => {
    const klasseQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'), where('Name', '==', className));
    const querySnapshot = await getDocs(klasseQuery);
    if (!querySnapshot.empty) {
        const klasseDoc = querySnapshot.docs[0];
        return klasseDoc.id;
    } else {
        console.log("No such class!");
        return null;
    }
};

export const deleteStudent = async (sid) => {
    try {
        const studentQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'), where('sid', '==', sid));
        const querySnapshot = await getDocs(studentQuery);
        if (!querySnapshot.empty) {
            const studentDoc = querySnapshot.docs[0];
            const studentData = studentDoc.data();
            const klasseRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', studentData.KID.toString());
            await deleteDoc(studentDoc.ref);
            await updateDoc(klasseRef, { SchuelerAnzahl: increment(-1) });
            console.log(`Deleted student with ID: ${sid}`);
        } else {
            console.log("No such student!");
        }
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
};

export const editStudent = async (sid, updatedData) => {
    try {
        const studentQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'), where('sid', '==', sid));
        const querySnapshot = await getDocs(studentQuery);
        if (!querySnapshot.empty) {
            const studentDoc = querySnapshot.docs[0];
            await updateDoc(studentDoc.ref, updatedData);
            console.log(`Updated student with ID: ${sid}`);
        } else {
            console.log("No such student!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
};

export const createStudent = async (newStudent) => {
    try {
        const klasseRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', newStudent.KID.toString());
        await updateDoc(klasseRef, { SchuelerAnzahl: increment(1) });

        // Get the current number of students to assign a sequential ID starting from 1000
        const schuelerQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'));
        const querySnapshot = await getDocs(schuelerQuery);
        const newStudentId = 1000 + querySnapshot.size;
        newStudent.sid = newStudentId;

        await setDoc(doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler', newStudentId.toString()), newStudent);
        console.log('Created new student with ID:', newStudentId);
    } catch (error) {
        console.error("Error creating student: ", error);
    }
};

export const deleteKlasse = async (KID) => {
    try {
        const klasseRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', KID.toString());
        await deleteDoc(klasseRef);
        console.log(`Deleted class with ID: ${KID}`);
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
};

export const editKlasse = async (KID, updatedData) => {
    try {
        const klasseQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'), where('KID', '==', KID));
        const querySnapshot = await getDocs(klasseQuery);
        if (!querySnapshot.empty) {
            const klasseDoc = querySnapshot.docs[0];
            if (updatedData.KV !== undefined) {
                await updateDoc(klasseDoc.ref, updatedData);
                console.log(`Updated class with ID: ${KID}`);
            } else {
                console.error("KV field is undefined");
            }
        } else {
            console.log("No such class!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
};

export const createKlasse = async (newKlasse) => {
    try {
        // Get the current number of classes to assign a sequential ID starting from 1000
        const klassenQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'));
        const querySnapshot = await getDocs(klassenQuery);
        const newKlasseId = 1000 + querySnapshot.size;
        newKlasse.KID = newKlasseId;

        await setDoc(doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', newKlasseId.toString()), newKlasse);
        console.log('Created new class with ID:', newKlasseId);
    } catch (error) {
        console.error("Error creating class: ", error);
    }
};

export const getLehrer = async (sortKey = 'Name.Nachname', sortOrder = 'asc', pageSize = 9, lastVisible = null) => {
    let lehrerQuery = query(
        collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'),
        orderBy(sortKey, sortOrder),
        limit(pageSize)
    );

    if (lastVisible) {
        lehrerQuery = query(
            collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'),
            orderBy(sortKey, sortOrder),
            startAfter(lastVisible),
            limit(pageSize)
        );
    }

    const querySnapshot = await getDocs(lehrerQuery);
    const lehrer = [];
    querySnapshot.forEach((doc) => {
        lehrer.push({ Lid: doc.id, ...doc.data() });
    });

    const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    return { lehrer, lastDoc };
};

export const getLehrerByKuerzel = async (kuerzel) => {
    const lehrerQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'), where('Kürzel', '==', kuerzel));
    const querySnapshot = await getDocs(lehrerQuery);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
    } else {
        console.log("No teacher found with the given Kürzel");
        return null;
    }
};

export const getLehrerByLid = async (Lid) => {
    const lehrerRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', Lid.toString());
    const docSnap = await getDoc(lehrerRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No teacher found with the given Lid");
        return null;
    }
};

export const deleteLehrer = async (Lid) => {
    try {
        const lehrerRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', Lid.toString());
        await deleteDoc(lehrerRef);
        console.log(`Deleted teacher with ID: ${Lid}`);
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
};

export const editLehrer = async (Lid, updatedData) => {
    try {
        const lehrerRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', Lid.toString());
        await updateDoc(lehrerRef, updatedData);
        console.log(`Updated teacher with ID: ${Lid}`);
    } catch (error) {
        console.error("Error updating document: ", error);
    }
};

export const createLehrer = async (newLehrer) => {
    try {
        const lehrerQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'));
        const querySnapshot = await getDocs(lehrerQuery);
        const newLehrerId = 1000 + querySnapshot.size;
        newLehrer.Lid = newLehrerId;

        await setDoc(doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', newLehrerId.toString()), newLehrer);
        console.log('Created new teacher with ID:', newLehrerId);
    } catch (error) {
        console.error("Error creating teacher: ", error);
    }
};

export const getSchuelerBySid = async (sid) => {
    const schuelerRef = doc(db, "EduFace", "Schulzentrum-ybbs", "Schueler", sid.toString());
    const schuelerDoc = await getDoc(schuelerRef);
    if (schuelerDoc.exists()) {
      const Schueler = schuelerDoc.data();
      return {
        Schueler
      };
    }
    return { Schueler: '' };
  };

export const getTimetableForClass = async (KID) => {
  try {
    const timetableRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Stundenplan', KID.toString());
    const docSnap = await getDoc(timetableRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No timetable found for class:", KID);
      return null;
    }
  } catch (error) {
    console.error("Error fetching timetable for class:", error);
    return null;
  }
};


export const getAllTimetables = async () => {
  try {
    const timetableCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Stundenplan');
    const querySnapshot = await getDocs(timetableCollection);
    const timetables = [];
    querySnapshot.forEach((doc) => {
      timetables.push({ KID: doc.id, ...doc.data() });
    });
    return timetables;
  } catch (error) {
    console.error("Error fetching all timetables:", error);
    return [];
  }
};


export const getTimetableForStudent = async (sid) => {
  try {
    const studentRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler', sid.toString());
    const studentDoc = await getDoc(studentRef);
    if (studentDoc.exists()) {
      const studentData = studentDoc.data();
      const KID = studentData.KID;
      return await getTimetableForClass(KID);
    } else {
      console.log("No student found with SID:", sid);
      return null;
    }
  } catch (error) {
    console.error("Error fetching timetable for student:", error);
    return null;
  }
};