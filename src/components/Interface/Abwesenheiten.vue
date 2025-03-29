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
      </div>

     

      <div v-if="loading" class="loading">Loading...</div>

      <div v-else>
        <table class="student-table">
          <thead>
            <tr>
              <th>Schüler</th>
              <th>Datum</th>
              <th>Von</th>
              <th>Bis</th>
              <th>Typ</th>
              <th>Grund</th>
              <th>Entschuldigt</th>
              <th v-if="canEdit">Aktionen</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="absence in absences" :key="absence.id">
              <td>{{ getStudentName(absence.sid) }}</td>
              <td>{{ formatDate(absence.date) }}</td>
              <td>{{ formatTime(absence.Start) }}</td>
              <td>{{ formatTime(absence.Ende) }}</td>
              <td>{{ absence.type }}</td>
              <td>{{ absence.Grund }}</td>
              <td>{{ absence.entschuldigt ? 'Ja' : 'Nein' }}</td>
              <td v-if="canEdit" class="action-column">
                <div class="action-buttons">
                  <button
                    v-if="!absence.entschuldigt"
                    @click="excuseAbsence(absence.id)"
                    class="action-button"
                    title="Entschuldigen"
                  >
                    <i class="fas fa-check"></i>
                  </button>
                  <button
                    @click="openEditModal(absence)"
                    class="action-button edit-button"
                    title="Bearbeiten"
                  >
                    <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    @click="openDeleteModal(absence.id)"
                    class="action-button delete-button"
                    title="Löschen"
                  >
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
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="pagination-button"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <span>Seite {{ currentPage }}</span>
          <button
            @click="nextPage"
            :disabled="!hasMore"
            class="pagination-button"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>

    <div v-if="showDeleteModal" class="modal">
      <div class="modal-content">
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

    <div v-if="showCreateModal || showEditModal" class="modal">
      <div class="modal-content">
        <h3>{{ showEditModal ? 'Abwesenheit bearbeiten' : 'Neue Abwesenheit erstellen' }}</h3>

        <div class="form-group">
          <label>Klasse:</label>
          <div v-if="showEditModal" class="readonly-info">
            {{ getClassName(selectedKlasse) }}
          </div>
          <select 
            v-else 
            v-model="selectedKlasse"
            required
          >
            <option value="">Bitte Klasse wählen</option>
            <option
              v-for="klasse in klassen"
              :key="klasse.KID"
              :value="klasse.KID"
            >
              {{ klasse.Name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Schüler:</label>
          <div v-if="showEditModal" class="readonly-info">
            {{ getStudentName(formData.sid) }}
          </div>
          <select
            v-else
            v-model="formData.sid"
            :disabled="!selectedKlasse"
            required
          >
            <option value="">Bitte Schüler wählen</option>
            <option
              v-for="student in filteredStudents"
              :key="student.sid"
              :value="student.sid"
            >
              {{ student.name?.Vorname }} {{ student.name?.Nachname }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Datum:</label>
          <input type="date" v-model="formData.date" required>
        </div>

        <div class="form-group">
          <label>Von:</label>
          <input type="time" v-model="formData.startTime" required>
        </div>

        <div class="form-group">
          <label>Bis:</label>
          <input type="time" v-model="formData.endTime" required>
        </div>

        <div class="form-group">
          <label>Typ:</label>
          <select v-model="formData.type" required>
            <option value="">Bitte wählen</option>
            <option v-for="type in absenceTypes" :key="type" :value="type">{{ type }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Grund:</label>
          <input type="text" v-model="formData.Grund">
        </div>

        <div class="form-group">
          <label>Entschuldigt:</label>
          <select v-model="formData.entschuldigt">
            <option :value="true">Ja</option>
            <option :value="false">Nein</option>
          </select>
        </div>

        <div class="modal-actions">
          <button @click="saveAbsence" class="action-button">
            <i class="fas fa-save"></i> {{ showEditModal ? 'Speichern' : 'Erstellen' }}
          </button>
          <button @click="closeAbsenceModal" class="action-button">
            <i class="fas fa-times"></i> Abbrechen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

interface FullAbsence extends Omit<Absence, 'id'> {
  id: string;
}

// State
const absences = ref<FullAbsence[]>([]);
const students = ref<Record<string, Student>>({});
const allStudents = ref<Student[]>([]);
const klassen = ref<Klasse[]>([]);
const selectedKlasse = ref<string>('');
const loading = ref(true);
const error = ref<string>('');
const canEdit = ref(true);
const currentPage = ref(1);
const pageSize = 10;
const hasMore = ref(true);
const showDeleteModal = ref(false);
const deleteId = ref<string>('');
const showCreateModal = ref(false);
const showEditModal = ref(false);
const editingAbsenceId = ref<string>('');
const formData = ref<Partial<Absence>>({
  sid: '',
  date: '',
  startTime: '',
  endTime: '',
  type: '',
  Grund: '',
  entschuldigt: false
});
const filterKlasse = ref<string>('');
const filterEntschuldigt = ref<string>('');

const absenceTypes = [
  'Absenz für Exkursion, schulveranstaltung',
  'Arztbesuch',
  'Familiäre Gründe',
  'Krankheit',
  'Naturkatastrophen, Katastropheneinsatz',
  'verschlafen',
  'Verspätung'
];

// Computed
const filteredStudents = computed(() => {
  if (!selectedKlasse.value) return [];
  return allStudents.value.filter(s => s.KID === selectedKlasse.value);
});

// Watcher
watch(selectedKlasse, async (newKID) => {
  if (newKID) {
    try {
      const klasseStudents = await getSchuelerByKlasse(newKID);
      allStudents.value = [
        ...allStudents.value.filter(s => s.KID !== newKID),
        ...klasseStudents
      ];
    } catch (err) {
      handleError(err, "Fehler beim Laden der Schüler");
    }
  }
  formData.value.sid = '';
});

watch([filterKlasse, filterEntschuldigt], async () => {
  currentPage.value = 1;
  await loadAbsences();
});

// Initial fetch
onMounted(async () => {
  try {
    klassen.value = await getAllKlassen();
    await loadAbsences();
  } catch (err) {
    handleError(err, "Fehler beim Laden der Daten");
  } finally {
    loading.value = false;
  }
});

const loadAbsences = async () => {
  try {
    loading.value = true;
    const result = await getAbsences(
      undefined, 
      currentPage.value, 
      pageSize,
      {
        klasse: filterKlasse.value,
        entschuldigt: filterEntschuldigt.value
      }
    );
    absences.value = result.absences as FullAbsence[];
    hasMore.value = result.hasMore;
    await loadStudentNames(absences.value);
  } catch (err) {
    handleError(err, "Fehler beim Laden der Abwesenheiten");
  } finally {
    loading.value = false;
  }
};

const loadStudentNames = async (absencesToLoad: FullAbsence[]) => {
  try {
    const uniqueStudentIds = [...new Set(absencesToLoad.map(absence => absence.sid))];
    for (const sid of uniqueStudentIds) {
      if (!students.value[sid]) {
        const student = await getSchuelerBySid(sid);
        if (student) {
          students.value[sid] = {
            ...student,
            Katalognummer: Number(student?.Katalognummer) || 0,
            name: {
              Vorname: student?.Name?.Vorname || '',
              Nachname: student?.Name?.Nachname || ''
            }
          };
        }
      }
    }
  } catch (err) {
    handleError(err, "Fehler beim Laden der Schülernamen");
  }
};

// Pagination
const nextPage = () => {
  currentPage.value++;
  loadAbsences();
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    loadAbsences();
  }
};

// Delete handling
const openDeleteModal = (id: string) => {
  deleteId.value = id;
  showDeleteModal.value = true;
};

const confirmDelete = async () => {
  if (deleteId.value) {
    try {
      await deleteAbsence(deleteId.value);
      absences.value = absences.value.filter(a => a.id !== deleteId.value);
    } catch (err) {
      handleError(err, "Löschen fehlgeschlagen");
    }
  }
  cancelDelete();
};

const cancelDelete = () => {
  deleteId.value = '';
  showDeleteModal.value = false;
};

// Create/Edit handling
const openEditModal = async (absence: FullAbsence) => {
  try {
    const student = allStudents.value.find(s => s.sid === absence.sid);
    selectedKlasse.value = student?.KID || '';
    
    editingAbsenceId.value = absence.id;
    formData.value = {
      sid: absence.sid,
      date: formatDateForInput(absence.date),
      startTime: formatTimeForInput(absence.Start),
      endTime: formatTimeForInput(absence.Ende),
      type: absence.type,
      Grund: absence.Grund,
      entschuldigt: absence.entschuldigt
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
  try {
    error.value = '';
    if (!validateForm()) return;

    const startDate = new Date(`${formData.value.date}T${formData.value.startTime}Z`);
    const endDate = new Date(`${formData.value.date}T${formData.value.endTime}Z`);
    
    if (startDate >= endDate) {
      error.value = "Endzeit muss nach Startzeit liegen!";
      return;
    }

    const absenceData = {
      sid: formData.value.sid!,
      Start: startDate.getUTCHours() * 60 + startDate.getUTCMinutes(),
      Ende: endDate.getUTCHours() * 60 + endDate.getUTCMinutes(),
      date: Timestamp.fromDate(startDate),
      type: formData.value.type!,
      Grund: formData.value.Grund || '',
      entschuldigt: formData.value.entschuldigt ?? false,
      createdAt: editingAbsenceId.value 
        ? (absences.value.find(a => a.id === editingAbsenceId.value)?.createdAt || Timestamp.now())
        : Timestamp.now()
    };

    if (editingAbsenceId.value) {
      await updateAbsence(editingAbsenceId.value, absenceData);
    } else {
      await createAbsenceApi(absenceData);
    }

    closeAbsenceModal();
    await loadAbsences();
  } catch (err) {
    handleError(err, "Speichern fehlgeschlagen");
  }
};

const validateForm = () => {
  const requiredFields = ['sid', 'date', 'startTime', 'endTime', 'type'];
  const missingFields = requiredFields.filter(field => !formData.value[field as keyof typeof formData.value]);
  
  if (missingFields.length > 0) {
    error.value = `Pflichtfelder fehlen: ${missingFields.join(', ')}`;
    return false;
  }
  
  if (!selectedKlasse.value && !showEditModal.value) {
    error.value = 'Bitte wählen Sie eine Klasse aus';
    return false;
  }
  
  return true;
};

const resetForm = () => {
  selectedKlasse.value = '';
  formData.value = {
    sid: '',
    date: '',
    startTime: '',
    endTime: '',
    type: '',
    Grund: '',
    entschuldigt: false
  };
};

// Helper functions
const getStudentName = (sid: string) => {
  const student = students.value[sid] || allStudents.value.find(s => s.sid === sid);
  return student 
    ? `${student.name?.Vorname || ''} ${student.name?.Nachname || ''}`
    : 'Schüler wird geladen...';
};

const getClassName = (kid: string) => {
  return klassen.value.find(k => k.KID === kid)?.Name || 'Unbekannte Klasse';
};

const formatDate = (date: Timestamp) => date?.toDate().toLocaleDateString('de-DE') || '';
const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};

const formatDateForInput = (timestamp: Timestamp) => {
  const date = timestamp.toDate();
  return date.toISOString().split('T')[0];
};

const formatTimeForInput = (minutes: number) => {
  const hours = String(Math.floor(minutes / 60)).padStart(2, '0');
  const mins = String(minutes % 60).padStart(2, '0');
  return `${hours}:${mins}`;
};

const handleError = (err: unknown, message: string) => {
  console.error(message, err);
  error.value = `${message}: ${err instanceof Error ? err.message : 'Unbekannter Fehler'}`;
};
</script>

<style scoped>
/* Unveränderter Style-Teil aus der ursprünglichen Datei */
@import '@/css/Interface/Schueler.css';

.error-message {
  color: #dc3545;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dc3545;
  border-radius: 4px;
  background-color: #f8d7da;
}

.absences-container {
  position: relative;
}

.filters {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  align-items: center;
}

.filter-group {
  display: flex;
  align-items: center;
}

.filter-group label {
  margin-right: 10px;
}

.filter-group select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-button {
  margin-top: 20px;
  background-color: #28a745;
  color: white;
}

.add-button:hover {
  background-color: #218838;
}

.student-table {
  margin-bottom: 10px;
  width: 100%;
  border-collapse: collapse;
}

.student-table th,
.student-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.action-buttons {
  display: flex;
  gap: 5px;
}

.action-button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button:hover {
  opacity: 0.9;
}

.edit-button {
  background-color: #007bff;
  color: white;
}

.delete-button {
  background-color: #dc3545;
  color: white;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 25px;
  border-radius: 8px;
  min-width: 400px;
  max-width: 90%;
}

.form-group {
  margin: 15px 0;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input[type="date"],
.form-group input[type="time"],
.form-group input[type="text"],
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
}

.readonly-info {
  padding: 10px;
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin: 5px 0;
}

.modal-actions {
  margin-top: 25px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.pagination {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.pagination-button {
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.pagination-button:hover:not(:disabled) {
  background-color: #f8f9fa;
}

.pagination-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>