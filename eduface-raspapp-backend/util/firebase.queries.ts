import { db } from "./firebase.config";
import { collection, addDoc, updateDoc, getDocs } from "firebase/firestore";


const neuerAnwesenheitsEintrag = async (sid: string) => {
    console.log("AnwesenheitsEintrag:", sid);

    if (!sid || typeof sid !== "string") {
        console.error("Invalid sid:", sid);
        return;
    }

    const data = {
        sid,
        arrivedAt: new Date(),  
    };

    console.log("Attempting to write:", JSON.stringify(data));

    try {
        const docRef = await addDoc(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Anwesenheiten'), data);
        console.log("Document written with ID:", docRef.id);   
    } catch (error) {
        console.error("Error writing document:", error);
    }
};

const anwesenheitAustragen = async (sid:string) => {
    console.log("Anwesenheit austragen:", sid);

    if (!sid || typeof sid !== "string") {
        console.error("Invalid sid:", sid);
        return;
    }

    const querySnapshot = await getDocs(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Anwesenheiten'));
    querySnapshot.forEach((doc) => {
        if (doc.data().sid === sid && !doc.data().leftAt) {
            console.log("Updating document:", doc.id);
            updateDoc(doc.ref, {
                leftAt: new Date(),  
            });
        }
    });
};

export { neuerAnwesenheitsEintrag, anwesenheitAustragen };