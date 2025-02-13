<template>
  <div class="face-recognition-view">
    <h1>EduFace</h1>
    <button @click="handleAction('kommen')" :disabled="isLoading">Kommen</button>
    <button @click="handleAction('gehen')" :disabled="isLoading">Gehen</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "FaceRecognitionView",
  setup() {
    const message = ref<string | null>(null);
    const isLoading = ref(false);

    // Base URL of the Raspberry Pi API
    const API_BASE_URL = "http://192.168.10.102:5000";

    // Handle the action for "Kommen" or "Gehen"
    const handleAction = async (action: "kommen" | "gehen") => {
      console.log(`Starting action: ${action}`);
      try {
        isLoading.value = true;
        message.value = `Versuche Gesichtserkennung für ${action}...`;
        console.log(`Calling API: GET ${API_BASE_URL}/face/query`);

        // 1. Try face recognition
        const faceResponse = await axios.get(`${API_BASE_URL}/face/query`);
        console.log("Face recognition response:", faceResponse.data);

        if (faceResponse.data) {
          message.value = `Gesichtserkennung erfolgreich: ${faceResponse.data.uid}`;
          console.log("Face recognition succeeded.");
        } else {
          throw new Error("Gesichtserkennung fehlgeschlagen.");
        }
      } catch (faceError) {
        console.error("Face recognition failed:", faceError);

        // 2. If face recognition fails, try NFC
        try {
          message.value = `Gesichtserkennung fehlgeschlagen. Versuche NFC für ${action}...`;
          console.log(`Calling API: GET ${API_BASE_URL}/nfc`);
          const nfcResponse = await axios.get(`${API_BASE_URL}/nfc`);
          console.log("NFC response:", nfcResponse.data);

          if (nfcResponse.data && nfcResponse.data.uid) {
            message.value = `NFC erfolgreich: UID ${nfcResponse.data.uid} erkannt.`;
            console.log("NFC succeeded.");
          } else {
            message.value = nfcResponse.data.error || "Fehler beim NFC-Auslesen.";
            console.warn("NFC response contained no UID.");
          }
        } catch (nfcError) {
          console.error("NFC failed:", nfcError);

          // Handle errors from NFC
          const errorMessage =
            nfcError.response?.data?.error || nfcError.message || "Unbekannter Fehler.";
          message.value = `Fehler bei NFC: ${errorMessage}`;
        }
      } finally {
        isLoading.value = false;
        console.log(`Action ${action} completed.`);
      }
    };

    return {
      message,
      isLoading,
      handleAction,
    };
  },
});
</script>

<style scoped>
.face-recognition-view {
  text-align: center;
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.4rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
}

button {
  display: inline-block;
  margin: 15px 10px;
  padding: 15px 25px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(90deg, #4a90e2, #007bff);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button:hover {
  background: linear-gradient(90deg, #007bff, #4a90e2);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

button:active {
  transform: translateY(2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

button:disabled {
  background: #d1d5db;
  cursor: not-allowed;
  box-shadow: none;
}

p {
  margin-top: 20px;
  font-size: 1rem;
  color: #555;
  line-height: 1.4;
}

p.success {
  color: #38a169;
  font-weight: bold;
}

p.error {
  color: #e53e3e;
  font-weight: bold;
}
</style>
