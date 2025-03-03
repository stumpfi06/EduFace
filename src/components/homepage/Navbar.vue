<template>
  <nav class="navbar">
    <img alt="EduFace logo" class="logo" src="@/assets/LogoEF.svg" width="100" height="100" />

    <div class="nav-links">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/Dokumentation">Dokumentation</router-link>
      <router-link to="/Kontakt">Kontakt</router-link>
    </div>
    <router-link to="/interface" v-if="isLoggedin" class="button-link">
      <Button  text="Zur Konsole" width="150px" height="30px" type="primary" />
    </router-link>
    <router-link to="/login" v-else class="button-link">
      <Button text="Zur Konsole" width="150px" height="30px" type="primary" />
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import Button from '../Button.vue'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const isLoggedin = ref(false)

onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedin.value = true
    } else {
      isLoggedin.value = false
    }
  })
})
</script>

<style src="@/css/homepage/Navbar.css"></style>

<style scoped>
.nav-links {
  text-align: justify;
}
</style>
