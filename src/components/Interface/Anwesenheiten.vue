<!-- src/views/Absences.vue -->
<template>
<div class="interface-body">
  <div class="absences-container">
    <h1>Abwesenheiten</h1>
    
    <div v-if="loading" class="loading">Loading...</div>
    
    <div v-else>
      <table class="absences-table">
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
            <td>
              <span v-if="!editing[absence.id]">{{ absence.type }}</span>
              <select v-else v-model="editedAbsences[absence.id].type">
                <option value="Krankheit">Krankheit</option>
                <option value="Urlaub">Urlaub</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </td>
            <td>
              <span v-if="!editing[absence.id]">{{ absence.Grund }}</span>
              <input v-else v-model="editedAbsences[absence.id].Grund" type="text">
            </td>
            <td>
              <span v-if="!editing[absence.id]">
                {{ absence.entschuldigt ? 'Ja' : 'Nein' }}
              </span>
              <select v-else v-model="editedAbsences[absence.id].entschuldigt">
                <option :value="true">Ja</option>
                <option :value="false">Nein</option>
              </select>
            </td>
            <td v-if="canEdit">
              <button v-if="!editing[absence.id]" @click="startEditing(absence)">
                Bearbeiten
              </button>
              <div v-else>
                <button @click="saveAbsence(absence.id)">Speichern</button>
                <button @click="cancelEditing(absence.id)">Abbrechen</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getAbsences, getSchuelerBySid, getCurrentUser, updateAbsence, Absence, Student, User } from '../../firebase/queries';
import {getUserRole} from '../../firebase/users';
import { Timestamp } from 'firebase/firestore';

export default defineComponent({
  name: 'AbsencesView',
  setup() {
    const absences = ref<Absence[]>([]);
    const students = ref<Record<string, Student>>({});
    const user = ref<User | null>(null);
    const loading = ref(true);
    const editing = ref<Record<string, boolean>>({});
    const editedAbsences = ref<Record<string, Partial<Absence>>>({});
    const canEdit = ref(false);

    const fetchData = async () => {
      try {
        user.value = await getCurrentUser();
        absences.value = await getAbsences(); // Always load all absences for admin
        console.log('User:', user.value);
        if (user.value?.role === 'admin' || user.value?.role === 'Lehrer') {
          canEdit.value = true;
        } else if (user.value?.role === 'Schueler') {
          canEdit.value = true;
          // Filter to only show student's own absences
          absences.value = absences.value.filter(a => a.sid === user.value?.sid);
        }

        // Fetch student names for all absences
        const uniqueStudentIds = [...new Set(absences.value.map(a => a.sid))];
        for (const sid of uniqueStudentIds) {
          const student = await getSchuelerBySid(sid);
          if (student) {
            students.value[sid] = student;
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    };

    const getStudentName = (sid: string): string => {
      const student = students.value[sid];
      console.log(student);
      return student ? `${student.Name.Vorname} ${student.Name.Nachname}` : 'Unknown';
    };

    const formatDate = (date: Timestamp): string => {
      return date.toDate().toLocaleDateString('de-DE');
    };

    const formatTime = (minutes: number): string => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    };

    const startEditing = (absence: Absence) => {
      editing.value[absence.id!] = true;
      editedAbsences.value[absence.id!] = { ...absence };
    };

    const cancelEditing = (absenceId: string) => {
      editing.value[absenceId] = false;
      delete editedAbsences.value[absenceId];
    };

    const saveAbsence = async (absenceId: string) => {
      try {
        const updates = editedAbsences.value[absenceId];
        await updateAbsence(absenceId, updates);
        
        // Update local state
        const index = absences.value.findIndex(a => a.id === absenceId);
        if (index !== -1) {
          absences.value[index] = { ...absences.value[index], ...updates };
        }
        
        editing.value[absenceId] = false;
        delete editedAbsences.value[absenceId];
      } catch (error) {
        console.error('Error updating absence:', error);
      }
    };

    onMounted(fetchData);

    return {
      absences,
      loading,
      editing,
      editedAbsences,
      canEdit,
      getStudentName,
      formatDate,
      formatTime,
      startEditing,
      cancelEditing,
      saveAbsence,
      user
    };
  }
});
</script>

<style scoped>
@import '@/css/Interface/Anwesenheiten.css';
</style>