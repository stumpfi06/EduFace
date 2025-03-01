<template>
  <div class="timetable-container">
    <h2>Stundenplan</h2>

    <!-- Ladeanimation, wenn der Stundenplan geladen wird -->
    <div v-if="isLoading" class="loader"></div>

    <!-- Stundenplan wird angezeigt, wenn geladen -->
    <table v-if="!isLoading" class="timetable">
      <thead>
        <tr>
          <th>Stunde</th>
          <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in timetable" :key="index">
          <td class="time-slot">
            <div class="time">
              <span class="start-time">{{ row[daysOfWeek[0]]?.startTime || '?' }}</span>
              <span class="end-time">{{ row[daysOfWeek[0]]?.endTime || '?' }}</span>
            </div>
          </td>
          <td v-for="day in daysOfWeek" :key="day" class="lesson">
            <div v-if="row[day]" :rowspan="row[day].duration" class="lesson-content">
              <span class="subject">{{ row[day].Fach }}</span>
              <span class="teacher">{{ row[day].Lehrer }}</span>
            </div>
            <div v-else class="empty-lesson">—</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getTimetable, getLehrerKuerzelByLid } from '@/firebase/queries'

export default {
  data() {
    return {
      tempTimetable: [],
      timetable: [],
      isLoading: true, // Initialisiere isLoading auf true
      daysOfWeek: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'],
    }
  },
  async created() {
    // Stundenplan holen
    this.tempTimetable = await getTimetable('1000') // Beispiel-Klasse 1000

    // Lehrer-Kürzel holen
    for (let i = 0; i < this.tempTimetable.length; i++) {
      let row = this.tempTimetable[i]

      for (let day of this.daysOfWeek) {
        if (row[day] && row[day].Lehrer) {
          row[day].Lehrer = await getLehrerKuerzelByLid(row[day].Lehrer)
        }
      }
    }

    // Stunden kombinieren
    this.timetable = this.combineLessons(this.tempTimetable)

    // Ladeanzeige ausblenden, wenn der Stundenplan fertig ist
    this.isLoading = false
  },

  methods: {
    combineLessons(timetable) {
      let newTimetable = []

      // Durch alle Wochentage iterieren
      for (let day of this.daysOfWeek) {
        let mergedDay = []
        let prevLesson = null
        let blockStart = 0

        // Durch jede Stunde des Tages iterieren
        for (let i = 0; i < timetable.length; i++) {
          let currentLesson = timetable[i][day]

          if (
            prevLesson &&
            currentLesson &&
            prevLesson.Fach === currentLesson.Fach &&
            prevLesson.Lehrer === currentLesson.Lehrer
          ) {
            // Gleiche Stunde -> Dauer erhöhen
            mergedDay[blockStart].duration++
          } else {
            // Neue Stunde -> Neuen Block erstellen
            mergedDay.push({
              ...currentLesson,
              duration: 1, // Start mit 1 Stunde
            })
            blockStart = mergedDay.length - 1 // Speichern, wo der Block beginnt
          }

          prevLesson = currentLesson
        }

        newTimetable.push(mergedDay)
      }

      return newTimetable
    },
  },
}
</script>

<style scoped>
@import '@/css/Interface/Stundenplan.css';

/* Ladeanimation */
.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

/* Animation für die Ladeanimation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
