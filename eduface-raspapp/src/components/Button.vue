<template>
    <button @click="handleClick" :disabled="isLoading" class="action-button">
      {{ text }}
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "ActionButton",
    props: {
      text: {
        type: String,
        required: true,
      },
      action: {
        type: String as () => "kommen" | "gehen",
        required: true,
      },
    },
    emits: ["onAction"],
    setup(props, { emit }) {
      const isLoading = ref(false);
  
      const handleClick = async () => {
        try {
          isLoading.value = true;
          emit("onAction", props.action);
        } finally {
          isLoading.value = false;
        }
      };
  
      return {
        handleClick,
        isLoading,
      };
    },
  });
  </script>
  
  <style scoped>
  .action-button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  