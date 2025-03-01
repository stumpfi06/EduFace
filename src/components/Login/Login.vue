<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Einloggen</h2>
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
          <button @click="login">Einloggen</button>
          <button @click="goToRegister">Registrieren</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { login } from '@/firebase/firebase'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const handleLogin = async () => {
      await login(email.value, password.value, router)
    }

    const goToRegister = () => {
      router.push('/register')
    }

    return {
      email,
      password,
      login: handleLogin,
      goToRegister,
    }
  },
}
</script>

<style src="@/css/Login/Login.css"></style>
