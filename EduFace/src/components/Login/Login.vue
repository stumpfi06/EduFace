<template>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Login</h2>
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Enter your email" />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" placeholder="Enter your password" />
          </div>
          <div class="button-wrapper">
            <button @click="login">Login</button>
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

        return {
          email,
          password,
          login: handleLogin
        }
      }
    }
</script>

<style src="@/css/Login/Login.css"></style>












