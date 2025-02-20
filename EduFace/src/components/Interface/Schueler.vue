<template>
  <div class="interface-body">
    <h1 class="schueler-h1">Schüler</h1>
    

    <div v-if="!state.isEditing && !state.isCreating" class="filters">
          <!-- Filter Dropdown -->
          <div class="filter-dropdown">
            <button @click="toggleDropdown" class="filter-dropdown-button">
              Nach Klassen filtern
            </button>
            <div v-if="state.dropdownOpen" class="dropdown-menu">
              <div v-for="klasse in state.allClasses" :key="klasse.KID" class="filter-dropdown-item">
                <input 
                  type="checkbox" 
                  :id="'klasse-' + klasse.KID" 
                  :value="klasse.KID" 
                  v-model="state.selectedClasses"
                />
                <label :for="'klasse-' + klasse.KID">{{ klasse.Name }}</label>
              </div>
            </div>
          </div>
    
          <!-- Suchfeld -->
          <div class="search-field">
            <label class="search-label" for="searchQuery">Schüler suchen:</label>
            <input
              id="searchQuery"
              type="text"
              v-model="state.searchQuery"
              placeholder="Vor- oder Nachname"
            />
          </div>
        </div>
    <!-- Tabelle mit Schülerdaten -->
    <table class="student-table" v-if="!state.isEditing && !state.isCreating">
      <thead>
        <tr>
          <th @click="sortTable('Name.Nachname')">Nachname</th>
          <th @click="sortTable('Name.Vorname')">Vorname</th>
          <th @click="sortTable('KID')">Klasse</th>
          <th @click="sortTable('Katalognummer')">Katalognummer</th>
          <th>Aktionen</th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in displayedStudents" :key="student.sid">
          <td>{{ student.Name.Nachname }}</td>
          <td>{{ student.Name.Vorname }}</td>
          <td>{{ getKlasseName(student.KID) }}</td>
          <td>{{ student.Katalognummer }}</td>
          <td>
            <button @click="editStudent(student)" class="action-button">
              <i class="fas fa-edit"></i>
            </button>
            <button v-if="isAdmin" @click="handleDeleteStudent(student.sid)" class="action-button">
              <i class="fas fa-trash"></i>
            </button>
            <button @click="handleAddFace()" class="action-button">
              <i class="fas fa-camera"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Paginierung (sowohl im normalen als auch im Such-/Filtermodus) -->
    <div class="pagination" v-if="!state.isEditing && !state.isCreating">
      <button 
        @click="prevPage" 
        :disabled="state.searchMode ? state.searchPage === 1 : state.currentPage === 1">
        Previous
      </button>
      <span v-if="state.searchMode">
        Page {{ state.searchPage }} of {{ totalSearchPages }}
      </span>
      <span v-else>
        Page {{ state.currentPage }}
      </span>
      <button 
        @click="nextPage" 
        :disabled="state.searchMode ? state.searchPage >= totalSearchPages : !state.hasMore">
        Next
      </button>
    </div>
    
    <button v-if="!state.isEditing && !state.isCreating" @click="createNewStudent" class="create-button">Neuen Schüler erstellen</button>

    <!-- Komponenten zum Bearbeiten und Erstellen -->
    <EditSchueler v-if="state.isEditing" :student="state.currentStudent" @close="state.isEditing = false" />
    <CreateSchueler v-if="state.isCreating" @close="state.isCreating = false" />
  </div>
</template>

<script>
import { reactive, onMounted, computed, watch } from 'vue';
import Fuse from 'fuse.js';
import { 
  getSchueler, 
  getKlasseFromKID, 
  getKlassen, 
  deleteStudent as deleteStudentFromDB 
} from '@/firebase/queries';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import EditSchueler from '@/components/Interface/Edit/EditSchueler.vue';
import CreateSchueler from '@/components/Interface/Create/CreateSchueler.vue';
import { getUserRole } from '@/firebase/users.js'
import { addFace } from '@/util/apiRequests.ts';
export default {
  components: {
    EditSchueler,
    CreateSchueler
  },
  setup() {
    const state = reactive({
      // Normalmodus – paginierte Abfrage aus Firestore
      students: [],
      currentPage: 1,
      pageSize: 8,
      lastVisible: null,
      firstVisible: null,
      hasMore: true,
      hasPrevious: false,
      previousPages: [],
      // Suchmodus – alle Ergebnisse werden in searchResults gehalten und clientseitig paginiert
      searchResults: [],
      searchMode: false,
      searchPage: 1,
      // Filter & Dropdown
      dropdownOpen: false,
      selectedClasses: [],
      allClasses: [],
      searchQuery: '',
      // Klasseninformationen (für Anzeige der Klassennamen)
      klasse: {},
      // Modus zum Bearbeiten/Erstellen
      isEditing: false,
      isCreating: false,
      currentStudent: null,
      // Sortierung
      sortKey: 'Name.Nachname',
      sortOrder: 'asc',
      // Benutzerrolle
      currentUserRole: 'user'
    });
    const isAdmin = computed(async () => {
      const role = await getUserRole();
      return role === 'admin';
    });

    const handleAddFace = async () => {
      await addFace();
    };

    // Normalmodus: Lade paginierte Schüler aus Firestore
    const loadStudents = async (reset = false, direction = 'next') => {
      if (reset) {
        state.lastVisible = null;
        state.firstVisible = null;
        state.currentPage = 1;
        state.students = [];
        state.previousPages = [];
      }
      const { schueler, lastDoc, firstDoc } = await getSchueler(
        state.sortKey, 
        state.sortOrder, 
        state.pageSize, 
        direction === 'next' ? state.lastVisible : state.firstVisible, 
        direction
      );
      if (direction === 'next') {
        state.previousPages.push(state.firstVisible);
        state.students = schueler;
        state.lastVisible = lastDoc;
        state.firstVisible = firstDoc;
        state.hasPrevious = state.previousPages.length > 1;
      } else {
        state.students = schueler;
        state.lastVisible = lastDoc;
        state.firstVisible = state.previousPages.pop();
        state.hasPrevious = state.previousPages.length > 0;
      }
      state.hasMore = schueler.length === state.pageSize;
      // Lade für jeden Schüler die Klasseninformationen (falls nicht bereits geladen)
      for (let student of state.students) {
        const klasseData = await getKlasseFromKID(student.KID);
        state.klasse[student.KID] = klasseData;
      }
    };

    // Lade alle Klassen (für den Filter; Annahme: Anzahl ist überschaubar)
    const loadAllClasses = async () => {
      const { klassen } = await getKlassen('Name', 'asc', 1000);
      state.allClasses = klassen;
    };

    onMounted(async () => {
      await loadStudents();
      await loadAllClasses();
    });

    const getKlasseName = (KID) => state.klasse[KID] ? state.klasse[KID].Name : 'Unknown';

    // Nächste/ vorherige Seite (unterscheidet, ob Suchmodus aktiv ist)
    const nextPage = async () => {
      if (state.searchMode) {
        if (state.searchPage < totalSearchPages.value) {
          state.searchPage++;
        }
      } else {
        if (state.hasMore) {
          state.currentPage++;
          await loadStudents(false, 'next');
        }
      }
    };

    const prevPage = async () => {
      if (state.searchMode) {
        if (state.searchPage > 1) {
          state.searchPage--;
        }
      } else {
        if (state.currentPage > 1) {
          state.currentPage--;
          await loadStudents(false, 'prev');
        }
      }
    };

    const editStudent = (student) => {
      state.currentStudent = student;
      state.isEditing = true;

    };

    const createNewStudent = () => {
      state.isCreating = true;
    };

    const handleDeleteStudent = async (sid) => {
      try {
        await deleteStudentFromDB(sid);
        // Entferne den Schüler aus beiden Listen
        state.students = state.students.filter(student => student.sid !== sid);
        state.searchResults = state.searchResults.filter(student => student.sid !== sid);

      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    };

    const sortTable = async (key) => {
      if (state.sortKey === key) {
        state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortKey = key;
        state.sortOrder = 'asc';
      }
      if (state.searchMode) {
        await performAdvancedSearch();
      } else {
        await loadStudents(true);
      }
    };


    // Toggle für Dropdown
    const toggleDropdown = () => {
      state.dropdownOpen = !state.dropdownOpen;
    };

    /**
     * Führt eine erweiterte Suche durch:
     * - Abfrage in Firestore: Alle Schüler (bzw. alle der ausgewählten Klassen)
     * - Falls ein Suchbegriff eingegeben wurde, wird mit Fuse.js eine fuzzy Suche durchgeführt.
     * - Anschließend wird die Such-Paginierung (state.searchPage) zurückgesetzt.
     */
    const performAdvancedSearch = async () => {
      let studentQuery;
      const studentsCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler');
      if (state.selectedClasses.length > 0) {
        studentQuery = query(studentsCollection, where('KID', 'in', state.selectedClasses));
      } else {
        studentQuery = query(studentsCollection);
      }
      const querySnapshot = await getDocs(studentQuery);
      let allStudents = [];
      querySnapshot.forEach((doc) => {
        allStudents.push({ sid: doc.id, ...doc.data() });
      });
      if (state.searchQuery.trim() !== '') {
        const fuse = new Fuse(allStudents, {
          keys: ['Name.Nachname', 'Name.Vorname', 'Katalognummer'],
          threshold: 0.3
        });
        const results = fuse.search(state.searchQuery.trim());
        state.searchResults = results.map(result => result.item);
      } else {
        state.searchResults = allStudents;
      }
      // Lade Klasseninfos für alle Suchergebnisse
      for (let student of state.searchResults) {
        if (!state.klasse[student.KID]) {
          const klasseData = await getKlasseFromKID(student.KID);
          state.klasse[student.KID] = klasseData;
        }
      }
      // Setze die Such-Paginierung zurück
      state.searchPage = 1;
    };

    // Bei Änderung von Suchbegriff oder ausgewählten Klassen aktiviere den Suchmodus
    watch([() => state.searchQuery, () => state.selectedClasses], async ([newQuery, newClasses]) => {
      if (newQuery.trim() !== '' || (Array.isArray(newClasses) && newClasses.length > 0)) {
        state.searchMode = true;
        await performAdvancedSearch();
      } else {
        state.searchMode = false;
      }
    });

    // Anzeige der Schüler: Im Suchmodus wird clientseitig aus searchResults paginiert,
    // ansonsten werden die aus der Firestore-Abfrage (state.students) angezeigt.
    const displayedStudents = computed(() => {
      if (state.searchMode) {
        const start = (state.searchPage - 1) * state.pageSize;
        return state.searchResults.slice(start, start + state.pageSize);
      } else {
        return state.students;
      }
    });

    // Berechne die Gesamtanzahl der Suchseiten (clientseitig)
    const totalSearchPages = computed(() => {
      return Math.ceil(state.searchResults.length / state.pageSize) || 1;
    });

    return {
      state,
      getKlasseName,
      nextPage,
      prevPage,
      editStudent,
      createNewStudent,
      handleDeleteStudent,
      sortTable,
      isAdmin,
      handleAddFace,
      toggleDropdown,
      displayedStudents,
      totalSearchPages
    };
  }
};
</script>

<style scoped>
@import '@/css/Interface/Schueler.css';
</style>