import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors"; // Import the CORS middleware

const app = express();
const PORT = 5000;

// External API configuration
const EXTERNAL_API_URL = "http://192.168.10.100:5000/face/upload";

// Use CORS middleware to allow all origins by default
app.use(cors()); // Make sure CORS is applied before routes
app.options("*", cors());  // Handle pre-flight OPTIONS requests


interface ExternalApiResponse {
  uid: string;
}

interface ApiResponse {
  success: boolean;
  uid?: string;
  error?: string;
}

app.get(
  "/schueler-hinzufuegen",
  async (req: Request, res: Response<ApiResponse>) => {
    console.log("Request received: /schueler-hinzufuegen");

    try {
      console.log(`Calling external API: ${EXTERNAL_API_URL}`);

      // Log request details
      console.log("Request details:", req.query);

      const response = await axios.get<ExternalApiResponse>(EXTERNAL_API_URL);
      console.log("External API response:", response.data);

      const uid = response.data?.uid;
      if (!uid) {
        console.error("UID not found in external API response.");
        throw new Error("UID not found in external API response.");
      }

      console.log("UID successfully retrieved:", uid);

      res.json({
        success: true,
        uid: uid,
      });
    } catch (error: any) {
      console.error("Error in /schueler-hinzufuegen:", error.message);
      res.status(500).json({
        success: false,
        error: error.message || "An unknown error occurred.",
      });
    }
  },
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
