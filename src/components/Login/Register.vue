<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Registrieren</h2>
        <div class="input-group">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model="email" placeholder="Geben Sie Ihre E-Mail ein" />
        </div>
        <div class="input-group">
          <label for="password">Passwort</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Geben Sie Ihr Passwort ein"
          />
        </div>
        <div class="button-wrapper">
          <button @click="register">Registrieren</button>
          <button @click="goToLogin">Einloggen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { register } from '@/firebase/firebase'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const handleRegister = async () => {
      await register(email.value, password.value, router)
    }

    const goToLogin = () => {
      router.push('/login')
    }

    return {
      email,
      password,
      register: handleRegister,
      goToLogin,
    }
  },
}
</script>

<style src="@/css/Login/Register.css"></style>
