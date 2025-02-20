<template>
  <div class="face-recognition-view">
    <h1>EduFace</h1>
    <div class="buttons-container">
      <button class="btn-primary" @click="handleAction('kommen')" :disabled="isLoading">Kommen</button>
      <button class="btn-secondary" @click="handleAction('gehen')" :disabled="isLoading">Gehen</button>
    </div>
    <p v-if="message">{{ message }}</p>
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

    const handleAction = (action: string) => {
      socket.send(action);
    }

    socket.on("message", (data) => {
      if(data === "upload"){
        router.push('/upload');
      }
    });
   

    return {
      message,
      isLoading,
      handleAction,
    };
  },
});
</script>

