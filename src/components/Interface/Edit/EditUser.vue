<template>
  <div class="edit-user">
    <h2>Edit User</h2>
    <form @submit.prevent="updateUser">
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
      <div v-show="user.role === 'schueler'" class="sid-field">
        <label for="sid">Schüler:</label>
        <input type="text" v-model="user.name" id="sid" readonly />
        <button type="button" @click="openSchuelerPopup">Schüler auswählen</button>
      </div>
      <div v-show="user.role === 'lehrer'" class="lid-field">
        <label for="lid">Lehrer:</label>
        <input type="text" v-model="user.name" id="lid" readonly />
        <button type="button" @click="openLehrerPopup">Lehrer auswählen</button>
      </div>
      <button type="submit">Save</button>
      <button type="button" @click="$emit('close')">Cancel</button>
      <button type="button" @click="deleteUser" class="delete-button">Delete</button>
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
import { updateUser, deleteUser as deleteUserFromDB } from '@/firebase/users'
import { getSchuelerBySid, getLehrerByLid } from '@/firebase/queries'
import SchuelerAuswählen from '@/components/Interface/SchuelerAuswählen.vue'
import LehrerAuswählen from '@/components/Interface/LehrerAuswählen.vue'

export default {
  components: { 
    SchuelerAuswählen,
    LehrerAuswählen,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showSchuelerPopup: false,
      showLehrerPopup: false,
    }
  },
  async mounted() {
    if (this.user.role === 'schueler' && this.user.sid) {
      const schuelerData = await getSchuelerBySid(this.user.sid)
      this.user.name = schuelerData.Schueler.Name.Vorname + ' ' + schuelerData.Schueler.Name.Nachname
    } else if (this.user.role === 'lehrer' && this.user.lid) {
      const lehrerData = await getLehrerByLid(this.user.lid)
      this.user.name = lehrerData.Name.Nachname + ', ' + lehrerData.Name.Vorname
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
    async updateUser() {
      try {
        console.log('Updating user role:', this.user.role)
        await updateUser(this.user.uid, this.user)
        this.$emit('close')
        this.$emit('user-edited') // Emit event to reload the page
      } catch (error) {
        console.error('Error updating user:', error)
      }
    },
    async deleteUser() {
      try {
        await deleteUserFromDB(this.user.uid)
        this.$emit('close')
      } catch (error) {
        console.error('Error deleting user:', error)
      }
    },
    openSchuelerPopup() {
      console.log('Opening SchuelerAuswählen popup') // Debug log
      this.showSchuelerPopup = true
    },
    openLehrerPopup() {
      console.log('Opening LehrerAuswählen popup') // Debug log
      this.showLehrerPopup = true
    },
    async selectSchueler(schueler) {
      console.log('Selected student:', schueler) // Debug log
      this.user.sid = schueler.sid
      const schuelerData = await getSchuelerBySid(schueler.sid)
      this.user.name = schuelerData.Schueler.Name.Vorname + ' ' + schuelerData.Schueler.Name.Nachname
      this.showSchuelerPopup = false
    },
    async selectLehrer(lehrer) {
      console.log('Selected teacher:', lehrer) // Debug log
      this.user.lid = lehrer.lid
      const lehrerData = await getLehrerByLid(lehrer.lid)
      this.user.name = lehrerData.Name.Nachname + ', ' + lehrerData.Name.Vorname
      this.showLehrerPopup = false
    },
  },
}
</script>

<style src="@/css/Interface/EditUser.css" scoped></style>
