<template>
  <div class="popup">
    <h2>Schüler auswählen</h2>
    <table class="student-table">
      <thead>
        <tr>
          <th @click="sortTable('Name.Nachname')">Nachname</th>
          <th @click="sortTable('Name.Vorname')">Vorname</th>
          <th @click="sortTable('KID')">Klasse</th>
          <th @click="sortTable('Katalognummer')">Katalognummer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in state.students" :key="student.sid" @click="selectSchueler(student)">
          <td>{{ student.Name.Nachname }}</td>
          <td>{{ student.Name.Vorname }}</td>
          <td>{{ getKlasseName(student.KID) }}</td>
          <td>{{ student.Katalognummer }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="state.currentPage === 1">Previous</button>
      <span>Page {{ state.currentPage }}</span>
      <button @click="nextPage" :disabled="!state.hasMore">Next</button>
    </div>
    <button @click="$emit('close')" class="close-button">Close</button>
  </div>
</template>

<script>
import { getSchueler, getKlasseFromKID } from '@/firebase/queries' // Adjust the import according to your project structure
import { reactive, onMounted, computed } from 'vue'

export default {
  setup(props, { emit }) {
    const state = reactive({
      students: [],
      klasse: {},
      currentPage: 1,
      pageSize: 6,
      currentStudent: null,
      sortKey: 'Name.Nachname',
      sortOrder: 'asc',
      lastVisible: null,
      firstVisible: null,
      hasMore: true,
      hasPrevious: false,
      previousPages: [],
      currentUserRole: 'user', // Replace with your actual logic to get the current user role
    })

    const isAdmin = computed(() => {
      // Replace with your actual logic to check if the current user is an admin
      return state.currentUserRole === 'admin'
    })

    const loadStudents = async (reset = false, direction = 'next') => {
      if (reset) {
        state.lastVisible = null
        state.firstVisible = null
        state.currentPage = 1
        state.students = []
        state.previousPages = []
      }
      const { schueler, lastDoc, firstDoc } = await getSchueler(
        state.sortKey,
        state.sortOrder,
        state.pageSize,
        direction === 'next' ? state.lastVisible : state.firstVisible,
        direction,
      )
      if (direction === 'next') {
        state.previousPages.push(state.firstVisible)
        state.students = schueler
        state.lastVisible = lastDoc
        state.firstVisible = firstDoc
        state.hasPrevious = state.previousPages.length > 1
      } else {
        state.students = schueler
        state.lastVisible = lastDoc
        state.firstVisible = state.previousPages.pop()
        state.hasPrevious = state.previousPages.length > 0
      }
      state.hasMore = schueler.length === state.pageSize
      for (let student of state.students) {
        const klasseData = await getKlasseFromKID(student.KID)
        state.klasse[student.KID] = klasseData
      }
    }

    onMounted(async () => {
      await loadStudents()
    })

    const getKlasseName = (KID) => {
      return state.klasse[KID] ? state.klasse[KID].Name : 'Unknown' // Adjust the property name as needed
    }

    const nextPage = async () => {
      if (state.hasMore) {
        state.currentPage++
        await loadStudents(false, 'next')
      }
    }
    const selectSchueler = (schueler) => {
      console.log('Selected student:', schueler) // Debug log
      emit('select', schueler)
    }
    const prevPage = async () => {
      if (state.currentPage > 1) {
        state.currentPage--
        await loadStudents(false, 'prev')
      }
    }

    const sortTable = async (key) => {
      if (state.sortKey === key) {
        state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc'
      } else {
        state.sortKey = key
        state.sortOrder = 'asc'
      }
      await loadStudents(true)
    }

    return {
      state,
      getKlasseName,
      nextPage,
      prevPage,
      sortTable,
      selectSchueler,
    }
  },
}
</script>

<style scoped>
@import '@/css/Interface/Auswaehlen.css';
</style>
