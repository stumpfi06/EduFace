<template>
    <nav class="navbar">
        <img alt="EduFace logo" class="logo" src="@/assets/logo-lila.svg" width="100" height="100" />
    
        <div class="nav-links">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/Dokumentation">Dokumentation</router-link>
            <router-link to="/Kontakt">Kontakt</router-link>
        </div>
        <Button text="Zur Konsole" width="150px" height="50px" type="primary" />
    </nav>
</template>

<script setup>
import Button from './Button.vue'
</script>

<style src="../css/Navbar.css"></style>

<style scoped>
.nav-links {
  text-align: justify;
}
</style>
