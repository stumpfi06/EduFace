import express, { type Request, type Response } from "express";
import cors from "cors";
import http from "http";

const app = express();

app.use(express.json());


app.use(cors({
    origin: 'http://localhost:8000', // Frontend-Adresse
    methods: ['GET', 'POST'],
}));


const PORT = 8088;


app.get("/face/upload", async (req: Request, res: Response) => {
    res.json({ status: "success", uid: "BBC129OAS" });
});
app.get("/face/query", async (req: Request, res: Response) => {
    res.json({ status: "success", uid: "BBC129OAS" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});
  