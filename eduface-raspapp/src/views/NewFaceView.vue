<template>
    <div class="face-recognition-view">
        <div v-if="state.Overlay" class="overlay">
            <div class="overlay-wrapper">
                <h1 class="overlay-h1">Neues Gesicht zur Datenbank hinzufügen</h1>
                <p class="overlay-p">
                    Bitte stellen Sie sich mittig vor die Kamera und halten Sie die EduCard auf den NFC Reader. Wenn Sie auf den Button klicken, beginnt der Vorgang.
                </p>
                <button class="btn-primary" @click="handleAddFaceButton">Hinzufügen</button>
            </div>
        </div>
        <div class="Camera">

        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from "vue";
  import socket from "../util/socket";

  
  export default defineComponent({
    name: "NewFaceView",
    setup() {
        const state = reactive({
            
            isLoading: false,
            Overlay: true,
            className: '',
            message: '' // To show messages to the user
          });

        const handleAddFaceButton = () => {
            state.Overlay = false;
            socket.send("upload");
        }
        
      return {
        state,
        handleAddFaceButton,
      };
    },
  });
  </script>
  
  