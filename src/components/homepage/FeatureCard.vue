<template>
  <div class="feature-card" :class="{ 'layout-2': layout === 'layout-2' }">
    <img
      :src="imageSrc"
      :alt="title"
      class="card-image"
      :class="{ contain: imgType === 'contain' }"
    />
    <div class="card-text">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  imageSrc: String,
  description: String,
  layout: String,
  imgType: {
    type: String,
    default: 'cover',
  },
})
</script>

<style src="@/css/homepage/FeatureCard.css" scoped></style>
