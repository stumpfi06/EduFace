<script setup lang="js">
import Navbar from '../components/homepage/Navbar.vue'
import Feature from '../components/homepage/Feature.vue'
import Hero from '../components/homepage/Hero.vue'
import CTA from '../components/homepage/CTA.vue'
import FAQ from '../components/homepage/FAQ.vue'
import Footer from '../components/homepage/Footer.vue'
import { RouterView } from 'vue-router'
import Kontakt from '../components/homepage/Kontakt.vue'
</script>

<template>
  <main>
    <Navbar />
    <Hero />
    <Feature />
    <CTA />
    <FAQ />
    <Kontakt />
    <Footer />
    <RouterView />
  </main>
</template>
