<template>
  <div id="app">
    <FaceRecognitionView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FaceRecognitionView from "./views/FaceRecognitionView.vue";

export default defineComponent({
  name: "App",
  components: {
    FaceRecognitionView,
  },
});
</script>

<style src="./style.css"></style>
