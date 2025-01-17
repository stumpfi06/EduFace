<template>
    <div class="edit-student">
        <h2>Edit Student</h2>
        <form @submit.prevent="updateStudent">
            <div>
                <label for="vorname">Vorname:</label>
                <input type="text" v-model="student.Name.Vorname" id="vorname" required />
            </div>
            <div>
                <label for="nachname">Nachname:</label>
                <input type="text" v-model="student.Name.Nachname" id="nachname" required />
            </div>
            <div>
                <label for="klasse">Klasse:</label>
                <input type="text" v-model="className" id="klasse" required />
            </div>
            <div>
                <label for="katalognummer">Katalognummer:</label>
                <input type="number" v-model.number="student.Katalognummer" id="katalognummer" required />
            </div>
            <button type="submit">Save</button>
            <button type="button" @click="$emit('close')">Cancel</button>
        </form>
    </div>
</template>

<script>
import { editStudent, getKIDFromClassName, getKlasseFromKID } from '@/firebase/queries'; // Adjust the import according to your project structure

export default {
    props: {
        student: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            className: ''
        };
    },
    async mounted() {
        const klasseData = await getKlasseFromKID(this.student.KID);
        if (klasseData) {
            this.className = klasseData.Name;
        }
    },
    methods: {
        async updateStudent() {
            try {
                const KID = await getKIDFromClassName(this.className);
                if (KID) {
                    this.student.KID = Number(KID); // Ensure KID is a number
                    this.student.sid = Number(this.student.sid); // Ensure sid is a number
                    await editStudent(this.student.sid, this.student);
                    this.$emit('close');
                } else {
                    console.error("Class not found");
                }
            } catch (error) {
                console.error("Error updating student: ", error);
            }
        }
    }
};
</script>

<style src="@/css/Interface/EditSchueler.css" scoped></style>