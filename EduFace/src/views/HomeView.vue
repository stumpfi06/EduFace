<script setup lang="js">
import Navbar from '../components/Navbar.vue'
import Feature from '../components/Feature.vue'
import Hero from '../components/Hero.vue'
import CTA from '../components/CTA.vue'
import FAQ from '../components/FAQ.vue'
import Footer from '../components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="home-main">
    <Navbar />
    <Hero />
    <Feature/>
    <CTA/>
    <FAQ/>
    <Footer/>
    <RouterView />
  </main>
</template>

<style src="../css/HomeView.css"></style>
