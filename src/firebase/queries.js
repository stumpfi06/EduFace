import { db } from './firebase'
import {
  query,
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
  setDoc,
  where,
  orderBy,
  startAfter,
  endBefore,
  limit,
  limitToLast,
  increment,
} from 'firebase/firestore'
export const getAllSchueler = async () => {
  const schuelerQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'))
  const querySnapshot = await getDocs(schuelerQuery)
  const schueler = []
  querySnapshot.forEach((doc) => {
    schueler.push({ sid: doc.id, ...doc.data() })
  })
  return schueler
}

export const getSchueler = async (
  sortKey = 'Nachname',
  sortOrder = 'asc',
  pageSize = 9,
  lastVisible = null,
  direction = 'next',
) => {
  let schuelerQuery
  if (sortKey === 'KID') {
    schuelerQuery = query(
      collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
      orderBy('KID', sortOrder),
      orderBy('Katalognummer', 'asc'),
      direction === 'next' ? limit(pageSize) : limitToLast(pageSize),
    )
  } else {
    schuelerQuery = query(
      collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
      orderBy(sortKey, sortOrder),
      direction === 'next' ? limit(pageSize) : limitToLast(pageSize),
    )
  }

  if (lastVisible) {
    if (sortKey === 'KID') {
      schuelerQuery = query(
        collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
        orderBy('KID', sortOrder),
        orderBy('Katalognummer', sortOrder),
        direction === 'next' ? startAfter(lastVisible) : endBefore(lastVisible),
        direction === 'next' ? limit(pageSize) : limitToLast(pageSize),
      )
    } else {
      schuelerQuery = query(
        collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
        orderBy(sortKey, sortOrder),
        direction === 'next' ? startAfter(lastVisible) : endBefore(lastVisible),
        direction === 'next' ? limit(pageSize) : limitToLast(pageSize),
      )
    }
  }

  const querySnapshot = await getDocs(schuelerQuery)
  const schueler = []
  querySnapshot.forEach((doc) => {
    schueler.push({ sid: doc.id, ...doc.data() })
  })

  const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]
  const firstDoc = querySnapshot.docs[0]
  console.log('Fetched students:', schueler)
  return { schueler, lastDoc, firstDoc }
}

export const getKlassen = async (
  sortKey = 'Name',
  sortOrder = 'asc',
  pageSize = 9,
  lastVisible = null,
) => {
  let klassenQuery = query(
    collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
    orderBy(sortKey, sortOrder),
    limit(pageSize),
  )

  if (lastVisible) {
    klassenQuery = query(
      collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
      orderBy(sortKey, sortOrder),
      startAfter(lastVisible),
      limit(pageSize),
    )
  }

  const querySnapshot = await getDocs(klassenQuery)
  const klassen = []
  querySnapshot.forEach((doc) => {
    klassen.push({ KID: doc.id, ...doc.data() })
  })

  const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]
  console.log('Fetched classes:', klassen)
  return { klassen, lastDoc }
}

export const getSchuelerCountForKlasse = async (KID) => {
  const schuelerQuery = query(
    collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
    where('KID', '==', KID),
  )
  const querySnapshot = await getDocs(schuelerQuery)
  return querySnapshot.size
}

export const getKlasseFromKID = async (KlasseId) => {
  const klasseRef = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen')
  const klasseQuery = query(klasseRef, where('KID', '==', KlasseId))
  const querySnapshot = await getDocs(klasseQuery)
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0]
    return docSnap.data()
  } else {
    console.log('No such document!')
    return null
  }
}

export const getKIDFromClassName = async (className) => {
  const klasseQuery = query(
    collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
    where('Name', '==', className),
  )
  const querySnapshot = await getDocs(klasseQuery)
  if (!querySnapshot.empty) {
    const klasseDoc = querySnapshot.docs[0]
    return klasseDoc.id
  } else {
    console.log('No such class!')
    return null
  }
}

export const deleteStudent = async (sid) => {
  try {
    const studentQuery = query(
      collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
      where('sid', '==', sid),
    )
    const querySnapshot = await getDocs(studentQuery)
    if (!querySnapshot.empty) {
      const studentDoc = querySnapshot.docs[0]
      const studentData = studentDoc.data()
      const klasseRef = doc(
        db,
        'EduFace',
        'Schulzentrum-ybbs',
        'Klassen',
        studentData.KID.toString(),
      )
      await deleteDoc(studentDoc.ref)
      await updateDoc(klasseRef, { SchuelerAnzahl: increment(-1) })
    } else {
      console.log('No such student!')
    }
  } catch (error) {
    console.error('Error deleting document: ', error)
  }
}

export const editStudent = async (sid, updatedData) => {
  try {
    const studentQuery = query(
      collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
      where('sid', '==', sid),
    )
    const querySnapshot = await getDocs(studentQuery)
    if (!querySnapshot.empty) {
      const studentDoc = querySnapshot.docs[0]
      await updateDoc(studentDoc.ref, updatedData)
    } else {
      console.log('No such student!')
    }
  } catch (error) {
    console.error('Error updating document: ', error)
  }
}

export const createStudent = async (newStudent) => {
  try {
    const klasseQuery = query(
      collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
      where('KID', '==', newStudent.KID),
    )
    const querySnapshot = await getDocs(klasseQuery)
    if (!querySnapshot.empty) {
      const klasseDoc = querySnapshot.docs[0]
      await updateDoc(klasseDoc.ref, { SchuelerAnzahl: increment(1) })
    }
    await addDoc(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'), newStudent)
  } catch (error) {
    console.error('Error creating student: ', error)
  }
}

export const deleteKlasse = async (KID) => {
  try {
    const klasseRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', KID.toString())
    await deleteDoc(klasseRef)
  } catch (error) {
    console.error('Error deleting document: ', error)
  }
}

export const editKlasse = async (KID, updatedData) => {
  try {
    const klasseQuery = query(
      collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'),
      where('KID', '==', KID),
    )
    const querySnapshot = await getDocs(klasseQuery)
    if (!querySnapshot.empty) {
      const klasseDoc = querySnapshot.docs[0]
      if (updatedData.KV !== undefined) {
        await updateDoc(klasseDoc.ref, updatedData)
      } else {
        console.error('KV field is undefined')
      }
    } else {
      console.log('No such class!')
    }
  } catch (error) {
    console.error('Error updating document: ', error)
  }
}

export const createKlasse = async (newKlasse) => {
  try {
    // Get the current number of classes to assign a sequential ID starting from 1000
    const klassenQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen'))
    const querySnapshot = await getDocs(klassenQuery)
    const newKlasseId = 1000 + querySnapshot.size
    newKlasse.KID = newKlasseId

    await setDoc(
      doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Klassen', newKlasseId.toString()),
      newKlasse,
    )
  } catch (error) {
    console.error('Error creating class: ', error)
  }
}

export const getLehrer = async (
  sortKey = 'Name.Nachname',
  sortOrder = 'asc',
  pageSize = 9,
  lastVisible = null,
) => {
  let lehrerQuery = query(
    collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'),
    orderBy(sortKey, sortOrder),
    limit(pageSize),
  )

  if (lastVisible) {
    lehrerQuery = query(
      collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'),
      orderBy(sortKey, sortOrder),
      startAfter(lastVisible),
      limit(pageSize),
    )
  }

  const querySnapshot = await getDocs(lehrerQuery)
  const lehrer = []
  querySnapshot.forEach((doc) => {
    lehrer.push({ Lid: doc.id, ...doc.data() })
  })

  const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]
  return { lehrer, lastDoc }
}

export const getLehrerByKuerzel = async (kuerzel) => {
  const lehrerQuery = query(
    collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'),
    where('Kürzel', '==', kuerzel),
  )
  const querySnapshot = await getDocs(lehrerQuery)
  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].data()
  } else {
    console.log('No teacher found with the given Kürzel')
    return null
  }
}

export const getLehrerByLid = async (Lid) => {
  const lehrerRef = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer')
  const Lehrerquery = await query(lehrerRef, where('lid', '==', Lid))
  const querySnapshot = await getDocs(Lehrerquery)
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0]
    return docSnap.data()
  } else {
    console.log('No such document!')
    return null
  }
}

export const deleteLehrer = async (Lid) => {
  try {
    const lehrerRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', Lid.toString())
    await deleteDoc(lehrerRef)
  } catch (error) {
    console.error('Error deleting document: ', error)
  }
}

export const editLehrer = async (Lid, updatedData) => {
  try {
    const lehrerRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', Lid.toString())
    await updateDoc(lehrerRef, updatedData)
  } catch (error) {
    console.error('Error updating document: ', error)
  }
}

export const createLehrer = async (newLehrer) => {
  try {
    const lehrerQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer'))
    const querySnapshot = await getDocs(lehrerQuery)
    const newLehrerId = 1000 + querySnapshot.size
    newLehrer.Lid = newLehrerId

    await setDoc(
      doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', newLehrerId.toString()),
      newLehrer,
    )
  } catch (error) {
    console.error('Error creating teacher: ', error)
  }
}

// New function: get the teacher's Kürzel (or kuerzel) based on the teacher UID (Lid)
export const getLehrerKuerzelByLid = async (Lid) => {
  try {
    const teacherRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Lehrer', Lid.toString())
    const docSnap = await getDoc(teacherRef)
    if (docSnap.exists()) {
      const teacherData = docSnap.data()
      // Return the teacher's Kürzel (try both "Kürzel" and "kuerzel")
      return teacherData.Kürzel || teacherData.kuerzel || null
    } else {
      console.log('No teacher found with the given Lid:', Lid)
      return null
    }
  } catch (error) {
    console.error('Error fetching teacher Kuerzel by Lid:', error)
    return null
  }
}

export const getSchuelerBySid = async (sid) => {
  const schuelerquery = query(
    collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler'),
    where('sid', '==', sid),
  )
  const querySnapshot = await getDocs(schuelerquery)
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0]
    const Schueler = docSnap.data()
    return {
      Schueler,
    }
  }
  return { Schueler: '' }
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0]
    return docSnap.data()
  } else {
    console.log('No such document!')
    return null
  }
}

export async function getTimetable(classId) {
  const classRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'Stundenplan', classId.toString())
  const classSnap = await getDoc(classRef)

  if (!classSnap.exists()) {
    console.error('No timetable found for class ID:', classId)
    return []
  }

  const data = classSnap.data().wochentage
  const daysOfWeek = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag']

  let timetable = Array(10)
    .fill(null)
    .map(() => ({})) // Up to 10 lessons per day

  daysOfWeek.forEach((day) => {
    if (data[day]) {
      data[day].forEach((lesson) => {
        const hour = lesson.Stunde
        timetable[hour - 1][day] = {
          Fach: lesson.Fach || 'Unbekannt',
          Lehrer: lesson.Lehrer || 'N/A',
          // room: lesson.Raum || "N/A",  // Future-proofing for room integration
          startTime: getLessonTime(hour).start,
          endTime: getLessonTime(hour).end,
        }
      })
    }
  })

  return timetable
}

// Helper function for lesson times (adjust to your schedule)
function getLessonTime(hour) {
  const times = {
    1: { start: '08:00', end: '08:50' },
    2: { start: '08:55', end: '09:45' },
    3: { start: '10:00', end: '10:50' },
    4: { start: '10:55', end: '11:45' },
    5: { start: '12:00', end: '12:50' },
    6: { start: '12:55', end: '13:45' },
    7: { start: '14:00', end: '14:50' },
    8: { start: '14:55', end: '15:45' },
    9: { start: '16:00', end: '16:50' },
    10: { start: '16:55', end: '17:45' },
  }
  return times[hour] || { start: '?', end: '?' }
}

export const getAttendances = async () => {
  const attendanceQuery = query(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Anwesenheiten'))
  const querySnapshot = await getDocs(attendanceQuery)
  const attendances = []
  querySnapshot.forEach((doc) => {
    attendances.push({ id: doc.id, ...doc.data() })
  })
  console.log('Fetched attendances:', attendances)
  return attendances
}


