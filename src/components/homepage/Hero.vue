<template>
  <img alt="Diagonal lines" class="diagonal-lines" src="@/assets/Navbar-Diagonal.svg" />

  <section class="hero">
    <div class="hero-left">
      <h1 class="primary-color">EduFace</h1>
      <p class="p-bigger">Anwesenheit<br />aber <span class="primary-color">besser. </span></p>
    </div>
    <div class="hero-right">
      <p>
        EduFace ermöglicht kontaktlose Anwesenheitserfassung per Gesichtserkennung am Schuleingang.
        So wird die Anwesenheitsverwaltung einfach und modern. Lehrer profitieren von einem
        benutzerfreundlichen Admin-Interface, um Schülerdaten schnell und sicher zu verwalten – für
        einen effizienten Schulalltag.
      </p>
      <div class="hero-buttons">
        <Button text="Mehr Erfahren" width="201px" height="30px" type="primary" @click="scrollToFeature" />
        <Button text="Kontakt aufnehmen" width="200px" height="30px" type="secondary" @click="scrollToKontakt"/>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../Button.vue'

const scrollToFeature = () => {
  const featureSection = document.getElementById('feature-section')
  if (featureSection) {
    const offset = -2080 // Adjust this value as needed
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = featureSection.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
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

<style src="../../css/homepage/Hero.css" scoped></style>

<style scoped>
.hero-right p {
  text-align: justify;
}
</style>
