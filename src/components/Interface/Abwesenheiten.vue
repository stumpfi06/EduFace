<template>
  <div class="interface-body">
    <div class="absences-container">
      <div v-if="error" class="error-message">{{ error }}</div>

      <h1 class="schueler-h1">Abwesenheiten</h1>

      <div class="filters">
        <div class="filter-group">
          <label for="klasse-filter">Klasse:</label>
          <select id="klasse-filter" v-model="filterKlasse">
            <option value="">Alle Klassen</option>
            <option v-for="klasse in klassen" :key="klasse.KID" :value="klasse.KID">
              {{ klasse.Name }}
            </option>
          </select>
        </div>
        <div class="filter-group">
          <label for="entschuldigt-filter">Entschuldigt:</label>
          <select id="entschuldigt-filter" v-model="filterEntschuldigt">
            <option value="">Alle Stati</option>
            <option value="true">entschuldigt</option>
            <option value="false">nicht entschuldigt</option>
          </select>
        </div>
        <div class="filter-group date-range-filter">
          <label for="start-date-filter">Datum von:</label>
          <input type="date" id="start-date-filter" v-model="filterStartDate">
          <label for="end-date-filter">bis:</label>
          <input type="date" id="end-date-filter" v-model="filterEndDate">
        </div>
        <div class="filter-group">
          <label for="student-name-filter">Schüler:</label>
          <input type="text" id="student-name-filter" v-model="filterStudentName" placeholder="Name suchen...">
        </div>
      </div>

      <div v-if="loading && !displayedAbsences.length" class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>

      <div v-else>
        <table class="student-table sortable">
          <thead>
            <tr>
              <th @click="sortBy('studentName')" :class="{ sorted: sortKey === 'studentName' }" tabindex="0" role="button" aria-label="Nach Schüler sortieren">
                Schüler
                <span v-if="sortKey === 'studentName'">{{ sortDirection === 'asc' ? '▲' : '▼' }}</span>
              </th>
              <th @click="sortBy('date')" :class="{ sorted: sortKey === 'date' }" tabindex="0" role="button" aria-label="Nach Datum sortieren">
                Datum
                <span v-if="sortKey === 'date'">{{ sortDirection === 'asc' ? '▲' : '▼' }}</span>
              </th>
              <th>Von</th>
              <th>Bis</th>
              <th>Typ</th>
              <th>Grund</th>
              <th @click="sortBy('entschuldigt')" :class="{ sorted: sortKey === 'entschuldigt' }" tabindex="0" role="button" aria-label="Nach Entschuldigt-Status sortieren">
                Entschuldigt
                <span v-if="sortKey === 'entschuldigt'">{{ sortDirection === 'asc' ? '▲' : '▼' }}</span>
              </th>
              <th v-if="canEdit">Aktionen</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="displayedAbsences.length === 0">
              <td :colspan="canEdit ? 8 : 7" style="text-align: center; padding: 20px;">
                Keine Abwesenheiten gefunden, die den Kriterien entsprechen.
              </td>
            </tr>
            <tr v-for="absence in displayedAbsences" :key="absence.id">
              <td>{{ absence.studentName }}</td>
              <td>{{absence.date ? formatDate(absence.date) : "---"}}</td>
              <td>{{ formatTime(absence.Start) }}</td>
              <td>{{ formatTime(absence.Ende) }}</td>
              <td>{{ absence.type }}</td>
              <td>{{ absence.Grund }}</td>
              <td>
                <span :class="['status-indicator', absence.entschuldigt ? 'status-excused' : 'status-unexcused']">
                  {{ absence.entschuldigt ? 'entschuldigt' : 'nicht entschuldigt' }}
                </span>
              </td>
              <td v-if="canEdit" class="action-column">
                <div class="action-buttons">
                  <button v-if="!absence.entschuldigt" @click="excuseAbsence(absence.id)"
                          class="action-button" title="Entschuldigen" aria-label="Abwesenheit entschuldigen">
                    <i class="fas fa-check"></i>
                  </button>
                  <button @click="openEditModal(absence)"
                          class="action-button" title="Bearbeiten" aria-label="Abwesenheit bearbeiten">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button @click="openDeleteModal(absence.id)"
                          class="action-button" title="Löschen" aria-label="Abwesenheit löschen">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <button @click="showCreateModal = true" class="action-button add-button">
          Neue Abwesenheit hinzufügen
        </button>

        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button" aria-label="Vorherige Seite">
            <i class="fas fa-chevron-left"></i>
          </button>
          <span>Seite {{ currentPage }}</span>
          <button @click="nextPage" :disabled="!hasMore" class="pagination-button" aria-label="Nächste Seite">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>

    <div v-if="showDeleteModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="delete-modal-title">
      <div class="modal-content">
        <h3 id="delete-modal-title">Löschen bestätigen</h3>
        <p>Sind Sie sicher, dass Sie diese Abwesenheit löschen möchten?</p>
        <div class="modal-actions">
          <button @click="confirmDelete" class="action-button delete-button">
            <i class="fas fa-check"></i> Bestätigen
          </button>
          <button @click="cancelDelete" class="action-button">
            <i class="fas fa-times"></i> Abbrechen
          </button>
        </div>
      </div>
    </div>

    <div v-if="showCreateModal || showEditModal" class="modal" role="dialog" aria-modal="true" :aria-labelledby="modalTitleId">
      <div class="modal-content">
        <h3 :id="modalTitleId">{{ showEditModal ? 'Abwesenheit bearbeiten' : 'Neue Abwesenheit erstellen' }}</h3>
        <div v-if="error" class="error-message modal-error">{{ error }}</div>
        <div class="modal-body-content">
          <div class="form-group">
            <label for="modal-klasse-select">Klasse:</label>
            <div v-if="showEditModal" class="readonly-info">
              {{ getClassName(selectedKlasse) || 'Wird geladen...'}}
            </div>
            <select v-else id="modal-klasse-select" v-model="selectedKlasse" required aria-required="true">
              <option disabled value="">Bitte Klasse wählen</option>
              <option v-for="klasse in klassen" :key="klasse.KID" :value="klasse.KID">
                {{ klasse.Name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="modal-student-select">Schüler:</label>
            <div v-if="showEditModal" class="readonly-info">
              {{ getStudentName(formData.sid || '') }}
            </div>
            <select v-else id="modal-student-select" v-model="formData.sid" :disabled="!selectedKlasse || filteredStudents.length === 0" required aria-required="true">
              <option disabled value="">{{ selectedKlasse ? 'Bitte Schüler wählen' : 'Bitte zuerst Klasse wählen' }}</option>
              <option v-for="student in filteredStudents" :key="student.sid" :value="student.sid">
                {{ student.name?.Vorname }} {{ student.name?.Nachname }} (Kat: {{ student.Katalognummer }})
              </option>
            </select>
            <div v-if="!showEditModal && selectedKlasse && filteredStudents.length === 0" class="form-hint">
              Keine Schüler für die ausgewählte Klasse gefunden oder geladen.
            </div>
          </div>

          <div class="form-group">
            <label for="modal-date-input">Datum:</label>
            <input id="modal-date-input" type="date" v-model="formData.date" required aria-required="true">
          </div>

          <div class="form-group">
            <label for="modal-start-time-input">Von:</label>
            <input id="modal-start-time-input" type="time" v-model="formData.startTime" required aria-required="true">
          </div>

          <div class="form-group">
            <label for="modal-end-time-input">Bis:</label>
            <input id="modal-end-time-input" type="time" v-model="formData.endTime" required aria-required="true">
          </div>

          <div class="form-group">
            <label for="modal-type-select">Typ:</label>
            <select id="modal-type-select" v-model="formData.type" required aria-required="true">
              <option disabled value="">Bitte wählen</option>
              <option v-for="type in absenceTypes" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="modal-grund-input">Grund:</label>
            <input id="modal-grund-input" type="text" v-model="formData.Grund" placeholder="Optional">
          </div>

          <div class="form-group">
            <label for="modal-entschuldigt-select">Entschuldigt:</label>
            <select id="modal-entschuldigt-select" v-model="formData.entschuldigt">
              <option :value="false">Nein</option>
              <option :value="true">Ja</option>
            </select>
          </div>
        </div>

        <div class="modal-actions">
          <button @click="saveAbsence" class="action-button save-button">
            <i class="fas fa-save"></i> {{ showEditModal ? 'Änderungen speichern' : 'Abwesenheit erstellen' }}
          </button>
          <button @click="closeAbsenceModal" class="action-button cancel-button">
            <i class="fas fa-times"></i> Abbrechen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "../../css/Interface/Abwesenheiten.css";
import { ref, onMounted, computed, watch, reactive } from 'vue';
import {
    getAbsences,
    updateAbsence,
    deleteAbsence,
    createAbsence as createAbsenceApi,
    getSchuelerBySid,
    getSchuelerByKlasse,
    getAllKlassen,
    type Student,
    type Klasse,
    type Absence
} from '../../firebase/queries';
import { Timestamp, QueryDocumentSnapshot } from 'firebase/firestore';
import Fuse from 'fuse.js';

interface FullAbsence extends Omit<Absence, 'id'> {
    id: string;
    studentName?: string;
}
const state = reactive({
    absences: [] as FullAbsence[],
    currentPage: 1,
    pageSize: 10,
    lastVisible: null as QueryDocumentSnapshot | null,
    firstVisible: null as QueryDocumentSnapshot | null,
    hasMore: true,
    sortKey: 'date',
    sortOrder: 'desc' as 'asc' | 'desc'
});
// Base State
const absences = ref<FullAbsence[]>([]);
const students = ref<Record<string, Student>>({});
const allStudents = ref<Student[]>([]);
const klassen = ref<Klasse[]>([]);
const loading = ref(true);
const error = ref<string>('');
const canEdit = ref(true);
const currentPage = ref(1);
const pageSize = 10;
const hasMore = ref(true);

// Modal State
const showDeleteModal = ref(false);
const deleteId = ref<string>('');
const showCreateModal = ref(false);
const showEditModal = ref(false);
const editingAbsenceId = ref<string>('');
const selectedKlasse = ref<string>(''); // For modal class selection
const formData = ref<Partial<Absence & { startTime?: string; endTime?: string }>>({
    sid: '', date: null, type: '', Grund: '', entschuldigt: false, startTime: '', endTime: ''
});

// Separate state for startTime and endTime
const startTime = ref<string>('');
const endTime = ref<string>('');
const modalTitleId = computed(() => showEditModal.value ? 'edit-modal-title' : 'create-modal-title');

// Filter & Sort State
const filterKlasse = ref<string>('');
const filterEntschuldigt = ref<string>('');
const filterStartDate = ref<string>('');
const filterEndDate = ref<string>('');
const filterStudentName = ref<string>('');
const sortKey = ref<string>('date');
const sortDirection = ref<'asc' | 'desc'>('desc');

const absenceTypes = [
    'Absenz für Exkursion, schulveranstaltung', 'Arztbesuch', 'Familiäre Gründe', 'Krankheit',
    'Naturkatastrophen, Katastropheneinsatz', 'verschlafen', 'Verspätung'
];

// Computed Properties
const filteredStudents = computed(() => {
    console.log("Ausgewählte Klasse für Schülerfilter:", selectedKlasse.value);
    if (!selectedKlasse.value) {
        console.log("Keine Klasse ausgewählt, zeige keine gefilterten Schüler.");
        return [];
    }
    const filtered = allStudents.value.filter(s => s.KID === selectedKlasse.value);
    console.log("Gefilterte Schüler für Klasse", selectedKlasse.value, ":", filtered);
    return filtered;
});

const fuse = computed(() => {
    const options = { keys: ['studentName'], includeScore: true, threshold: 0.3 };
    return new Fuse(absences.value, options);
});

const displayedAbsences = computed(() => {
    console.log("Berechne angezeigte Abwesenheiten...");
    let result = [...absences.value];
    console.log("Aktuelle Abwesenheiten:", result);

    if (filterKlasse.value) {
        console.log("Filtere nach Klasse:", filterKlasse.value);
        result = result.filter(a => {
            const student = allStudents.value.find(s => s.sid === a.sid);
            const matches = student?.KID === filterKlasse.value;
            console.log(`Abwesenheit für Schüler-ID ${a.sid}, Klasse des Schülers: ${student?.KID}, Filterklasse: ${filterKlasse.value}, Match: ${matches}`);
            return matches;
        });
        console.log("Abwesenheiten nach Klassenfilter:", result);
    }
    if (filterEntschuldigt.value !== '') {
        const entschuldigtFilter = filterEntschuldigt.value === 'true';
        console.log("Filtere nach Entschuldigt-Status:", entschuldigtFilter);
        result = result.filter(a => a.entschuldigt === entschuldigtFilter);
        console.log("Abwesenheiten nach Entschuldigt-Filter:", result);
    }
    if (filterStartDate.value) {
        const start = Timestamp.fromDate(new Date(filterStartDate.value + "T00:00:00Z")).toMillis();
        console.log("Filtere nach Startdatum:", filterStartDate.value, "Timestamp:", start);
        result = result.filter(a => a.date.toMillis() >= start);
        console.log("Abwesenheiten nach Startdatum-Filter:", result);
    }
    if (filterEndDate.value) {
        const end = Timestamp.fromDate(new Date(filterEndDate.value + "T23:59:59Z")).toMillis();
        console.log("Filtere nach Enddatum:", filterEndDate.value, "Timestamp:", end);
        result = result.filter(a => a.date.toMillis() <= end);
        console.log("Abwesenheiten nach Enddatum-Filter:", result);
    }
    if (filterStudentName.value.trim()) {
        console.log("Filtere nach Schülername:", filterStudentName.value.trim());
        const fuseResult = fuse.value.search(filterStudentName.value.trim());
        console.log("Fuse Suchergebnisse:", fuseResult);
        result = fuseResult.map(fuseResult => fuseResult.item);
        console.log("Abwesenheiten nach Namensfilter:", result);
    }

    result.forEach(absence => {
        console.log("Typ von absence.date:", typeof absence.date, absence.date);
    });

    result.sort((a, b) => {
        let valA: any;
        let valB: any;
        switch (sortKey.value) {
            case 'studentName': valA = a.studentName || ''; valB = b.studentName || ''; break;
            case 'date':
                // Erstelle explizit Timestamp-Objekte für den Vergleich
                const dateA = a.date instanceof Timestamp ? a.date : new Timestamp(a.date?.seconds, a.date?.nanoseconds);
                const dateB = b.date instanceof Timestamp ? b.date : new Timestamp(b.date?.seconds, b.date?.nanoseconds);
                if (!dateA || !dateB || typeof dateA.toMillis !== 'function' || typeof dateB.toMillis !== 'function') {
                    console.error("Ungültiges Datumsformat beim Sortieren:", a.date, b.date);
                    return 0; // Bei Fehler keine Sortieränderung
                }
                valA = dateA.toMillis();
                valB = dateB.toMillis();
                break;
            case 'entschuldigt': valA = a.entschuldigt; valB = b.entschuldigt; break;
            default:
                // Erstelle explizit Timestamp-Objekte für den Vergleich
                const defaultDateA = a.date instanceof Timestamp ? a.date : new Timestamp(a.date?.seconds, a.date?.nanoseconds);
                const defaultDateB = b.date instanceof Timestamp ? b.date : new Timestamp(b.date?.seconds, b.date?.nanoseconds);
                if (!defaultDateA || !defaultDateB || typeof defaultDateA.toMillis !== 'function' || typeof defaultDateB.toMillis !== 'function') {
                    console.error("Ungültiges Datumsformat beim Sortieren (default):", a.date, b.date);
                    return 0; // Bei Fehler keine Sortieränderung
                }
                valA = defaultDateA.toMillis();
                valB = defaultDateB.toMillis();
        }
        let comparison = 0;
        if (valA > valB) comparison = 1;
        else if (valA < valB) comparison = -1;
        const sortMultiplier = sortDirection.value === 'desc' ? -1 : 1;
        return comparison * sortMultiplier;
    });
    console.log("Angezeigte Abwesenheiten (nach Filterung und Sortierung):", result);
    return result;
});

// Watchers
watch(selectedKlasse, async (newKID) => {
    console.log("Ausgewählte Klasse im Modal geändert zu:", newKID);
    if (newKID && !allStudents.value.some(s => s.KID === newKID)) {
        console.log(`Lade Schüler für Klasse ${newKID} da sie noch nicht geladen wurden.`);
        try {
            const klasseStudents = await getSchuelerByKlasse(newKID);
            console.log("Geladene Schüler für die ausgewählte Klasse:", klasseStudents);
            allStudents.value = [...allStudents.value, ...klasseStudents];
        } catch (err) {
            handleError(err, `Fehler beim Laden der Schüler für Klasse ${newKID}`);
        }
    }
    formData.value.sid = '';
    console.log("Schüler im Formular zurückgesetzt.");
});

watch([filterKlasse, filterEntschuldigt], async () => {
    console.log("Filter für Klasse oder Entschuldigt geändert, setze Seite auf 1 und lade Abwesenheiten neu.");
    currentPage.value = 1;
    await loadAbsences(true); // Force reset for pagination
});

// Lifecycle Hook
onMounted(async () => {
    console.log("Komponente 'Abwesenheiten' mounted.");
    try {
        loading.value = true;
        console.log("Starte initiales Laden der Daten...");
        console.log("Lade alle Klassen...");
        klassen.value = await getAllKlassen();
        console.log("Geladene Klassen:", klassen.value);
        console.log("Starte initiales Laden aller Schüler...");
        await loadAllStudentsInitially();
        console.log("Initiales Laden aller Schüler abgeschlossen.");
        console.log("Starte initiales Laden der Abwesenheiten...");
        await loadAbsences(true); // Initial load with reset
        console.log("Initiales Laden der Abwesenheiten abgeschlossen.");
    } catch (err) {
        handleError(err, "Fehler beim initialen Laden der Daten");
    } finally {
        loading.value = false;
        console.log("Initiales Laden abgeschlossen, loading.value ist false.");
    }
});

// Methods: Data Loading
const loadAllStudentsInitially = async () => {
    console.log("loadAllStudentsInitially aufgerufen...");
    try {
        console.log("Hole Schüler pro Klasse...");
        const studentPromises = klassen.value.map(k => {
            console.log("Hole Schüler für Klasse KID:", k.KID);
            return getSchuelerByKlasse(k.KID);
        });
        const studentsByClass = await Promise.all(studentPromises);
        console.log("Schüler pro Klasse geladen:", studentsByClass);
        allStudents.value = studentsByClass.flat();
        console.log("Alle Schüler zusammengeführt (allStudents):", allStudents.value);
        students.value = {}; // Reset students object before populating
        allStudents.value.forEach(student => {
            students.value[student.sid] = student;
            console.log("Füge Schüler zum students-Objekt hinzu:", student.sid, student);
        });
        console.log("Alle Schüler im Objekt gespeichert (students):", students.value);
        // **Füge diese Logs hinzu:**
        console.log("Erster Schüler in allStudents:", allStudents.value[0]);
        console.log("Erste SID im students-Objekt:", Object.keys(students.value)[0]);
        // After loading all students, populate studentName in absences
        console.log("Populiere studentName in den Abwesenheiten...");
        absences.value = state.absences.map(absence => ({
            ...absence,
            studentName: getStudentName(absence.sid)
        }));
        console.log("studentName in Abwesenheiten populiert:", absences.value);
    } catch(err) {
        handleError(err, "Fehler beim Laden aller Schüler");
    } finally {
        console.log("loadAllStudentsInitially abgeschlossen.");
    }
};

const loadAbsences = async (reset = false, direction = 'next') => {
    console.log(`loadAbsences aufgerufen (reset: ${reset}, direction: ${direction})...`);
    try {
        loading.value = true;
        console.log("Setze loading auf true.");
        const filters: Record<string, string> = {};
        if (filterKlasse.value) {
            filters.klasse = filterKlasse.value;
            console.log("Filter für Klasse hinzugefügt:", filterKlasse.value);
        }
        if (filterEntschuldigt.value !== '') {
            filters.entschuldigt = filterEntschuldigt.value;
            console.log("Filter für Entschuldigt-Status hinzugefügt:", filterEntschuldigt.value);
        }

        let startAfterDoc: QueryDocumentSnapshot | null = null;
        let endBeforeDoc: QueryDocumentSnapshot | null = null;

        if (direction === 'next') {
            startAfterDoc = state.lastVisible;
            console.log("Lade nächste Seite, starte nach Dokument:", startAfterDoc?.id);
        } else if (direction === 'prev') {
            endBeforeDoc = state.firstVisible;
            console.log("Lade vorherige Seite, ende vor Dokument:", endBeforeDoc?.id);
        } else if (reset) {
            console.log("Lade erste Seite oder nach Filteränderung, starte ohne Cursor.");
            startAfterDoc = null;
            endBeforeDoc = null;
            state.absences = []; // Clear existing absences on reset
        }

        const result = await getAbsences(
            sortKey.value,
            sortDirection.value,
            pageSize,
            startAfterDoc,
            endBeforeDoc
        );
        console.log("Ergebnis des Abwesenheiten-Queries:", result);

        const newAbsencesWithNames = result.absences.map(absence => ({
            ...absence,
            studentName: getStudentName(absence.sid)
        }));
        console.log("Neue Abwesenheiten mit Namen:", newAbsencesWithNames);

        if (reset) {
            console.log("Zurücksetzen der Abwesenheiten mit neuen Daten.");
            state.absences = newAbsencesWithNames.map(absence => ({
                ...absence,
                id: absence.id || '',
                date: { ...absence.date } // Ensure reactivity for Timestamp objects
            }));
        } else if (direction === 'prev' && state.firstVisible && result.firstDoc?.id !== state.firstVisible.id) {
            console.log("Vorherige Seite geladen, füge am Anfang hinzu.");
            state.absences = [...newAbsencesWithNames.map(absence => ({ ...absence, id: absence.id || '' })), ...state.absences];
        } else if (direction === 'next' && state.lastVisible && result.lastDoc?.id !== state.lastVisible.id) {
            console.log("Nächste Seite geladen, füge am Ende hinzu.");
            state.absences = [
                ...state.absences,
                ...newAbsencesWithNames.map(absence => ({
                    ...absence,
                    id: absence.id || ''
                }))
            ];
        } else if (!state.absences.length && !reset) {
            console.log("Erste Ladung der Abwesenheiten.");
            state.absences = newAbsencesWithNames.map(absence => ({
                ...absence,
                id: absence.id || ''
            }));
        }

        state.lastVisible = result.lastDoc;
        state.firstVisible = result.firstDoc;
        state.hasMore = result.hasMore;
        absences.value = state.absences; // Update the absences ref
        console.log("Aktualisierte Abwesenheiten im State:", state.absences);
        console.log("Letztes sichtbares Dokument:", state.lastVisible?.id);
        console.log("Erstes sichtbares Dokument:", state.firstVisible?.id);
        console.log("Hat mehr Seiten:", state.hasMore);

    } catch (error) {
        handleError(error, "Fehler beim Laden der Abwesenheiten");
    } finally {
        loading.value = false;
        console.log("loadAbsences abgeschlossen, loading.value ist false.");
    }
};

const nextPage = () => {
    console.log("Nächste Seite angefordert.");
    if (state.hasMore) {
        state.currentPage++;
        console.log("Aktuelle Seite:", state.currentPage);
        loadAbsences(false, 'next');
    } else {
        console.log("Keine weiteren Seiten verfügbar.");
    }
};

const prevPage = () => {
    console.log("Vorherige Seite angefordert.");
    if (state.currentPage > 1) {
        state.currentPage--;
        console.log("Aktuelle Seite:", state.currentPage);
        loadAbsences(false, 'prev');
    } else {
        console.log("Bereits auf der ersten Seite.");
    }
};

// Methods: Actions (Excuse, Delete)
const excuseAbsence = async (id: string) => {
    console.log("Versuche Abwesenheit mit ID zu entschuldigen:", id);
    const absenceIndex = absences.value.findIndex(a => a.id === id);
    if (absenceIndex === -1) {
        console.warn("Abwesenheit mit ID nicht gefunden:", id);
        return;
    }

    const originalStatus = absences.value[absenceIndex].entschuldigt;
    absences.value[absenceIndex].entschuldigt = true; // Optimistic UI update
    console.log("UI: Abwesenheit als entschuldigt markiert.");

    try {
        await updateAbsence(id, { entschuldigt: true });
        console.log("Firebase: Abwesenheit erfolgreich entschuldigt.");
    } catch (err) {
        absences.value[absenceIndex].entschuldigt = originalStatus; // Revert UI on error
        handleError(err, "Fehler beim Entschuldigen der Abwesenheit");
    }
};

const openDeleteModal = (id: string) => {
    console.log("Öffne Löschen-Modal für ID:", id);
    deleteId.value = id;
    showDeleteModal.value = true;
};

const confirmDelete = async () => {
    console.log("Bestätige Löschen für ID:", deleteId.value);
    if (!deleteId.value) return;
    const idToDelete = deleteId.value;
    const originalAbsences = [...absences.value];
    absences.value = absences.value.filter(a => a.id !== idToDelete); // Optimistic UI update
    console.log("UI: Abwesenheit entfernt.");
    cancelDelete();

    try {
        await deleteAbsence(idToDelete);
        console.log("Firebase: Abwesenheit erfolgreich gelöscht.");
    } catch (err) {
        absences.value = originalAbsences; // Revert UI on error
        handleError(err, "Löschen fehlgeschlagen");
    }
};

const cancelDelete = () => {
    console.log("Löschen abgebrochen.");
    deleteId.value = '';
    showDeleteModal.value = false;
};

// Methods: Modal Handling (Create/Edit)
const openEditModal = async (absence: FullAbsence) => {
    console.log("Öffne Bearbeiten-Modal für Abwesenheit:", absence);
    try {
        console.log("Suche Schüler für SID:", absence.sid);
        const student = allStudents.value.find(s => s.sid === absence.sid);
        if (student) {
            selectedKlasse.value = student.KID || '';
            console.log("Klasse des Schülers gefunden:", selectedKlasse.value);
        } else {
            console.warn(`Schüler ${absence.sid} nicht in allStudents gefunden. Versuche, ihn einzeln zu laden.`);
            const missingStudent = await getSchuelerBySid(absence.sid);
            if (missingStudent) {
                console.log("Fehlender Schüler einzeln geladen:", missingStudent);
                allStudents.value.push(missingStudent);
                students.value[missingStudent.sid] = missingStudent; // Use missingStudent.sid
                selectedKlasse.value = missingStudent.KID || '';
                console.log("Klasse des einzeln geladenen Schülers:", selectedKlasse.value);
            } else {
                handleError(new Error(`Schüler ${absence.sid} nicht gefunden`), "Fehler Vorbereitung Editieren");
                return;
            }
        }

        editingAbsenceId.value = absence.id;
        formData.value = {
    sid: absence.sid,
    type: absence.type,
    Grund: absence.Grund,
    entschuldigt: absence.entschuldigt,
    startTime: formatTimeForInput(absence.Start),
    endTime: formatTimeForInput(absence.Ende),
    date: formatDateForInput(absence.date)
  };
        console.log("Formulardaten für Bearbeitung gesetzt:", formData.value);
        console.log("sid", formData.value.sid, "date", formData.value.date, "startTime", formData.value.startTime, "endTime", formData.value.endTime, "type", formData.value.type, "Grund", formData.value.Grund, "entschuldigt", formData.value.entschuldigt);
        showCreateModal.value = false;
        showEditModal.value = true;
    } catch (err) {
        handleError(err, "Fehler beim Öffnen des Bearbeitungsmodus");
    }
};

const closeAbsenceModal = () => {
    console.log("Schließe Abwesenheits-Modal.");
    showCreateModal.value = false;
    showEditModal.value = false;
    resetForm();
    editingAbsenceId.value = '';
};

const saveAbsence = async () => {
    console.log("Versuche Abwesenheit zu speichern/aktualisieren.");
    error.value = '';
    if (!validateForm()) {
        console.warn("Formularvalidierung fehlgeschlagen.");
        return;
    }

    try {
        const datePart = formData.value.date!;
        const startTimeParts = formData.value.startTime!.split(':');
        const endTimeParts = formData.value.endTime!.split(':');

        const startDate = new Date(Date.UTC(
            datePart.toDate().getUTCFullYear(), datePart.toDate().getUTCMonth(), datePart.toDate().getUTCDate(),
            parseInt(startTimeParts[0]), parseInt(startTimeParts[1])
        ));
        const endDate = new Date(Date.UTC(
            datePart.toDate().getUTCFullYear(), datePart.toDate().getUTCMonth(), datePart.toDate().getUTCDate(),
            parseInt(endTimeParts[0]), parseInt(endTimeParts[1])
        ));

        if (startDate.getTime() >= endDate.getTime()) {
            error.value = "Endzeit muss nach der Startzeit liegen!";
            console.error(error.value);
            return;
        }

        const absenceData: Omit<Absence, 'id'> = {
            sid: formData.value.sid!,
            Start: startDate.getUTCHours() * 60 + startDate.getUTCMinutes(),
            Ende: endDate.getUTCHours() * 60 + endDate.getUTCMinutes(),
            date: Timestamp.fromDate(new Date(Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate()))),
            type: formData.value.type!,
            Grund: formData.value.Grund || '',
            entschuldigt: formData.value.entschuldigt ?? false,
            createdAt: editingAbsenceId.value
                ? (absences.value.find(a => a.id === editingAbsenceId.value)?.createdAt || Timestamp.now())
                : Timestamp.now()
        };
        console.log("Zu speichernde/aktualisierende Abwesenheitsdaten:", absenceData);

        loading.value = true;
        console.log("Setze loading auf true während des Speicherns.");
        if (editingAbsenceId.value) {
            console.log("Aktualisiere Abwesenheit mit ID:", editingAbsenceId.value);
            await updateAbsence(editingAbsenceId.value, absenceData);
            console.log("Abwesenheit erfolgreich aktualisiert.");
        } else {
            console.log("Erstelle neue Abwesenheit.");
            await createAbsenceApi(absenceData);
            console.log("Abwesenheit erfolgreich erstellt.");
        }

        closeAbsenceModal();
        await loadAbsences(true); // Reload absences after saving
    } catch (err) {
        handleError(err, showEditModal.value ? "Update fehlgeschlagen" : "Erstellen fehlgeschlagen");
    } finally {
        loading.value = false;
        console.log("Speichern/Aktualisieren abgeschlossen, loading.value ist false.");
    }
};

const validateForm = () => {
    const requiredFields: (keyof typeof formData.value)[] = ['sid', 'date', 'startTime', 'endTime', 'type'];
    const missingFields = requiredFields.filter(field => !formData.value[field]);
    if (missingFields.length > 0) {
        error.value = `Pflichtfelder fehlen: ${missingFields.join(', ')}`;
        console.error(error.value);
        return false;
    }
    if (!showEditModal.value && !selectedKlasse.value) {
        error.value = 'Bitte Klasse wählen.';
        console.error(error.value);
        return false;
    }
    if (!formData.value.sid) {
        error.value = 'Bitte Schüler wählen.';
        console.error(error.value);
        return false;
    }
    error.value = '';
    return true;
};

const resetForm = () => {
    console.log("Formular zurückgesetzt.");
    selectedKlasse.value = '';
    formData.value = {
        sid: '', date: null, startTime: '', endTime: '', type: '', Grund: '', entschuldigt: false
    };
    error.value = '';
};

// Methods: Sorting
const sortBy = (key: string) => {
    console.log("Sortiere nach Schlüssel:", key);
    if (sortKey.value === key) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
        console.log("Sortierrichtung geändert zu:", sortDirection.value);
    } else {
        sortKey.value = key;
        sortDirection.value = key === 'date' ? 'desc' : 'asc';
        console.log("Sortierschlüssel geändert zu:", sortKey.value, "Richtung:", sortDirection.value);
    }
};

// Helper Functions
const getStudentName = (sid: string): string => {
    console.log("Rufe getStudentName für SID auf:", sid);
    const student = students.value[sid] || allStudents.value.find(s => s.sid === sid);
    if (student) {
        const name = `${student.name?.Vorname || ''} ${student.name?.Nachname || ''}`.trim();
        console.log("Schüler gefunden:", name, student);
        return name;
    }
    console.log("Kein Schüler gefunden für SID:", sid);
    return 'Unbek. Schüler';
};

const getClassName = (kid: string) => {
    const name = klassen.value.find(k => k.KID === kid)?.Name || 'Unbek. Klasse';
    console.log("Rufe getClassName für KID auf:", kid, "Name:", name);
    return name;
};

const formatDate = (date: Timestamp | undefined): string => {
    console.log("Format date function called with:", date);
    if (!date) return '---';
    try {
        console.log("Type of date:", typeof date); // Hinzugefügter Log
        console.log("Date object before toDate():", date); // Hinzugefügter Log
        const dateToUse = date instanceof Timestamp ? date : new Timestamp(date.seconds, date.nanoseconds);
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: '2-digit', month: '2-digit', day: '2-digit' };
        const formattedDate = dateToUse.toDate().toLocaleDateString('de-DE', options);
        return formattedDate;
    } catch (e) {
        console.error("Fehler beim Formatieren des Datums:", e);
        return 'Fehler Datum';
    }
};

const formatTime = (minutesSinceMidnight: number | undefined | null): string => {
    if (minutesSinceMidnight === undefined || minutesSinceMidnight === null || isNaN(minutesSinceMidnight)) return '--:--';
    const totalMinutes = Math.round(minutesSinceMidnight);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};

const formatDateForInput = (timestamp: Timestamp | undefined): string => {
    if (!timestamp) return '';
    try {
        const date = timestamp.toDate();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    } catch (e) {
        console.error("Fehler beim Formatieren des Datums für Input:", e);
        return '';
    }
};

const formatTimeForInput = (minutesSinceMidnight: number | undefined | null): string => {
    if (minutesSinceMidnight === undefined || minutesSinceMidnight === null || isNaN(minutesSinceMidnight)) return '';
    const totalMinutes = Math.round(minutesSinceMidnight);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};

const handleError = (err: unknown, message: string) => {
    console.error(message, err);
    let detail = (err instanceof Error) ? err.message : (typeof err === 'string' ? err : 'Unbekannter Fehler');
    error.value = `${message}. Details: ${detail}`;
};

</script>