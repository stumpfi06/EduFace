<template>
  <div class="edit-teacher">
    <h2>Lehrer bearbeiten</h2>
    <form @submit.prevent="updateLehrer">
      <div>
        <label for="vorname">Vorname:</label>
        <input type="text" v-model="editedTeacher.Name.Vorname" id="vorname" required />
      </div>
      <div>
        <label for="nachname">Nachname:</label>
        <input type="text" v-model="editedTeacher.Name.Nachname" id="nachname" required />
      </div>
      <div>
        <label for="kuerzel">Kürzel:</label>
        <input type="text" v-model="editedTeacher.Kürzel" id="kuerzel" required />
      </div>
      <div>
        <label for="faecher">Fächer:</label>
        <input
          type="text"
          v-model="editedTeacher.Fächer"
          id="faecher"
          placeholder="Comma separated"
          required
        />
      </div>
      <button type="submit">Speichern</button>
      <button type="button" @click="$emit('close')">Abbrechen</button>
    </form>
  </div>
</template>

<script>
import { editLehrer } from '@/firebase/queries'; // Adjust the import according to your project structure
import { ref, watch } from 'vue';

export default {
  props: {
    teacher: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const editedTeacher = ref({ ...props.teacher });

    watch(
      () => props.teacher,
      (newTeacher) => {
        editedTeacher.value = { ...newTeacher };
      },
      { deep: true }
    );

    const updateLehrer = async () => {
      try {
        let faecherString = editedTeacher.value.Fächer;
        let faecherArray = [];
        if (typeof faecherString === 'string' && faecherString.trim() !== '') {
          faecherArray = faecherString.split(',').map((fach) => fach.trim());
        } else if (Array.isArray(faecherString)) {
          faecherArray = faecherString.map(fach => fach.trim());
        }
        console.log(editedTeacher.value);
        await editLehrer(editedTeacher.value.lid, { ...editedTeacher.value, Fächer: faecherArray });
        emit('close');
        emit('teacher-updated'); // Emit the update event
      } catch (error) {
        console.error('Error updating teacher: ', error);
      }
    };

    return {
      editedTeacher,
      updateLehrer,
    };
  },
};
</script>

<style src="@/css/Interface/EditLehrer.css" scoped></style>