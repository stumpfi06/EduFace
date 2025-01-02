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

<script>
export default {
  props: {
    question: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showAnswer: false
    };
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    }
  }
};
</script>

<style src="../../css/homepage/FAQFrage.css"></style>