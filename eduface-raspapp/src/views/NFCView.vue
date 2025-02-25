<template>
  <div class="scanning-face-view">
    <div class="nfc-section">

    </div>
    <div class="info-section">

        <div class="info-button-wrapper">
        <button class="btn-primary btn-scanning" @click="handleScan">Gesicht scannen</button>
        <button class="btn-primary btn-scanning" @click="handleAbbrechen">Abbrechen</button>
        </div>
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
    const handleAbbrechen = () => {
    socket.send("abbrechen");
      router.push('/');
    }
    const handleScan = () => {
      socket.send("scan-face");
      router.push('/scanning-face');
    }
    return {
        handleScan,
        handleAbbrechen,
      message,
      isLoading,
    };
  },
});
</script>
<style scoped src="../style.css"></style>