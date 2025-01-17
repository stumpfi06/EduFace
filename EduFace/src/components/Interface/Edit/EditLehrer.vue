<template>
    <div class="edit-teacher">
        <h2>Lehrer bearbeiten</h2>
        <form @submit.prevent="updateLehrer">
            <div>
                <label for="vorname">Vorname:</label>
                <input type="text" v-model="teacher.Name.Vorname" id="vorname" required />
            </div>
            <div>
                <label for="nachname">Nachname:</label>
                <input type="text" v-model="teacher.Name.Nachname" id="nachname" required />
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

<style src="@/css/Interface/EditLehrer.css" scoped></style>