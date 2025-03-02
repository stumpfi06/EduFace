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

<script setup lang="ts">
const props = defineProps<{
  title: string,
  imageSrc: string,
  description: string,
  layout: string,
  imgType?: string
}>()

const { title, imageSrc, description, layout, imgType = 'cover' } = props
</script>

<style src="@/css/homepage/FeatureCard.css" scoped></style>
