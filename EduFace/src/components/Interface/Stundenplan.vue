<template>
  <div class="timetable">
    <h2>Stundenplan</h2>
    <div v-if="loading" class="loading">Lädt...</div>
    <div v-else class="days-container">
      <div v-for="(day, index) in timetable" :key="index" class="day">
        <h3>{{ day.name }}</h3>
        <div v-for="lesson in day.lessons" :key="lesson.Stunde" class="lesson">
          <p>Stunde: {{ lesson.Stunde }}</p>
          <p>Fach: {{ lesson.Fach }}</p>
          <p>Lehrer: {{ lesson.Lehrer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTimetable } from "@/firebase/queries";


export default {
  data() {
    return {
      timetable: [],
      loading: true,
    };
  },
  async created() {
    try {
      const data = await getTimetable("1000");  // Beispiel: Klasse mit der ID 1000
      this.timetable = data;
    } catch (error) {
      console.error("Fehler beim Abrufen des Stundenplans:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>
<style>
@import "@/css/Interface/Stundenplan.css";
</style>