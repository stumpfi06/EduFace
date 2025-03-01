<template>
  <div class="create-class">
    <h2>Neue Klasse erstellen</h2>
    <form @submit.prevent="createKlasse">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="newKlasse.Name" id="name" required />
      </div>
      <div>
        <label for="klassenvorstand">Klassenvorstand:</label>
        <input type="text" v-model="klassenvorstandKuerzel" id="klassenvorstand" required />
      </div>
      <div>
        <div class="stunden-button-wrapper">
        <label>Stundenanzahl:</label>
        <button type="button" @click="addTimetable2" v-if="!showTimetable2" class="add-version-button">+</button>
        <button type="button" @click="removeTimetable2" v-else class="add-version-button">-</button>
        <button type="button" @click="help" class="help-button">?</button>

      </div>
        <div class="timetable">
          <div v-for="(hours, day) in timetable1" :key="day" class="day">
            <label :for="`timetable1-${day}`">{{ day }}:</label>
            <select v-model="timetable1[day]" :id="`timetable1-${day}`">
              <option v-for="n in 11" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
        </div>
      </div>
      <div v-if="showTimetable2">
        <label>Stundenanzahl pro Tag (Version 2):</label>
        <div class="timetable">
          <div v-for="(hours, day) in timetable2" :key="day" class="day">
            <label :for="`timetable2-${day}`">{{ day }}:</label>
            <select v-model="timetable2[day]" :id="`timetable2-${day}`" placeholder="nur Änderungen zu Woche 1 eintragen">
              <option v-for="n in 11" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
        </div>
      </div>
      <button type="submit">Erstellen</button>
      <button type="button" @click="$emit('close')">Abbrechen</button>
    </form>
  </div>
</template>

<script>
import { createKlasse, getLehrerByKuerzel } from '@/firebase/queries' // Adjust the import according to your project structure

export default {
  data() {
    return {
      newKlasse: {
        Name: '',
        KV: '',
        SchuelerAnzahl: 0,
      },
      klassenvorstandKuerzel: '',
      timetable1: {
        Montag: 1,
        Dienstag: 1,
        Mittwoch: 1,
        Donnerstag: 1,
        Freitag: 1,
      },
      timetable2: {
        Montag: '',
        Dienstag: '',
        Mittwoch: '',
        Donnerstag: '',
        Freitag: '',
      },
      showTimetable2: false,
    }
  },
  methods: {
    addTimetable2() {
      this.showTimetable2 = true
    },
    removeTimetable2() {
      this.showTimetable2 = false
      this.timetable2 = {
        Montag: '',
        Dienstag: '',
        Mittwoch: '',
        Donnerstag: '',
        Freitag: '',
      }
    },
    async createKlasse() {
      try {
        const lehrer = await getLehrerByKuerzel(this.klassenvorstandKuerzel)
        if (lehrer) {
          this.newKlasse.KV = lehrer.lid
          const finalTimetable2 = {}
          for (const day in this.timetable2) {
            finalTimetable2[day] = this.timetable2[day] || this.timetable1[day]
          }
          this.newKlasse.Stunden = [this.timetable1, finalTimetable2]
          await createKlasse(this.newKlasse)
          this.$emit('close')
          window.location.reload() // Refresh the page
        } else {
          console.error('No teacher found with the given Kürzel')
        }
      } catch (error) {
        console.error('Error creating class: ', error)
      }
    },
  },
}
</script>

<style src="@/css/Interface/CreateKlasse.css" scoped></style>
