<script setup lang="js">
import { shallowRef, ref, onMounted, watch } from 'vue'
import Sidebar from '@/components/Interface/Sidebar.vue'
import Dashboard from '@/components/Interface/Dashboard.vue'
import Lehrer from '@/components/Interface/Lehrer.vue'
import Schueler from '@/components/Interface/Schueler.vue'
import Klassen from '@/components/Interface/Klassen.vue'
import Anwesenheiten from '@/components/Interface/Anwesenheiten.vue'
import Einstellungen from '@/components/Interface/Einstellungen.vue'
import Stundenplan from '@/components/Interface/Stundenplan.vue'
import UserVerwaltung from '@/components/Interface/UserVerwaltung.vue'
import { getUserRole, checkAuthState, createUserIfNotExists } from '@/firebase/users'

const currentComponent = shallowRef(Dashboard)
const userRole = ref('')
const showPopup = ref(false)

const loadComponent = () => {
  const hash = window.location.hash.replace('#', '')
  switch (hash) {
    case 'dashboard':
      currentComponent.value = Dashboard
      break
    case 'lehrer':
      currentComponent.value = Lehrer
      break
    case 'schueler':
      currentComponent.value = Schueler
      break
    case 'klassen':
      currentComponent.value = Klassen
      break
    case 'anwesenheiten':
      currentComponent.value = Anwesenheiten
      break
    case 'einstellungen':
      currentComponent.value = Einstellungen
      break
    case 'stundenplan':
      currentComponent.value = Stundenplan
      break
    case 'userverwaltung':
      currentComponent.value = UserVerwaltung
      break
    default:
      currentComponent.value = Dashboard
  }
}

const handleUserCreated = () => {
  console.log('User created, showing popup')
  showPopup.value = true
}

const closePopup = () => {
  console.log('Closing popup and redirecting to homepage')
  showPopup.value = false
  window.location.href = '/'
}

onMounted(() => {
  checkAuthState(async (user) => {
    if (user) {
      userRole.value = await getUserRole()

      if (userRole.value) {
        loadComponent()
        window.addEventListener('hashchange', loadComponent)
      } else {
        console.log('User role not found, creating user if not exists')
        await createUserIfNotExists(user, handleUserCreated)
        showPopup.value = true
      }
    } else {
      console.log('No user is logged in')
    }
  })
})

watch(() => window.location.hash, loadComponent)
</script>

<template>
  <main v-if="userRole">
    <div class="interface-wrapper">
      <Sidebar :userRole="userRole" />
      <component :is="currentComponent" />
    </div>
  </main>
  <div v-if="showPopup" class="popup">
    <div class="popup-content">
      <p>
        Ein neues Benutzerdokument wurde erstellt. Sobald der Administrator eine Rolle hinzufügt,
        können Sie sich anmelden.
      </p>
      <button @click="closePopup">OK</button>
    </div>
  </div>
</template>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
</style>
