<template>
  <div class="interface-body">
    <h1>Abwesenheiten</h1>
    <input v-model="searchQuery" placeholder="Nach Schüler filtern..." />
    <input type="date" v-model="filterDate" placeholder="Datum filtern..." />
    <ul class="absence-list">
      <li v-for="absence in filteredAbsences" :key="absence.id" class="absence-item">
        <strong>{{ absence.studentName }}</strong> ({{ absence.date }}): 
        <span v-if="absence.absenceIntervals.length">
          {{ absence.absenceIntervals.join(', ') }}
        </span>
        <span v-else>
          keine Abwesenheit
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getAttendances, getAllSchueler, getKlassen } from '@/firebase/queries';
import { getAbsenceIntervals } from '@/util/calculateAbsences';

const attendances = ref([]);
const students = ref([]);
const classes = ref([]);
const searchQuery = ref('');
const filterDate = ref('');

const fetchAttendances = async () => {
  attendances.value = await getAttendances();
  console.log('Fetched attendances:', attendances.value);
};

const fetchStudents = async () => {
  const schueler = await getAllSchueler();
  console.log('Fetched schueler:', schueler);
  students.value = schueler;
  console.log('Fetched students:', students.value);
};

const fetchClasses = async () => {
  const { klassen } = await getKlassen();
  classes.value = klassen;
  console.log('Fetched classes:', classes.value);
};

const filteredAbsences = computed(() => {
  let absences = attendances.value.filter(attendance =>
    !filterDate.value || attendance.date === filterDate.value
  )
  .map(attendance => {
    const student = students.value.find(s => s.sid === attendance.studentId);
    if (!student) return null;
    const classInfo = classes.value.find(klasse => klasse.KID === student.KID);
    const totalLessons = classInfo ? classInfo.lessons : 0;
    const absenceIntervals = totalLessons ? getAbsenceIntervals(attendance, totalLessons) : [];
    return {
      id: attendance.id,
      date: attendance.date,
      studentName: `${student.Name.Vorname} ${student.Name.Nachname}`,
      absenceIntervals
    };
  })
  .filter(record => record !== null);

  if (searchQuery.value) {
    const queryText = searchQuery.value.toLowerCase();
    absences = absences.filter(record =>
      record.studentName.toLowerCase().includes(queryText)
    );
  }
  console.log('Filtered absences:', absences);
  return absences;
});

onMounted(() => {
  fetchAttendances();
  fetchStudents();
  fetchClasses();
});
</script>