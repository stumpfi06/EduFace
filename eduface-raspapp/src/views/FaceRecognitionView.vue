<template>
  <div class="face-recognition-view">
    <h1>EduFace</h1>
    <button class="btn-help" @click="showHelp = true">Help</button>
    <div class="buttons-container">
      <button class="btn-primary" @click="handleAction('kommen')" :disabled="isLoading">Kommen</button>
      <button class="btn-secondary" @click="handleAction('gehen')" :disabled="isLoading">Gehen</button>
    </div>
    
    <div v-if="showHelp" class="modal">
      <div class="modal-content">

        <p>{{ helpMessage }}</p>
        <button class="btn-close" @click="showHelp = false">Close</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import socket from "../util/socket";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "FaceRecognitionView",
  setup() {

    const router = useRouter();
    const message = ref<string | null>(null);
    const isLoading = ref(false);
    const showHelp = ref(false);
    const helpMessage = ref("Drücken Sie auf Kommen oder Gehen je nachdem ob Sie in die Schule kommen oder gehen. Nachdem Sie auf den Knopf gedrückt haben platzieren Sie ihr Gesicht mittig vor die Kamera wenn Sie stattdessen mit NFC sich eintragen wollen können sie danach auf den NFC Button am rechten Rand drücken.");

    const handleAction = (action: string) => {
      socket.send(action);
      router.push('/scanning-face');
    }

    socket.on("message", (data) => {
      if(data === "upload"){
        router.push('/upload');
      }
    });
   

    return {
      message,
      isLoading,
      showHelp,
      helpMessage,
      handleAction,
    };
  },
});
</script>


