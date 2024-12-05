<template>
  <img alt="Diagonal lines" class="diagonal-lines" src="@/assets/Navbar-Diagonal.svg" />
  <img alt="Corner lines" class="corner-lines" src="@/assets/Navbar-Corner.svg" />
  <section class="hero">
    <div class="hero-left">
      <h1 class="primary-color">EduFace</h1>
      <p class=" p-bigger">Anwesenheit<br>aber <span class="primary-color">besser. </span></p>
    </div>
    <div class="hero-right">
      <p>EduFace ermöglicht kontaktlose Anwesenheitserfassung per 
        Gesichtserkennung am Schuleingang. So wird die Anwesenheitsverwaltung
         einfach und modern. Lehrer profitieren von einem benutzerfreundlichen
          Admin-Interface, um Schülerdaten schnell und sicher zu verwalten 
          – für einen effizienten Schulalltag.
      </p>
      <div class="hero-buttons">
        <Button text="Mehr Erfahren" width="200px" height="60px" type="primary" />
        <Button text="Kontakt aufnehmen" width="200px" height="60px" type="secondary" />
      </div>  
    </div>
  </section>
</template>

<script setup>
import Button from './Button.vue'
</script>

<style src="../css/Hero.css" scoped></style>

<style scoped>
.hero-right p {
  text-align: justify;
}
</style>