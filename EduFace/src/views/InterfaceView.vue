<script setup lang="js">
import { ref, onMounted, watch } from 'vue';
import Sidebar from '@/components/Interface/Sidebar.vue';
import Dashboard from '@/components/Interface/Dashboard.vue';
import Lehrer from '@/components/Interface/Lehrer.vue';
import Schueler from '@/components/Interface/Schueler.vue';
import Klassen from '@/components/Interface/Klassen.vue';
import Anwesenheiten from '@/components/Interface/Anwesenheiten.vue';
import Einstellungen from '@/components/Interface/Einstellungen.vue';
import Stundenplan from '@/components/Interface/Stundenplan.vue';
import UserVerwaltung from '@/components/Interface/UserVerwaltung.vue';
import { getUserRole } from '@/firebase/users';

const currentComponent = ref(Dashboard);
const userRole = ref('');

const loadComponent = () => {
  const hash = window.location.hash.replace('#', '');
  switch (hash) {
    case 'lehrer':
      currentComponent.value = Lehrer;
      break;
    case 'schueler':
      currentComponent.value = Schueler;
      break;
    case 'klassen':
      currentComponent.value = Klassen;
      break;
    case 'anwesenheiten':
      currentComponent.value = Anwesenheiten;
      break;
    case 'einstellungen':
      currentComponent.value = Einstellungen;
      break;
    case 'stundenplan':
      currentComponent.value = Stundenplan;
      break;
    case 'userverwaltung':
      currentComponent.value = UserVerwaltung;
      break;
    default:
      currentComponent.value = Dashboard;
  }
};

onMounted(async () => {
  userRole.value = await getUserRole();
  loadComponent();
  window.addEventListener('hashchange', loadComponent);
});

watch(() => window.location.hash, loadComponent);
</script>

<template>
  <main v-if="userRole">
    <div class="interface-wrapper">
      <Sidebar :userRole="userRole" />
      <component :is="currentComponent" />
    </div>
  </main>
</template>


