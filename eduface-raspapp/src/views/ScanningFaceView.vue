<template>
  <div class="scanning-face-view">
    <div class="camera-section">

    </div>
    <div class="info-section">
      <button class="btn-primary">NFC einlesen</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import socket from "../util/socket";
import { useRouter } from "vue-router";

export default defineComponent({ 
  name: "ScanningFaceView",
  setup() {
    const router = useRouter();
    const message = ref<string | null>(null);
    const isLoading = ref(false);

    socket.on("message", (data) => {
      if(data === "upload"){
        router.push('/upload');
      }
      else if(data === "finished-Scanning"){
        router.push('/');
      }
    });

    return {
      message,
      isLoading,
    };
  },
});
</script>
<style scoped src="../style.css"></style>