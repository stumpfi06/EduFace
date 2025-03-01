<template>
  <div class="create-student">
    <h2>Neuen Schüler erstellen</h2>
    <form @submit.prevent="createStudent">
      <div>
        <label for="vorname">Vorname:</label>
        <input type="text" v-model="newStudent.Name.Vorname" id="vorname" required />
      </div>
      <div>
        <label for="nachname">Nachname:</label>
        <input type="text" v-model="newStudent.Name.Nachname" id="nachname" required />
      </div>
      <div>
        <label for="klasse">Klasse:</label>
        <input type="text" v-model="className" id="klasse" required />
      </div>
      <div>
        <label for="katalognummer">Katalognummer:</label>
        <input
          type="number"
          v-model.number="newStudent.Katalognummer"
          id="katalognummer"
          required
        />
      </div>
      <div>
        <button type="button" @click="handleAddFace">Gesicht Hinzufügen</button>
      </div>
      <div>
        <button type="submit">Erstellen</button>
        <button type="button" @click="$emit('close')">Abbrechen</button>
      </div>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { createStudent, getKIDFromClassName } from '@/firebase/queries' // Adjust the import according to your project structure
import { addFace } from '@/util/apiRequests.ts'

export default {
  data() {
    return {
      newStudent: {
        Name: {
          Vorname: '',
          Nachname: '',
        },
        KID: null,
        Katalognummer: null,
        sid: null, // This will be updated after adding the face UID
      },
      className: '',
      message: '', // To show messages to the user
    }
  },
  methods: {
    // Fetch the KID and create the student in Firebase
    async createStudent() {
      console.log('Starting createStudent process...')
      console.log('Current student data:', this.newStudent)
      console.log('Class name:', this.className)

      try {
        const KID = await getKIDFromClassName(this.className)
        console.log('Fetched KID for class:', KID)

        if (KID) {
          this.newStudent.KID = Number(KID) // Ensure KID is a number
          console.log('Updated student data with KID:', this.newStudent)

          await createStudent(this.newStudent)
          this.$emit('close')
          //window.location.reload(); // Refresh the page
        } else {
          console.error('Class not found')
          this.message = 'Klasse nicht gefunden.'
        }
      } catch (error) {
        console.error('Error creating student:', error)
        this.message = 'Fehler beim Erstellen des Schülers.'
      }
    },
    async handleAddFace() {
      var temp = await addFace()
      console.log(temp)
      this.newStudent.sid = temp
      console.log(this.newStudent)
    },
  },
}
</script>

<style scoped src="@/css/Interface/CreateSchueler.css"></style>
