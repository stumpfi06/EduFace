import axios from "axios";

const API_BASE_URL = "https://example.com/api"; // Ersetze durch die echte URL

export const sendAttendance = async (action: "kommen" | "gehen"): Promise<{ message: string }> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/attendance`, { action });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Fehler bei der API-Anfrage");
  }
};
