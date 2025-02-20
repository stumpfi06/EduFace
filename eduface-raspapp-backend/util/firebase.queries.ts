import { db } from "./firebase.config";
import { collection, getDocs, Timestamp, addDoc } from "firebase/firestore";

interface AnwesenheitsEintrag {
    uid: string;
    arrivedAt: Timestamp;
    leftAt: Timestamp | null;
}

const neuerAnwesenheitsEintrag = async (anwesenheitsEintrag: AnwesenheitsEintrag) => {
    console.log("AnwesenheitsEintrag:", anwesenheitsEintrag);

    try {
        await addDoc(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Anwesenheit'), {
            sid: anwesenheitsEintrag.uid,
            arrivedAt: anwesenheitsEintrag.arrivedAt,
            leftAt: anwesenheitsEintrag.leftAt
        });

        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
};

const anwesenheitAustragen = async () => {

};

export { neuerAnwesenheitsEintrag, anwesenheitAustragen, AnwesenheitsEintrag };