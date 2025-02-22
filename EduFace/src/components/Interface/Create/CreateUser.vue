<template>
  <div class="create-user">
    <h2>Create User</h2>
    <form @submit.prevent="createUser">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="user.email" id="email" required />
      </div>
      <div>
        <label for="role">Role:</label>
        <select v-model="user.role" id="role" required @change="handleRoleChange">
          <option value="admin">Admin</option>
          <option value="lehrer">Lehrer</option>
          <option value="schueler">Schüler</option>
        </select>
      </div>
      <div v-show="user.role === 'schueler'" class="role-dependent-field sid-field">
        <label for="sid">Student ID:</label>
        <input type="text" v-model="user.sid" id="sid" readonly />
        <button type="button" @click="openSchuelerPopup">Schüler auswählen</button>
      </div>
      <div v-show="user.role === 'lehrer'" class="role-dependent-field lid-field">
        <label for="lid">Teacher ID:</label>
        <input type="text" v-model="user.lid" id="lid" readonly />
        <button type="button" @click="openLehrerPopup">Lehrer auswählen</button>
      </div>
      <button type="submit">Create</button>
      <button type="button" @click="$emit('close')">Cancel</button>
    </form>

    <SchuelerAuswählen
      v-if="showSchuelerPopup"
      @select="selectSchueler"
      @close="showSchuelerPopup = false"
    />
    <LehrerAuswählen
      v-if="showLehrerPopup"
      @select="selectLehrer"
      @close="showLehrerPopup = false"
    />
  </div>
</template>

<script>
import { createUser } from '@/firebase/users'
import SchuelerAuswählen from '@/components/Interface/SchuelerAuswählen.vue'
import LehrerAuswählen from '@/components/Interface/LehrerAuswählen.vue'

export default {
  components: {
    SchuelerAuswählen,
    LehrerAuswählen,
  },
  data() {
    return {
      user: {
        email: '',
        role: 'schueler',
        sid: '',
        lid: '',
      },
      showSchuelerPopup: false,
      showLehrerPopup: false,
    }
  },
  methods: {
    handleRoleChange() {
      if (this.user.role !== 'schueler') {
        this.user.sid = ''
      }
      if (this.user.role !== 'lehrer') {
        this.user.lid = ''
      }
    },
    async createUser() {
      try {
        console.log('Creating user with role:', this.user.role)
        console.log('User data:', this.user)
        await createUser(this.user)
        this.$emit('close')
        this.$emit('user-created') // Emit event to reload the page
      } catch (error) {
        console.error('Error creating user:', error)
      }
    },
    openSchuelerPopup() {
      this.showSchuelerPopup = true
    },
    openLehrerPopup() {
      this.showLehrerPopup = true
    },
    selectSchueler(schueler) {
      this.user.sid = schueler.sid
      this.showSchuelerPopup = false
    },
    selectLehrer(lehrer) {
      this.user.lid = lehrer.lid
      this.showLehrerPopup = false
    },
  },
}
</script>

<style src="@/css/Interface/CreateUser.css" scoped></style>
