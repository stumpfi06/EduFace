<template>
    <div class="edit-teacher">
        <h2>Lehrer bearbeiten</h2>
        <form @submit.prevent="updateLehrer">
            <div>
                <label for="nachname">Nachname:</label>
                <input type="text" v-model="teacher.Name.Nachname" id="nachname" required />
            </div>
            <div>
                <label for="vorname">Vorname:</label>
                <input type="text" v-model="teacher.Name.Vorname" id="vorname" required />
            </div>
            <div>
                <label for="kuerzel">Kürzel:</label>
                <input type="text" v-model="teacher.Kürzel" id="kuerzel" required />
            </div>
            <div>
                <label for="faecher">Fächer:</label>
                <input type="text" v-model="teacher.Fächer" id="faecher" placeholder="Comma separated" required />
            </div>
            <button type="submit" @click="$emit('close')">Speichern</button>
            <button type="button" @click="$emit('close')">Abbrechen</button>
        </form>
    </div>
</template>

<script>
import { editLehrer } from '@/firebase/queries'; // Adjust the import according to your project structure

export default {
    props: {
        teacher: {
            type: Object,
            required: true
        }
    },
    methods: {
        async updateLehrer() {
            try {
                this.teacher.Fächer = this.teacher.Fächer.split(',').map(fach => fach.trim());
                await editLehrer(this.teacher.Lid, this.teacher);
                this.$emit('close');
            } catch (error) {
                console.error("Error updating teacher: ", error);
            }
        }
    }
};
</script>

<style scoped>
.edit-teacher {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.edit-teacher h2 {
    margin-top: 0;
}

.edit-teacher form div {
    margin-bottom: 10px;
}

.edit-teacher label {
    display: block;
    margin-bottom: 5px;
}

.edit-teacher input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.edit-teacher button {
    margin-right: 10px;
    padding: 10px 15px;
    cursor: pointer;
}
</style>
