<template>
  <div class="stundenplan">
    <div class="header">
      <h2>Stundenplan</h2>
      <div class="dropdown">
        <label for="class-select">Klasse:</label>
        <select id="class-select" v-model="selectedClass" @change="onClassChange">
          <option disabled value="">-- Wähle eine Klasse --</option>
          <option v-for="klasse in classes" :key="klasse.KID" :value="klasse.KID">
            {{ klasse.Name ? klasse.Name : klasse.KID }}
          </option>
        </select>
      </div>
    </div>

    <div class="timetable-wrapper">
      <table class="timetable">
        <thead>
          <tr>
            <th class="time-slot"></th>
            <th v-for="(day, index) in sortedWeekdays" :key="index" class="day-header">
              {{ day }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="h in 12" :key="h" :class="{ break: isBreak(h) }">
            <td class="time-slot">
              <div class="time">{{ getTimeForHour(h).start }}</div>
              <div v-if="!isBreak(h)" class="lesson-number">{{ h }}</div>
              <div class="time">{{ getTimeForHour(h).end }}</div>
            </td>
            <template v-if="!isBreak(h)">
              <td v-for="day in sortedWeekdays" :key="day" class="lesson-cell">
                <div v-if="gridCells[day][h]?.lesson" class="lesson">
                  <div class="subject">{{ gridCells[day][h].lesson.fach }}</div>
                  <div class="teacher" v-if="gridCells[day][h].lesson.kuerzel">
                    {{ gridCells[day][h].lesson.kuerzel }}
                  </div>
                </div>
              </td>
            </template>
            <td v-else class="break-cell" colspan="6">Pause</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="!selectedClass">
      <p>Bitte wähle eine Klasse.</p>
    </div>
  </div>
</template>

<script>
import { getTimetableForClass, getKlassen, getLehrerKuerzelByLid } from '@/firebase/queries';

export default {
  name: 'Stundenplan',
  data() {
    return {
      classes: [],
      selectedClass: '',
      timetable: null
    };
  },
  computed: {
    sortedWeekdays() {
      const order = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
      return this.timetable?.wochentage ? order.filter(day => day in this.timetable.wochentage) : [];
    },
    gridCells() {
      const grid = {};
      if (!this.timetable || !this.timetable.wochentage) return grid;

      for (const day of this.sortedWeekdays) {
        const lessons = this.timetable.wochentage[day] || {};
        grid[day] = {};

        for (let h = 1; h <= 12; h++) {
          grid[day][h] = { lesson: null };
        }

        // Set lessons for each hour
        for (const lesson of Object.values(lessons)) {
          const hour = lesson.Stunde;
          if (hour && grid[day][hour]) {
            grid[day][hour] = { lesson };
          }
        }
      }
      return grid;
    }
  },
  methods: {
    async fetchClasses() {
      try {
        console.log('Fetching classes...');
        const { klassen } = await getKlassen();
        this.classes = klassen;
        if (klassen.length > 0 && !this.selectedClass) {
          this.selectedClass = klassen[0].KID;
          this.fetchTimetable();
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    },
    async fetchTimetable() {
      if (!this.selectedClass) return;
      try {
        console.log(`Fetching timetable for class: ${this.selectedClass}`);
        const data = await getTimetableForClass(this.selectedClass);
        if (data?.wochentage) {
          for (const day in data.wochentage) {
            const lessons = data.wochentage[day];
            for (const key in lessons) {
              const lesson = lessons[key];
              const teacherUid = lesson.Lehrer;
              if (teacherUid) {
                console.log(`Fetching teacher short name for teacher UID: ${teacherUid}`);
                const kuerzel = await getLehrerKuerzelByLid(teacherUid);
                lesson.kuerzel = kuerzel;
              }
            }
          }
        }
        this.timetable = data;
      } catch (error) {
        console.error("Error fetching timetable:", error);
      }
    },
    onClassChange() {
      console.log('Class changed:', this.selectedClass);
      this.timetable = null;
      this.fetchTimetable();
    },
    getTimeForHour(hour) {
      const schedule = {
        1: { start: "07:35", end: "08:15" },
        2: { start: "08:15", end: "08:55" },
        3: { start: "09:10", end: "09:50" },
        4: { start: "09:50", end: "10:30" },
        5: { start: "10:35", end: "11:15" },
        6: { start: "11:15", end: "11:55" },
        7: { start: "11:55", end: "12:45" },
        8: { start: "12:45", end: "13:35" },
        9: { start: "13:35", end: "14:25" },
        10: { start: "14:25", end: "15:15" },
        11: { start: "15:15", end: "16:05" }
      };
      return schedule[hour] || { start: "", end: "" };
    },
    isBreak(hour) {
      const result = hour === 3 || hour === 5;
      return result;
    }
  },
  mounted() {
    this.fetchClasses();
  }
};
</script>

<style scoped src="../../css/Interface/Stundenplan.css"></style>