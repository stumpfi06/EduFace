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
            <button type="submit">Erstellen</button>
            <button type="button" @click="$emit('close')">Abbrechen</button>
        </form>
    </div>
</template>

<script>
import { createStudent, getKIDFromClassName } from '@/firebase/queries'; // Adjust the import according to your project structure

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
                sid: null // Ensure sid is a number and is a field that will be entered in a different function
            },
            className: ''
        };
    },
    methods: {
        async createStudent() {
            try {
                const KID = await getKIDFromClassName(this.className);
                if (KID) {
                    this.newStudent.KID = Number(KID); // Ensure KID is a number
                    await createStudent(this.newStudent);
                    this.$emit('close');
                    window.location.reload(); // Refresh the page
                } else {
                    console.error("Class not found");
                }
            } catch (error) {
                console.error("Error creating student: ", error);
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
</style>