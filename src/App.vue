<script setup lang="ts">
import { RouterView } from 'vue-router'

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      document.body.classList.add('scrolled')
    } else {
      document.body.classList.remove('scrolled')
    }
  })
}
</script>

<template>
  <RouterView />
</template>

<style src="./css/App.css"></style>
