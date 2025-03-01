<template>
  <div class="scanning-face-view">
    <div class="camera-section">
      <Camera :resolution="{ width: 819.2, height: 600 }" autoplay facing-mode="user"/>
    </div>
    <div class="info-section">

        <div class="info-button-wrapper">
        <button class="btn-primary btn-scanning" @click="handleNFC">NFC einlesen</button>
        <button class="btn-primary btn-scanning" @click="handleAbbrechen">Abbrechen</button>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import socket from "../util/socket";
import { useRouter } from "vue-router";
import Camera from "simple-vue-camera";


    
export default defineComponent({ 
  components: {
    Camera,
  },

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
    const handleNFC = () => {
      socket.send("nfc");
      router.push('/nfc');
    }
    return {
        handleNFC,
        handleAbbrechen,
      message,
      isLoading,
    };
  },
});
</script>
<style scoped src="../style.css"></style>