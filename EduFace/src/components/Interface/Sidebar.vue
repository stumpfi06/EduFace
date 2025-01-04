<template>
    <div v-if="userRole" :class="['sidebar', { collapsed: isCollapsed }]">
        <div class="logo-wrapper">
            <img src="@/assets/logo-lila.svg" alt="Logo" class="logo-interface">
            <h2 class="primary-color"> EduFace</h2>
        </div>
        <a href="#Dashboard" :class="{ active: currentHash === 'Dashboard' }">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
        </a>
        <a href="#stundenplan" :class="{ active: currentHash === 'stundenplan' }">
            <i class="fas fa-calendar-alt"></i>
            <span>Stundenplan</span>
        </a>
        <a v-if="userRole === 'admin' || userRole === 'lehrer'" href="#lehrer" :class="{ active: currentHash === 'lehrer' }">
            <i class="fas fa-chalkboard-teacher"></i>
            <span>Lehrer</span>
        </a>
        <a v-if="userRole === 'admin' || userRole === 'lehrer'" href="#schueler" :class="{ active: currentHash === 'schueler' }">
            <i class="fas fa-user-graduate"></i>
            <span>Schüler</span>
        </a>
        <a v-if="userRole === 'admin' || userRole === 'lehrer'" href="#klassen" :class="{ active: currentHash === 'klassen' }">
            <i class="fas fa-users"></i>
            <span>Klassen</span>
        </a>
        <a v-if="userRole === 'admin'" href="#userverwaltung" :class="{ active: currentHash === 'userverwaltung' }">
            <i class="fas fa-users-cog"></i>
            <span>User</span>
        </a>
        <a href="#anwesenheiten" :class="{ active: currentHash === 'anwesenheiten' }">
            <i class="fas fa-calendar-check"></i>
            <span>Anwesenheiten</span>
        </a>
        <a href="#einstellungen" :class="{ active: currentHash === 'einstellungen' }">
            <i class="fas fa-cog"></i>
            <span>Einstellungen</span>
        </a>
        <div @click="showLogoutPopup = true" :class="['sign-out', { collapsed: isCollapsed }]">
            <i class="fas fa-sign-out-alt"></i>
            <span>Ausloggen</span>
        </div>
        <div @click="toggleSidebar" class="toggle-btn">
            <img :src="isCollapsed ? closeIcon : openIcon" alt="Toggle Sidebar" width="20" height="20">
            <span>Einklappen</span>
        </div>
        <div v-if="showLogoutPopup" class="overlay">
            <div class="popup">
                <p>Möchten Sie sich wirklich ausloggen?</p>
                <button @click="signOut" class="logout-btn">Ausloggen</button>
                <button @click="showLogoutPopup = false" class="cancel-btn">Abbrechen</button>
            </div>
        </div>
    </div>
</template>

<script>
import { logout } from '@/firebase/firebase';

export default {
    props: {
        userRole: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isCollapsed: false,
            openIcon: '',
            closeIcon: '',
            currentHash: '',
            showLogoutPopup: false
        };
    },
    async created() {
        import('@/assets/sidebar-close.png').then(module => {
            this.openIcon = module.default;
        });
        import('@/assets/sidebar-open.png').then(module => {
            this.closeIcon = module.default;
        });
    },
    mounted() {
        this.updateCurrentHash();
        window.addEventListener('hashchange', this.updateCurrentHash);
    },
    beforeUnmount() {
        window.removeEventListener('hashchange', this.updateCurrentHash);
    },
    methods: {
        toggleSidebar() {
            this.isCollapsed = !this.isCollapsed;
        },
        async signOut() {
            try {
                await logout(this.$router);
                this.showLogoutPopup = false;
            } catch (error) {
                console.error('Logout failed:', error);
            }
        },
        updateCurrentHash() {
            this.currentHash = window.location.hash.replace('#', '');
        }
    }
};
</script>

<style src="@/css/Interface/Sidebar.css" scoped>
</style>