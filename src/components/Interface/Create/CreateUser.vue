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
        <label for="sid">Schüler:</label>
        <input type="text" v-model="user.name" id="sid" readonly />
        <button type="button" @click="openSchuelerPopup">Schüler auswählen</button>
      </div>
      <div v-show="user.role === 'lehrer'" class="role-dependent-field lid-field">
        <label for="lid">Lehrer:</label>
        <input type="text" v-model="user.name" id="lid" readonly />
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
import { getSchuelerBySid, getLehrerByLid } from '@/firebase/queries'
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
        name: '',
      },
      showSchuelerPopup: false,
      showLehrerPopup: false,
    }
  },
  methods: {
    handleRoleChange() {
      if (this.user.role !== 'schueler') {
        this.user.sid = ''
        this.user.name = ''
      }
      if (this.user.role !== 'lehrer') {
        this.user.lid = ''
        this.user.name = ''
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
    async selectSchueler(schueler) {
      this.user.sid = schueler.sid
      const schuelerData = await getSchuelerBySid(schueler.sid)
console.log(schuelerData);
      this.user.name = schuelerData.Schueler.Name.Vorname + ' ' + schuelerData.Schueler.Name.Nachname
      this.showSchuelerPopup = false
    },
    async selectLehrer(lehrer) {
      this.user.lid = lehrer.lid
      const lehrerData = await getLehrerByLid(lehrer.lid)
      this.user.name = lehrerData.Name.Nachname + ', ' + lehrerData.Name.Vorname
      this.showLehrerPopup = false
    },
  },
}
</script>

<style src="@/css/Interface/CreateUser.css" scoped></style>
