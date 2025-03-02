<template>
  <div class="CTA">
    <h2>
      Schulalltag effizient und stressfrei managen <br />– mit
      <span class="primary-color">EduFace!</span>
    </h2>
    <p>
      Automatisieren Sie das Anwesenheitsmanagement und sparen Sie wertvolle Zeit für das, was
      wirklich zählt: Bildung.
    </p>
    <Button
      class="CTA-button"
      text="Kontakt aufnehmen"
      width="300px"
      height="30px"
      type="primary"
      @click="scrollToKontakt"
    />
  </div>
</template>

<script setup lang="ts">
import Button from '../Button.vue'

const scrollToKontakt = () => {
  const kontaktSection = document.getElementById('kontakt-section')
  if (kontaktSection) {
    const offset = 100 // Adjust this value as needed
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = kontaktSection.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>
<style src="../../css/homepage/CTA.css" scoped></style>
