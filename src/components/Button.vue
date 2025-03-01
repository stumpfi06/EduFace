<template>
  <div :class="buttonClass" :style="{ width: width, height: height }">
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: String,
  width: String,
  height: String,
  type: {
    type: String,
    default: 'primary',
  },
})

const buttonClass = computed(() => {
  if (props.type === 'primary') return 'btn-primary'
  if (props.type === 'secondary') return 'btn-secondary'
  return 'btn-white'
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
  padding: 0.5rem 0.5rem; /* Adjusted padding */
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

.btn-white {
  background-color: white;
  color: black;
  border: 1px solid var(--color-primary);
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  text-align: center;
}

.btn-primary:hover {
  background-color: var(--color-tertiary);
}

.btn-secondary:hover {
  background-color: var(--color-quaternary);
}

.btn-white:hover {
  background-color: var(--color-light-gray);
}

.btn-primary p,
.btn-secondary p,
.btn-white p {
  margin: 0rem;
}
</style>
