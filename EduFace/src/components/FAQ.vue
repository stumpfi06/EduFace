<template>
    <div class="FAQ">
        <h2>Fragen?</h2>
        <FAQFrage />
        <p>Noch mehr Fragen?</p>
        <Button text="Kontakt aufnehmen" width="200px" height="60px" />
    </div>
</template>
<script setup>
import FAQFrage from './FAQFrage.vue'
import Button from './Button.vue'
</script>
<style src="../css/FAQ.css" scoped></style>