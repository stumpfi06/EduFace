<template>
  <div class="popup">
    <h2>Lehrer auswählen</h2>
    <table class="teacher-table">
      <thead>
        <tr>
          <th @click="sortTable('Name.Nachname')">Nachname</th>
          <th @click="sortTable('Name.Vorname')">Vorname</th>
          <th @click="sortTable('Kürzel')">Kürzel</th>
          <th @click="sortTable('Fächer')">Fächer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lehrer in state.lehrerList" :key="lehrer.Lid" @click="selectLehrer(lehrer)">
          <td>{{ lehrer.Name.Nachname }}</td>
          <td>{{ lehrer.Name.Vorname }}</td>
          <td>{{ lehrer.Kürzel }}</td>
          <td>{{ lehrer.Fächer.join(', ') }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="!state.hasPrevious">Previous</button>
      <button @click="nextPage" :disabled="!state.hasMore">Next</button>
    </div>
    <button @click="$emit('close')" class="close-button">Close</button>
  </div>
</template>

<script>
import { getLehrer } from '@/firebase/queries'
import { reactive, onMounted } from 'vue'

export default {
  setup(props, { emit }) {
    const state = reactive({
      lehrerList: [],
      lastVisible: null,
      firstVisible: null,
      hasMore: true,
      hasPrevious: false,
      previousPages: [],
    })

    const loadLehrer = async (reset = false, direction = 'next') => {
      if (reset) {
        state.lastVisible = null
        state.firstVisible = null
        state.lehrerList = []
        state.previousPages = []
      }
      const { lehrer, lastDoc, firstDoc } = await getLehrer(
        'Name.Nachname',
        'asc',
        9,
        direction === 'next' ? state.lastVisible : state.firstVisible,
        direction,
      )
      if (direction === 'next') {
        state.previousPages.push(state.firstVisible)
        state.lehrerList = lehrer
        state.lastVisible = lastDoc
        state.firstVisible = firstDoc
        state.hasPrevious = state.previousPages.length > 1
      } else {
        state.lehrerList = lehrer
        state.lastVisible = lastDoc
        state.firstVisible = state.previousPages.pop()
        state.hasPrevious = state.previousPages.length > 0
      }
      state.hasMore = lehrer.length === 9
    }

    onMounted(async () => {
      await loadLehrer()
    })

    const nextPage = async () => {
      if (state.hasMore) {
        await loadLehrer(false, 'next')
      }
    }

    const prevPage = async () => {
      if (state.hasPrevious) {
        await loadLehrer(false, 'prev')
      }
    }

    const selectLehrer = (lehrer) => {
      console.log('Selected teacher:', lehrer)
      emit('select', lehrer)
    }

    const sortTable = async (key) => {
      // Implement sorting logic if needed
    }

    return {
      state,
      nextPage,
      prevPage,
      sortTable,
      selectLehrer,
      
    }
  },
}
</script>

<style scoped>
@import '@/css/Interface/Auswaehlen.css';
</style>
