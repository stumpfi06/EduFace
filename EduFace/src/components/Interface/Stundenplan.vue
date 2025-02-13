<template>
  <div class="stundenplan">
    <h2>Stundenplan</h2>
    <div class="dropdown">
      <label for="class-select">Select Class: </label>
      <select id="class-select" v-model="selectedClass" @change="onClassChange">
        <option disabled value="">-- Select a class --</option>
        <option v-for="klasse in classes" :key="klasse.KID" :value="klasse.KID">
          {{ klasse.Name ? klasse.Name : klasse.KID }}
        </option>
      </select>
    </div>
    
    <div v-if="timetable && timetable.wochentage">
      <table>
        <thead>
          <tr>
            <th>Stunde</th>
            <th v-for="(day, index) in sortedWeekdays" :key="index">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in lessonRows" :key="row">
            <td>{{ row }}</td>
            <td v-for="day in sortedWeekdays" :key="day">
              <div v-if="timetable.wochentage[day] && timetable.wochentage[day][row - 1]">
                <strong>{{ timetable.wochentage[day][row - 1].fach }}</strong>
                <div>
                  {{ formatTime(timetable.wochentage[day][row - 1].start) }} - {{ formatTime(timetable.wochentage[day][row - 1].ende) }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p v-if="selectedClass">Loading timetable...</p>
      <p v-else>Please select a class.</p>
    </div>
  </div>
</template>

<script>
import { getTimetableForClass, getKlassen } from '@/firebase/queries';

export default {
  name: 'Stundenplan',
  data() {
    return {
      classes: [],       // List of all classes for the dropdown
      selectedClass: '', // Currently selected class ID (KID)
      timetable: null    // Timetable data for the selected class
    };
  },
  computed: {
    // Define a fixed weekday order similar to Webuntis
    sortedWeekdays() {
      const order = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
      if (this.timetable && this.timetable.wochentage) {
        // Return only weekdays available in the timetable in the defined order
        return order.filter(day => day in this.timetable.wochentage);
      }
      return [];
    },
    // Determine the maximum number of lessons (rows) across all weekdays
    lessonRows() {
      if (!this.timetable || !this.timetable.wochentage) {
        return [];
      }
      let maxLessons = 0;
      for (const day in this.timetable.wochentage) {
        const lessons = this.timetable.wochentage[day];
        const count = Object.keys(lessons).length;
        if (count > maxLessons) {
          maxLessons = count;
        }
      }
      return Array.from({ length: maxLessons }, (_, i) => i + 1);
    }
  },
  methods: {
    // Fetch all classes to populate the dropdown list
    async fetchClasses() {
      try {
        const { klassen } = await getKlassen();
        this.classes = klassen;
        if (klassen.length > 0 && !this.selectedClass) {
          // Optionally, select the first class by default
          this.selectedClass = klassen[0].KID;
          this.fetchTimetable();
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    },
    // Fetch the timetable for the currently selected class
    async fetchTimetable() {
      if (!this.selectedClass) return;
      try {
        const data = await getTimetableForClass(this.selectedClass);
        this.timetable = data;
      } catch (error) {
        console.error("Error fetching timetable:", error);
      }
    },
    // Called when the user changes the dropdown selection
    onClassChange() {
      this.fetchTimetable();
    },
    // Format minutes (e.g. 480) into a "hh:mm" string (e.g. "08:00")
    formatTime(minutes) {
      const hrs = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    }
  },
  mounted() {
    this.fetchClasses();
  }
};
</script>

<style scoped>
.stundenplan {
  padding: 1rem;
}

.dropdown {
  margin-bottom: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
}

th {
  background-color: #f5f5f5;
}
</style>
