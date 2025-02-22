import { db } from "./firebase.config";
import { collection, getDocs, Timestamp, addDoc, query, orderBy, limit, startAfter } from "firebase/firestore";


const neuerAnwesenheitsEintrag = async (sid: string) => {
    console.log("AnwesenheitsEintrag:", sid);

    if (!sid || typeof sid !== "string") {
        console.error("Invalid sid:", sid);
        return;
    }

    const data = {
        sid,
        arrivedAt: new Date(),  // Change Timestamp.now() to Date()
    };

    console.log("Attempting to write:", JSON.stringify(data));

    try {
        const docRef = await addDoc(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Anwesenheiten'), data);
        console.log("Document written with ID:", docRef.id);   
    } catch (error) {
        console.error("Error writing document:", error);
    }
};

import { OrderByDirection } from "firebase/firestore";

export const getKlassen = async (sortKey = 'Name', sortOrder: OrderByDirection = 'asc', pageSize = 9, lastVisible = null) => {
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
    const klassen: { KID: string; }[] = [];
    querySnapshot.forEach((doc) => {
        klassen.push({ KID: doc.id, ...doc.data() });
    });

    const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    return { klassen, lastDoc };
};


const anwesenheitAustragen = async (sid:string) => {

};

export { neuerAnwesenheitsEintrag, anwesenheitAustragen };