<template>
  <div class="interface-body">
    <h1 class="lehrer-h1">Lehrer</h1>

    <!-- Filter und Suchbereich -->
    <div v-if="!state.isEditing && !state.isCreating" class="filters">
      <!-- Filter Dropdowns -->

      <div class="filter-dropdown">
        <button class="filter-dropdown-button">Fächer</button>
        <div class="dropdown-menu">
          <div class="filter-dropdown-item" v-for="fach in uniqueFächer" :key="fach">
            <input type="checkbox" :id="fach" v-model="state.selectedFächer" :value="fach" />
            <label :for="fach">{{ fach }}</label>
          </div>
        </div>
      </div>

      <!-- Suchfeld -->
      <div class="search-field">
        <input
          type="text"
          v-model="state.searchQuery"
          placeholder="Suche nach Lehrer..."
          @input="searchTeachers"
        />
      </div>
    </div>

    <!-- Lehrer Tabelle -->
    <table class="teacher-table" v-if="!state.isEditing && !state.isCreating">
      <thead>
        <tr>
          <th @click="sortTable('Name.Nachname')">Nachname</th>
          <th @click="sortTable('Name.Vorname')">Vorname</th>
          <th @click="sortTable('Kürzel')">Kürzel</th>
          <th @click="sortTable('Fächer')">Fächer</th>
          <th>Aktionen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="teacher in filteredTeachers" :key="teacher.Lid">
          <td>{{ teacher.Name.Nachname }}</td>
          <td>{{ teacher.Name.Vorname }}</td>
          <td>{{ teacher.Kürzel }}</td>
          <td>{{ teacher.Fächer.join(', ') }}</td>
          <td>
            <button @click="editTeacher(teacher)" class="action-button">
              <i class="fas fa-edit"></i>
            </button>
            <button v-if="isAdmin" @click="handleDeleteTeacher(teacher.Lid)" class="action-button">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="pagination" v-if="!state.isEditing && !state.isCreating">
      <button @click="prevPage" :disabled="state.currentPage === 1">Previous</button>
      <span>Page {{ state.currentPage }}</span>
      <button @click="nextPage" :disabled="!state.hasMore">Next</button>
    </div>

    <!-- Buttons for editing and creating -->
    <button
      v-if="!state.isEditing && !state.isCreating"
      @click="createNewTeacher"
      class="create-button"
    >
      Neuen Lehrer erstellen
    </button>

    <EditLehrer
      v-if="state.isEditing"
      :teacher="state.currentTeacher"
      @close="state.isEditing = false"
    />
    <CreateLehrer v-if="state.isCreating" @close="state.isCreating = false" />
  </div>
</template>

<script>
import { getLehrer, deleteLehrer as deleteLehrerFromDB } from '@/firebase/queries'
import { reactive, onMounted, computed } from 'vue'
import Fuse from 'fuse.js' // Correct import for Fuse.js
import EditLehrer from '@/components/Interface/Edit/EditLehrer.vue'
import CreateLehrer from '@/components/Interface/Create/CreateLehrer.vue'
import { getUserRole } from '@/firebase/users'
export default {
  components: {
    EditLehrer,
    CreateLehrer,
  },
  setup() {
    const state = reactive({
      teachers: [],
      currentPage: 1,
      pageSize: 8,
      isEditing: false,
      isCreating: false,
      currentTeacher: null,
      sortKey: 'Name.Nachname',
      sortOrder: 'asc',
      searchQuery: '',
      selectedFächer: [],
      lastVisible: null,
      firstVisible: null,
      hasMore: true,
      hasPrevious: false,
      previousPages: [],
    })

    const isAdmin = computed(async () => {
      const role = await getUserRole()
      return role === 'admin'
    })

    // Filtered teachers based on search and selected filters
    const filteredTeachers = computed(() => {
      let filtered = state.teachers

      // Unscharfe Suche für Namen mithilfe von Fuse.js
      if (state.searchQuery) {
        const fuse = new Fuse(filtered, {
          keys: ['Name.Nachname', 'Name.Vorname'], // Schlüsselfelder für die Suche
          threshold: 0.3, // Bestimmt, wie "unscharf" die Suche ist
        })

        filtered = fuse.search(state.searchQuery).map((result) => result.item)
      }

      // Filter nach ausgewählten Fächern
      if (state.selectedFächer.length > 0) {
        filtered = filtered.filter((teacher) =>
          teacher.Fächer.some((fach) => state.selectedFächer.includes(fach)),
        )
      }

      return filtered
    })

    // Unique list of subjects for the dropdown
    const uniqueFächer = computed(() => {
      const allFächer = state.teachers.flatMap((teacher) => teacher.Fächer)
      return [...new Set(allFächer)]
    })

    const loadTeachers = async (reset = false, direction = 'next') => {
      if (reset) {
        state.lastVisible = null
        state.firstVisible = null
        state.currentPage = 1
        state.teachers = []
        state.previousPages = []
      }
      const { lehrer, lastDoc, firstDoc } = await getLehrer(
        state.sortKey,
        state.sortOrder,
        state.pageSize,
        direction === 'next'
          ? state.lastVisible
          : state.previousPages[state.previousPages.length - 1],
      )
      if (direction === 'next') {
        state.previousPages.push(state.firstVisible)
        state.teachers = lehrer
        state.lastVisible = lastDoc
        state.firstVisible = firstDoc
        state.hasPrevious = true
      } else {
        state.teachers = lehrer
        state.lastVisible = lastDoc
        state.firstVisible = state.previousPages.pop()
        state.hasPrevious = state.previousPages.length > 0
      }
      state.hasMore = lehrer.length === state.pageSize
    }

    onMounted(async () => {
      await loadTeachers()
    })

    const nextPage = async () => {
      if (state.hasMore) {
        state.currentPage++
        await loadTeachers(false, 'next')
      }
    }

    const prevPage = async () => {
      if (state.currentPage > 1) {
        state.currentPage--
        await loadTeachers(false, 'prev')
      }
    }

    const editTeacher = (teacher) => {
      state.currentTeacher = teacher
      state.isEditing = true
    }

    const createNewTeacher = () => {
      state.isCreating = true
    }

    const handleDeleteTeacher = async (Lid) => {
      try {
        await deleteLehrerFromDB(Lid)
        state.teachers = state.teachers.filter((teacher) => teacher.Lid !== Lid)
      } catch (error) {
        console.error('Error deleting teacher: ', error)
      }
    }

    const sortTable = async (key) => {
      if (state.sortKey === key) {
        state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc'
      } else {
        state.sortKey = key
        state.sortOrder = 'asc'
      }
      await loadTeachers(true)
    }

    return {
      state,
      filteredTeachers,
      uniqueFächer,
      nextPage,
      prevPage,
      editTeacher,
      createNewTeacher,
      handleDeleteTeacher,
      sortTable,
      isAdmin,
    }
  },
}
</script>

<style scoped>
@import '@/css/Interface/Lehrer.css';
</style>
