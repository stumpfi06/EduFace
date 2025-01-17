<template>
  <div class="face-recognition-view">
    <h1>EduFace</h1>
    <button @click="addFace" :disabled="isLoading">Gesicht hinzufügen</button>
    <button @click="readNFC" :disabled="isLoading">NFC auslesen</button>
    <button @click="identify" :disabled="isLoading">Wer bin ich?</button>
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
    const API_BASE_URL = "http://192.168.10.100:6333";

    // Add face to the system
    const addFace = async () => {
      const name = prompt("Bitte geben Sie Ihren Namen ein:");
      if (!name) {
        message.value = "Name wurde nicht eingegeben.";
        return;
      }

      try {
        isLoading.value = true;
        const response = await axios.post(`${API_BASE_URL}/face`, {
          uid: name,
        });
        message.value = response.data.message || "Gesicht erfolgreich hinzugefügt.";
      } catch (error: any) {
        message.value = error.response?.data?.error || "Fehler beim Hinzufügen des Gesichts.";
      } finally {
        isLoading.value = false;
      }
    };

    // Read NFC UID
    const readNFC = async () => {
      try {
        isLoading.value = true;
        const response = await axios.get(`${API_BASE_URL}/nfc`);
        if (response.data.uid) {
          message.value = `NFC UID: ${response.data.uid}`;
        } else {
          message.value = response.data.error || "Fehler beim Auslesen der NFC-Karte.";
        }
      } catch (error: any) {
        message.value = error.response?.data?.error || "Fehler beim NFC-Lesen.";
      } finally {
        isLoading.value = false;
      }
    };

    // Identify the user
    const identify = async () => {
      try {
        isLoading.value = true;
        const response = await axios.post(`${API_BASE_URL}/face`, {
          uid: "identify", // Use a special identifier for identification if needed
        });
        message.value = response.data.message || "Identifikation erfolgreich.";
      } catch (error: any) {
        message.value = error.response?.data?.error || "Fehler bei der Identifikation.";
      } finally {
        isLoading.value = false;
      }
    };

    return {
      message,
      isLoading,
      addFace,
      readNFC,
      identify,
    };
  },
});
</script>

<style scoped scr="../css/FaceRecognitionView.css">

</style>
