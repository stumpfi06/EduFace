<template>
  <section id="feature-section" class="feature">
    <svg viewBox="0 0 1440 320" class="wave-top">
      <path
        class="wave-top-path"
        fill-opacity="1"
        d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,186.7C672,192,768,224,864,213.3C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <div class="feature-grid">
      <FeatureCard
        v-for="(feature, index) in features"
        :key="index"
        :title="feature.title"
        :imageSrc="feature.imageSrc"
        :description="feature.description"
        :layout="index < 3 ? 'layout-1' : 'layout-2'"
        :imgType="feature.type || 'cover'"
      />
    </div>
    <svg class="wave-bottom" viewBox="0 0 1440 320">
      <path
        class="wave-bottom-path"
        fill-opacity="1"
        d="M0,160L48,149.3C96,138,192,117,288,117.3C384,117,480,139,576,133.3C672,128,768,96,864,106.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </section>
</template>
<script setup>
import FeatureCard from './FeatureCard.vue'
import FeatureImg1 from '../../assets/feature-card1.jpg'
import FeatureImg2 from '../../assets/feature-card2.jpg'
import FeatureImg3 from '../../assets/feature-card3.png'
import FeatureImg4 from '../../assets/feature-card4.jpg'
import FeatureImg5 from '../../assets/feature-card5.jpg'

const features = [
  {
    title: 'Intelligente Gesichtserkennung',
    imageSrc: FeatureImg1,
    description:
      'Schnelle und zuverlässige Erkennung für eine automatisierte Anwesenheitserfassung.',
  },
  {
    title: 'Individuelle Schülerverwaltung',
    imageSrc: FeatureImg2,
    description:
      'Admin-Interface zum Hinzufügen, Bearbeiten und Verwalten von Schüler- und Klasseninformationen.',
  },
  {
    title: 'Skalierbar und flexibel',
    type: 'contain',
    imageSrc: FeatureImg3,
    description:
      'Anpassbar an jede Schüleranzahl und individuell konfigurierbar für die Anforderungen jeder Schule.',
  },
  {
    title: 'Plattformübergreifende Nutzung',
    imageSrc: FeatureImg4,
    description: 'Zugriff auf die Admin-Konsole von Desktop, Tablet oder Smartphone.',
  },
  {
    title: 'Open Source',
    imageSrc: FeatureImg5,
    description: 'Transparenter und zugänglicher Code, der individuelle Anpassungen ermöglicht.',
  },
]
</script>

<style src="@/css/homepage/Feature.css" scoped></style>
