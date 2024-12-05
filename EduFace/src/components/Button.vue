<template>
  <utton :class="buttonClass" :style="{ width: width, height: height, padding: '0.5rem 1rem', textAlign: 'center' }">
    {{ text }}
  </utton>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: String,
  width: String,
  height: String,
  type: {
    type: String,
    default: 'primary'
  }
})

const buttonClass = computed(() => {
  return props.type === 'primary' ? 'btn-primary' : 'btn-secondary'
})
</script>

<style scoped>
.btn-primary {
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem; 
  padding: 0.5rem 1rem; /* Adjusted padding */
  text-align: center; /* Center text */
}

.btn-secondary {
  background-color: var(--color-secondary);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.5rem 1rem; /* Adjusted padding */
  text-align: center; /* Center text */
}

.btn-primary:hover {
  background-color: var(--color-tertiary);
}

.btn-secondary:hover {
  background-color: var(--color-quaternary);
}
</style>
