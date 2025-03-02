<template>
  <div class="FAQ">
    <div class="FAQ-CTA">
      <h2>Fragen?</h2>
      <p>Noch mehr Fragen?</p>
      <Button
        class="FAQ-button"
        text="Kontakt aufnehmen"
        width="200px"
        height="30px"
        type="white"
        @click="scrollToKontakt"
      />
    </div>
    <div class="faq-questions">
      <FAQFrage question="Was ist EduFace?">
        EduFace ist eine Plattform für Bildungsinhalte.
      </FAQFrage>
      <FAQFrage question="Wie funktioniert EduFace?">
        EduFace bietet eine Vielzahl von Kursen und Lernmaterialien.
      </FAQFrage>
      <FAQFrage question="Ist EduFace kostenlos?">
        Ja, EduFace bietet sowohl kostenlose als auch kostenpflichtige Inhalte.
      </FAQFrage>
      <FAQFrage question="Wie kann ich mich registrieren?">
        Sie können sich über die Registrierungsseite anmelden.
      </FAQFrage>
      <FAQFrage question="Welche Kurse werden angeboten?">
        EduFace bietet Kurse in verschiedenen Bereichen wie Mathematik, Wissenschaft und Sprachen.
      </FAQFrage>
    </div>
  </div>
</template>

<script setup lang="ts">
import FAQFrage from './FAQFrage.vue'
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

<style src="../../css/homepage/FAQ.css" scoped></style>
