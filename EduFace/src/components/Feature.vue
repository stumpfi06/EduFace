<template>
    <svg viewBox="0 0 1440 320" class="wave-top">
        <path class="wave-top-path" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,186.7C672,192,768,224,864,213.3C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    <section class="feature">
        <div class="feature-grid">
            <FeatureCard v-for="(feature, index) in features" :key="index"
                :title="feature.title" 
                :imageSrc="feature.imageSrc" 
                :description="feature.description" />
        </div>
    </section>
    <svg class="wave-bottom" viewBox="0 0 1440 320">
      <path class="wave-bottom-path" fill-opacity="1" d="M0,160L48,149.3C96,138,192,117,288,117.3C384,117,480,139,576,133.3C672,128,768,96,864,106.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
</template>

<script setup>
import Lorem from './Lorem.vue'
import FeatureCard from './FeatureCard.vue'
import FeatureImage1 from '../assets/feature-card1.jpg'
import FeatureImage2 from '../assets/feature-card2.jpeg'

const features = [
    {
        title: "Individuelle Anwesenheitsstatistiken",
        imageSrc: FeatureImage2,
        description: "Anzeige der Statistiken für jeden Schüler, übersichtliche Darstellung der Anwesenheitsquote, historische Daten einsehbar, einfache Verwaltung im Admin-Interface"
    },{
        title: "Sichere Gesichtserkennung",
        imageSrc: FeatureImage1,
        description: "Moderne Gesichtserkennungstechnologie, präzise Identifizierung, einfache und schnelle Erfassung, korrekte Zuordnung der Anwesenheit"
    },{
        title: "Sichere Gesichtserkennung",
        imageSrc: FeatureImage1,
        description: "Moderne Gesichtserkennungstechnologie, präzise Identifizierung, einfache und schnelle Erfassung, korrekte Zuordnung der Anwesenheit"
    },{
        title: "Sichere Gesichtserkennung",
        imageSrc: FeatureImage1,
        description: "Moderne Gesichtserkennungstechnologie, präzise Identifizierung, einfache und schnelle Erfassung, korrekte Zuordnung der Anwesenheit"
    },{
        title: "Sichere Gesichtserkennung",
        imageSrc: FeatureImage1,
        description: "Moderne Gesichtserkennungstechnologie, präzise Identifizierung, einfache und schnelle Erfassung, korrekte Zuordnung der Anwesenheit"
    },
];
</script>

<style src="../css/Feature.css" scoped></style>
