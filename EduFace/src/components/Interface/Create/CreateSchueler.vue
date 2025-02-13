<template>
  <div class="create-student">
    <h2>Neuen Schüler erstellen</h2>
    <form @submit.prevent="createStudent">
      <div>
        <label for="vorname">Vorname:</label>
        <input type="text" v-model="newStudent.Name.Vorname" id="vorname" required />
      </div>
      <div>
        <label for="nachname">Nachname:</label>
        <input type="text" v-model="newStudent.Name.Nachname" id="nachname" required />
      </div>
      <div>
        <label for="klasse">Klasse:</label>
        <input type="text" v-model="className" id="klasse" required />
      </div>
      <div>
        <label for="katalognummer">Katalognummer:</label>
        <input type="number" v-model.number="newStudent.Katalognummer" id="katalognummer" required />
      </div>
      <div>
        <button type="button" @click="addFace">Gesicht Hinzufügen</button>
      </div>
      <div>
        <button type="submit">Erstellen</button>
        <button type="button" @click="$emit('close')">Abbrechen</button>
      </div>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { createStudent, getKIDFromClassName } from '@/firebase/queries'; // Adjust the import according to your project structure
import axios from 'axios';

export default {
  data() {
    return {
      newStudent: {
        Name: {
          Vorname: '',
          Nachname: ''
        },
        KID: null,
        Katalognummer: null,
        sid: null // This will be updated after adding the face UID
      },
      className: '',
      message: '' // To show messages to the user
    };
  },
  methods: {
    // Fetch the KID and create the student in Firebase
    async createStudent() {
      console.log('Starting createStudent process...');
      console.log('Current student data:', this.newStudent);
      console.log('Class name:', this.className);

      try {
        const KID = await getKIDFromClassName(this.className);
        console.log('Fetched KID for class:', KID);

        if (KID) {
          this.newStudent.KID = Number(KID); // Ensure KID is a number
          console.log('Updated student data with KID:', this.newStudent);

          await createStudent(this.newStudent);
          console.log('Student successfully created in Firebase.');
          this.$emit('close');
          window.location.reload(); // Refresh the page
        } else {
          console.error('Class not found');
          this.message = 'Klasse nicht gefunden.';
        }
      } catch (error) {
        console.error('Error creating student:', error);
        this.message = 'Fehler beim Erstellen des Schülers.';
      }
    },

    // Call the face recognition API and use the UID to set the student's sid
    async addFace() {
      console.log('Starting face recognition process...');
      this.message = 'Versuche Gesichtserkennung...';

      try {
        const response = await axios.get('http://192.168.10.101:5000/schueler-hinzufuegen');
        console.log('Face recognition API response:', response.data);

        if (response.data && response.data.uid) {
          const uid = response.data.uid;
          this.newStudent.sid = uid;
          this.message = `Gesicht erfolgreich hinzugefügt. UID: ${uid}`;
          console.log('Face UID added to student data:', uid);
        } else {
          throw new Error('Kein UID in der API-Antwort gefunden.');
        }
      } catch (error) {
        console.error('Error during face recognition:', error);
        this.message = 'Fehler beim Hinzufügen des Gesichts.';
      }
    }
  }
};
</script>

<style scoped>
.create-student {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.create-student h2 {
  margin-top: 0;
}

.create-student form div {
  margin-bottom: 10px;
}

.create-student label {
  display: block;
  margin-bottom: 5px;
}

.create-student input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.create-student button {
  margin-right: 10px;
  padding: 10px 15px;
  cursor: pointer;
}

p {
  margin-top: 10px;
  color: #333;
  font-size: 14px;
}
</style>
