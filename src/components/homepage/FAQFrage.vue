<template>
  <div>
    <div class="faq-question" @click="toggleAnswer">
      <span>{{ question }}</span>
      <span class="FAQFrage-button">{{ showAnswer ? '-' : '+' }}</span>
    </div>
    <div :class="['faq-answer', { show: showAnswer }]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
});

const showAnswer = ref(false);

const toggleAnswer = () => {
  showAnswer.value = !showAnswer.value;
};
</script>

<style src="../../css/homepage/FAQFrage.css"></style>
