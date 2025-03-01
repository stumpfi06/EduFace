<template>
  <div class="create-teacher">
    <h2>Neuen Lehrer erstellen</h2>
    <form @submit.prevent="createLehrer">
      <div>
        <label for="nachname">Nachname:</label>
        <input type="text" v-model="newLehrer.Name.Nachname" id="nachname" required />
      </div>
      <div>
        <label for="vorname">Vorname:</label>
        <input type="text" v-model="newLehrer.Name.Vorname" id="vorname" required />
      </div>
      <div>
        <label for="kuerzel">Kürzel:</label>
        <input type="text" v-model="newLehrer.Kürzel" id="kuerzel" required />
      </div>
      <div>
        <label for="faecher">Fächer:</label>
        <input
          type="text"
          v-model="newLehrer.Fächer"
          id="faecher"
          placeholder="Comma separated"
          required
        />
      </div>
      <button type="submit">Erstellen</button>
      <button type="button" @click="$emit('close')">Abbrechen</button>
    </form>
  </div>
</template>

<script>
import { createLehrer } from '@/firebase/queries' // Adjust the import according to your project structure

export default {
  data() {
    return {
      newLehrer: {
        Name: {
          Nachname: '',
          Vorname: '',
        },
        Kürzel: '',
        Fächer: [],
      },
    }
  },
  methods: {
    async createLehrer() {
      try {
        this.newLehrer.Fächer = this.newLehrer.Fächer.split(',').map((fach) => fach.trim())
        await createLehrer(this.newLehrer)
        this.$emit('close')
        window.location.reload() // Refresh the page
      } catch (error) {
        console.error('Error creating teacher: ', error)
      }
    },
  },
}
</script>

<style scoped src="@/css/interface/CreateLehrer.css"></style>
