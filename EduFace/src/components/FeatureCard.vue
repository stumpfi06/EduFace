<template>
  <div class="feature-card">
    <img :src="imageSrc" alt="Feature Image" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  imageSrc: String,
  description: String
});
</script>
<style src="../css/FeatureCard.css" scoped></style>