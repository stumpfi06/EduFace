<template>
  <div class="create-teacher">
    <h2>Neuen Lehrer erstellen</h2>
    <form @submit.prevent="createLehrer">
      <div>
        <label for="nachname">Nachname:</label>
        <input type="text" v-model="newLehrer.Name.Nachname" id="nachname" required />
      </div>
      <div>
        <label for="vorname">Vorname:</label>
        <input type="text" v-model="newLehrer.Name.Vorname" id="vorname" required />
      </div>
      <div>
        <label for="kuerzel">Kürzel:</label>
        <input type="text" v-model="newLehrer.Kürzel" id="kuerzel" required />
      </div>
      <div>
        <label for="faecher">Fächer:</label>
        <input
          type="text"
          v-model="newLehrer.Fächer"
          id="faecher"
          placeholder="Comma separated"
          required
        />
      </div>
      <button type="submit">Erstellen</button>
      <button type="button" @click="$emit('close')">Abbrechen</button>
    </form>
  </div>
</template>

<script>
import { createLehrer as createLehrerInDatabase } from '@/firebase/queries'; // Umbenannt, um Verwechslungen zu vermeiden
import { reactive } from 'vue';

export default {
  setup(props, { emit }) {
    const newLehrer = reactive({
      Name: {
        Nachname: '',
        Vorname: '',
      },
      Kürzel: '',
      Fächer: '',
    });

    const createLehrer = async () => {
      try {
        let faecherArray = [];
        if (typeof newLehrer.Fächer === 'string' && newLehrer.Fächer.trim() !== '') {
          faecherArray = newLehrer.Fächer.split(',').map((fach) => fach.trim());
        }
        // Rufe die Funktion zum Speichern in der Datenbank auf
        await createLehrerInDatabase({ ...newLehrer, Fächer: faecherArray });
        emit('close');
        emit('teacher-created'); // Emit the created event
      } catch (error) {
        console.error('Error creating teacher: ', error);
      }
    };

    return {
      newLehrer,
      createLehrer,
    };
  },
};
</script>

<style scoped src="@/css/interface/CreateLehrer.css"></style>