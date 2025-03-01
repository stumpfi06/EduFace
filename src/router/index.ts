import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InterfaceView from '../views/InterfaceView.vue'
import LoginView from '../views/LoginView.vue'
import DokumentationView from '@/views/DokumentationView.vue'
import RegisterView from '@/views/RegisterView.vue'
import KontaktView from '@/views/KontaktView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/interface',
      name: 'EduFace-Interface',
      component: InterfaceView,
    },
    {
      path: '/login',
      name: 'EduFace-Login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'EduFace-Register',
      component: RegisterView,
    },
    {
      path: '/Dokumentation',
      name: 'EduFace-Dokumenation',
      component: DokumentationView,
    },
    {
      path: '/Kontakt',
      name: 'Eduface-Kontakt',
      component: KontaktView,
    },
  ],
})

export default router
