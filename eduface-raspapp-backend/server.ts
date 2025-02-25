import express, { Request, Response } from "express";
import cors from "cors";
import { Server as SocketIo, Socket } from "socket.io";
import http from "http";
import { neuerAnwesenheitsEintrag, anwesenheitAustragen } from "./util/firebase.queries";
import { Timestamp, collection, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./util/firebase.config"; // Add this line
import cron from "node-cron"; // Add this line

const app = express();
const server = http.createServer(app);
const io = new SocketIo(server, {
    cors: {
        origin: "http://localhost:5174",
        methods: ["GET", "POST"]
    }
});

app.use(express.json());
app.use(cors());

const PORT = 8000;

// Speichert die aktuelle Socket-Verbindung
let currentSocket: Socket | null = null;

const delay = (ms: number, cancelToken: { cancelled: boolean }) => new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(() => {
        if (cancelToken.cancelled) {
            reject(new Error('Process cancelled'));
        } else {
            resolve();
        }
    }, ms);

    if (cancelToken.cancelled) {
        clearTimeout(timeout);
        reject(new Error('Process cancelled'));
    }
});

io.on('connection', (socket) => {
    console.log('New client connected');
    currentSocket = socket; 

    socket.on('message', async (message) => {
        console.log('Received:', message);
        if (message === 'kommen' || message === 'gehen') {
            console.log(message);
            const cancelToken = { cancelled: false };
            let useNfc = false;

            socket.once('message', (cancelMessage) => {
                if (cancelMessage === 'abbrechen') {
                    cancelToken.cancelled = true;
                    socket.emit('message', 'process-cancelled');
                } else if (cancelMessage === 'nfc') {
                    useNfc = true;
                    cancelToken.cancelled = false;
                    socket.emit('message', 'switching-to-nfc');
                }
            });

            try {
                let response;
                await delay(1000, cancelToken); // Wait for 10 seconds with cancellation support
                if (useNfc) {
                    response = await getNfc();
                    console.log("used nfc");
                    console.log(response);
                } else {
                    response = await getFace();
                    console.log("used face");
                    console.log(response);
                }

                if (response) {
                    console.log(message);
                    if (!cancelToken.cancelled) {
                        if (message === 'kommen') {
                            console.log(message);
                            await neuerAnwesenheitsEintrag(response);
                            socket.emit('message', 'finished-Scanning');
                        } else {
                            await anwesenheitAustragen(response);
                            socket.emit('message', 'finished-Scanning');
                        }
                    }
                }
            } catch (error) {
                if (error === 'Process cancelled') {
                    console.log('Process was cancelled');
                } else {
                    console.error('Error adding timestamp:', error);
                }
            }  
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        if (currentSocket === socket) {
            currentSocket = null;
        }
    });
});

const waitForMessage = (expectedMessage: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (!currentSocket) {
            console.error("No active WebSocket connection.");
            return reject(new Error("No active WebSocket connection"));
        }

        currentSocket.once('message', (message) => {
            console.log('Received:', message);
            if (message === expectedMessage) {
                resolve();
            } else {
                reject(new Error('Unexpected message received'));
            }
        });
    });
};

app.post("/upload", async (req: Request, res: Response) => {
    io.emit('message', 'upload');

    try {
        await waitForMessage('upload');

        const sid = await addFace();
        if (!sid) {
            res.json({ status: "error", error: "Face not added" });
        } else {
            res.json({ status: "success", sid });
        }
    } catch (error) {
        console.error('Error adding face:', error);
        res.json({ status: "error", error });
    }
});

server.listen(4000, () => {
    console.log('WebSocket Server läuft auf Port 4000');
});

app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});

const addFace = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8088/face/upload', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data.uid;
    } catch (error) {
        console.error('Error adding face:', error);
        return null;
    }
};

const getFace = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8088/face/query', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data.uid;
    } catch (error) {
        console.error('Error adding face:', error);
        return null;
    }
};
const getNfc = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8088/nfc', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data.uid;
    } catch (error) {
        console.error('Error adding face:', error);
        return null;
    }
};

// Schedule a task to run at 16:05 every Monday to Friday
cron.schedule('5 16 * * 1-5', async () => {
    console.log('Running scheduled task at 16:05 Monday to Friday');
    const querySnapshot = await getDocs(collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Anwesenheiten'));
    querySnapshot.forEach(async (doc) => {
        if (!doc.data().leftAt) {
            console.log("Updating document:", doc.id);
            await updateDoc(doc.ref, {
                leftAt: new Date(),  
            });
        }
    });
});