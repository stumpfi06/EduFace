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
            <option value="true">Ja</option>
            <option value="false">Nein</option>
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
              <td>{{ formatDate(absence.date) }}</td>
              <td>{{ formatTime(absence.Start) }}</td>
              <td>{{ formatTime(absence.Ende) }}</td>
              <td>{{ absence.type }}</td>
              <td>{{ absence.Grund }}</td>
              <td>
                <span :class="['status-indicator', absence.entschuldigt ? 'status-excused' : 'status-unexcused']">
                  {{ absence.entschuldigt ? 'Ja' : 'Nein' }}
                </span>
              </td>
              <td v-if="canEdit" class="action-column">
                <div class="action-buttons">
                  <button v-if="!absence.entschuldigt" @click="excuseAbsence(absence.id)"
                          class="action-button excuse-button" title="Entschuldigen" aria-label="Abwesenheit entschuldigen">
                    <i class="fas fa-check"></i>
                  </button>
                  <button @click="openEditModal(absence)"
                          class="action-button edit-button" title="Bearbeiten" aria-label="Abwesenheit bearbeiten">
                    <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button @click="openDeleteModal(absence.id)"
                          class="action-button delete-button" title="Löschen" aria-label="Abwesenheit löschen">
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
import { ref, onMounted, computed, watch } from 'vue';
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
import { Timestamp } from 'firebase/firestore';
import Fuse from 'fuse.js';

interface FullAbsence extends Omit<Absence, 'id'> {
    id: string;
    studentName?: string;
}

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
const formData = ref<Partial<Absence>>({
    sid: '', date: '', startTime: '', endTime: '', type: '', Grund: '', entschuldigt: false
});
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
    if (!selectedKlasse.value) return [];
    return allStudents.value.filter(s => s.KID === selectedKlasse.value);
});

const fuse = computed(() => {
    const options = { keys: ['studentName'], includeScore: true, threshold: 0.3 };
    return new Fuse(absences.value, options);
});

const displayedAbsences = computed(() => {
    let result = [...absences.value];

    if (filterStartDate.value) {
        const start = Timestamp.fromDate(new Date(filterStartDate.value + "T00:00:00Z")).toMillis();
        result = result.filter(a => a.date.toMillis() >= start);
    }
    if (filterEndDate.value) {
        const end = Timestamp.fromDate(new Date(filterEndDate.value + "T23:59:59Z")).toMillis();
        result = result.filter(a => a.date.toMillis() <= end);
    }
    if (filterStudentName.value.trim()) {
        result = fuse.value.search(filterStudentName.value.trim()).map(fuseResult => fuseResult.item);
    }

    result.sort((a, b) => {
        let valA: any;
        let valB: any;
        switch (sortKey.value) {
            case 'studentName': valA = a.studentName || ''; valB = b.studentName || ''; break;
            case 'date': valA = a.date.toMillis(); valB = b.date.toMillis(); break;
            case 'entschuldigt': valA = a.entschuldigt; valB = b.entschuldigt; break;
            default: valA = a.date.toMillis(); valB = b.date.toMillis();
        }
        let comparison = 0;
        if (valA > valB) comparison = 1;
        else if (valA < valB) comparison = -1;
        return sortDirection.value === 'desc' ? (comparison * -1) : comparison;
    });
    return result;
});

// Watchers
watch(selectedKlasse, async (newKID) => {
    if (newKID && !allStudents.value.some(s => s.KID === newKID)) {
        try {
            const klasseStudents = await getSchuelerByKlasse(newKID);
            allStudents.value = [...allStudents.value, ...klasseStudents];
        } catch (err) {
            handleError(err, `Fehler beim Laden der Schüler für Klasse ${newKID}`);
        }
    }
    formData.value.sid = '';
});

watch([filterKlasse, filterEntschuldigt], async () => {
    currentPage.value = 1;
    await loadAbsences();
});

// Lifecycle Hook
onMounted(async () => {
    try {
        loading.value = true;
        klassen.value = await getAllKlassen();
        await loadAllStudentsInitially();
        await loadAbsences();
    } catch (err) {
        handleError(err, "Fehler beim initialen Laden der Daten");
    } finally {
        loading.value = false;
    }
});

// Methods: Data Loading
const loadAllStudentsInitially = async () => {
    try {
        const studentPromises = klassen.value.map(k => getSchuelerByKlasse(k.KID));
        const studentsByClass = await Promise.all(studentPromises);
        allStudents.value = studentsByClass.flat();
        allStudents.value.forEach(student => {
            students.value[student.sid] = student;
        });
    } catch(err) {
        handleError(err, "Fehler beim Laden aller Schüler");
    }
};

const loadAbsences = async () => {
    try {
        loading.value = true;
        error.value = '';
        // HINWEIS: Backend `getAbsences` unterstützt aktuell nur Filter für Klasse/Entschuldigt.
        // Datum, Name, Sortierung werden client-seitig auf der geladenen Seite angewendet.
        const result = await getAbsences(
           undefined,
           currentPage.value,
           pageSize,
           { klasse: filterKlasse.value, entschuldigt: filterEntschuldigt.value }
         );

        const absencesWithNames = result.absences.map(absence => ({
             ...absence,
             id: absence.id || '',
             studentName: getStudentName(absence.sid)
         })) as FullAbsence[];

        absences.value = absencesWithNames;
        hasMore.value = result.hasMore;
    } catch (err) {
        handleError(err, "Fehler beim Laden der Abwesenheiten");
    } finally {
        loading.value = false;
    }
};

// Methods: Pagination
const nextPage = () => {
    if(hasMore.value) {
        currentPage.value++;
        loadAbsences();
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        loadAbsences();
    }
};

// Methods: Actions (Excuse, Delete)
const excuseAbsence = async (id: string) => {
    const absenceIndex = absences.value.findIndex(a => a.id === id);
    if (absenceIndex === -1) return;

    const originalStatus = absences.value[absenceIndex].entschuldigt;
    absences.value[absenceIndex].entschuldigt = true; // Optimistic UI update

    try {
        await updateAbsence(id, { entschuldigt: true });
    } catch (err) {
         absences.value[absenceIndex].entschuldigt = originalStatus; // Revert UI on error
        handleError(err, "Fehler beim Entschuldigen der Abwesenheit");
    }
};

const openDeleteModal = (id: string) => {
    deleteId.value = id;
    showDeleteModal.value = true;
};

const confirmDelete = async () => {
    if (!deleteId.value) return;
    const idToDelete = deleteId.value;
    const originalAbsences = [...absences.value];
    absences.value = absences.value.filter(a => a.id !== idToDelete); // Optimistic UI update
    cancelDelete();

    try {
        await deleteAbsence(idToDelete);
    } catch (err) {
        absences.value = originalAbsences; // Revert UI on error
        handleError(err, "Löschen fehlgeschlagen");
    }
};

const cancelDelete = () => {
    deleteId.value = '';
    showDeleteModal.value = false;
};

// Methods: Modal Handling (Create/Edit)
const openEditModal = async (absence: FullAbsence) => {
    try {
        const student = allStudents.value.find(s => s.sid === absence.sid);
        if (student) {
          selectedKlasse.value = student.KID || '';
        } else {
           console.warn(`Schüler ${absence.sid} nicht in allStudents gefunden.`);
           const missingStudent = await getSchuelerBySid(absence.sid);
           if (missingStudent) {
               allStudents.value.push(missingStudent);
               students.value[absence.sid] = missingStudent;
               selectedKlasse.value = missingStudent.KID || '';
           } else {
               handleError(new Error(`Schüler ${absence.sid} nicht gefunden`), "Fehler Vorbereitung Editieren");
               return;
           }
        }

        editingAbsenceId.value = absence.id;
        formData.value = {
            sid: absence.sid, date: formatDateForInput(absence.date),
            startTime: formatTimeForInput(absence.Start), endTime: formatTimeForInput(absence.Ende),
            type: absence.type, Grund: absence.Grund, entschuldigt: absence.entschuldigt
        };
        showCreateModal.value = false;
        showEditModal.value = true;
    } catch (err) {
        handleError(err, "Fehler beim Öffnen des Bearbeitungsmodus");
    }
};

const closeAbsenceModal = () => {
    showCreateModal.value = false;
    showEditModal.value = false;
    resetForm();
    editingAbsenceId.value = '';
};

const saveAbsence = async () => {
    error.value = '';
    if (!validateForm()) return;

    try {
        const datePart = formData.value.date!;
        const startTimeParts = formData.value.startTime!.split(':');
        const endTimeParts = formData.value.endTime!.split(':');

        const startDate = new Date(Date.UTC(
            parseInt(datePart.substring(0, 4)), parseInt(datePart.substring(5, 7)) - 1, parseInt(datePart.substring(8, 10)),
            parseInt(startTimeParts[0]), parseInt(startTimeParts[1])
        ));
        const endDate = new Date(Date.UTC(
            parseInt(datePart.substring(0, 4)), parseInt(datePart.substring(5, 7)) - 1, parseInt(datePart.substring(8, 10)),
            parseInt(endTimeParts[0]), parseInt(endTimeParts[1])
        ));

         if (startDate.getTime() >= endDate.getTime()) {
             error.value = "Endzeit muss nach der Startzeit liegen!";
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

        loading.value = true;
        if (editingAbsenceId.value) {
            await updateAbsence(editingAbsenceId.value, absenceData);
        } else {
            await createAbsenceApi(absenceData);
        }

        closeAbsenceModal();
        await loadAbsences();
    } catch (err) {
        handleError(err, showEditModal.value ? "Update fehlgeschlagen" : "Erstellen fehlgeschlagen");
    } finally {
       loading.value = false;
    }
};

const validateForm = () => {
    const requiredFields: (keyof typeof formData.value)[] = ['sid', 'date', 'startTime', 'endTime', 'type'];
    const missingFields = requiredFields.filter(field => !formData.value[field]);
    if (missingFields.length > 0) {
        error.value = `Pflichtfelder fehlen: ${missingFields.join(', ')}`; return false;
    }
    if (!showEditModal.value && !selectedKlasse.value) {
       error.value = 'Bitte Klasse wählen.'; return false;
    }
    if (!formData.value.sid) {
        error.value = 'Bitte Schüler wählen.'; return false;
    }
    error.value = '';
    return true;
};

const resetForm = () => {
    selectedKlasse.value = '';
    formData.value = {
        sid: '', date: '', startTime: '', endTime: '', type: '', Grund: '', entschuldigt: false
    };
    error.value = '';
};

// Methods: Sorting
const sortBy = (key: string) => {
    if (sortKey.value === key) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortKey.value = key;
        sortDirection.value = key === 'date' ? 'desc' : 'asc';
    }
};

// Helper Functions
const getStudentName = (sid: string): string => {
    const student = students.value[sid] || allStudents.value.find(s => s.sid === sid);
    return student ? `${student.name?.Vorname || ''} ${student.name?.Nachname || ''}`.trim() : 'Unbek. Schüler';
};

const getClassName = (kid: string) => {
    return klassen.value.find(k => k.KID === kid)?.Name || 'Unbek. Klasse';
};

const formatDate = (date: Timestamp | undefined): string => {
    if (!date) return '---';
    try {
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: '2-digit', month: '2-digit', day: '2-digit' };
        return date.toDate().toLocaleDateString('de-DE', options);
    } catch (e) { return 'Fehler Datum'; }
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
    } catch (e) { return ''; }
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

<style scoped>
@import "../../css/Interface/Abwesenheiten.css"; 
</style>