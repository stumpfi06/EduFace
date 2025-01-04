<template>
    <div class="edit-class">
        <h2>Klasse bearbeiten</h2>
        <form @submit.prevent="updateKlasse">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="klasse.Name" id="name" required />
            </div>
            <div>
                <label for="klassenvorstand">Klassenvorstand:</label>
                <input type="text" v-model="klassenvorstandKuerzel" id="klassenvorstand" required />
            </div>
            <button type="submit">Speichern</button>
            <button type="button" @click="$emit('close')">Abbrechen</button>
        </form>
    </div>
</template>

<script>
import { editKlasse, getLehrerByKuerzel, getLehrerByLid } from '@/firebase/queries'; // Adjust the import according to your project structure

export default {
    props: {
        klasse: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            klassenvorstandKuerzel: ''
        };
    },
    async mounted() {
        console.log("Mounted: Fetching teacher by Lid", this.klasse.KV);
        const lehrer = await getLehrerByLid(this.klasse.KV);
        this.klassenvorstandKuerzel = lehrer ? lehrer.Kürzel : '';
        console.log("Mounted: Teacher fetched", lehrer);
    },
    methods: {
        async updateKlasse() {
            try {
                console.log("Updating class with data", this.klasse);
                const lehrer = await getLehrerByKuerzel(this.klassenvorstandKuerzel);
                console.log("Fetched teacher by Kürzel", lehrer);
                if (lehrer) {
                    this.klasse.KV = lehrer.lid;
                    await editKlasse(this.klasse.KID, this.klasse);
                    this.$emit('close');
                    console.log("Class updated successfully");
                    window.location.reload(); // Refresh the page
                } else {
                    console.error("No teacher found with the given Kürzel");
                }
            } catch (error) {
                console.error("Error updating class: ", error);
            }
        }
    }
};
</script>

<style src="@/css/interface/EditKlasse.css" scoped>

</style>
