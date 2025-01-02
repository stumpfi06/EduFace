<template>
    <div class="create-class">
        <h2>Neue Klasse erstellen</h2>
        <form @submit.prevent="createKlasse">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="newKlasse.Name" id="name" required />
            </div>
            <div>
                <label for="klassenvorstand">Klassenvorstand:</label>
                <input type="text" v-model="klassenvorstandKuerzel" id="klassenvorstand" required />
            </div>
            <button type="submit">Erstellen</button>
            <button type="button" @click="$emit('close')">Abbrechen</button>
        </form>
    </div>
</template>

<script>
import { createKlasse, getLehrerByKuerzel } from '@/firebase/queries'; // Adjust the import according to your project structure

export default {
    data() {
        return {
            newKlasse: {
                Name: '',
                KV: '',
                SchuelerAnzahl: 0
            },
            klassenvorstandKuerzel: ''
        };
    },
    methods: {
        async createKlasse() {
            try {
                const lehrer = await getLehrerByKuerzel(this.klassenvorstandKuerzel);
                if (lehrer) {
                    this.newKlasse.KV = lehrer.lid;
                    await createKlasse(this.newKlasse);
                    this.$emit('close');
                    window.location.reload(); // Refresh the page

                } else {
                    console.error("No teacher found with the given Kürzel");
                }
            } catch (error) {
                console.error("Error creating class: ", error);
            }
        }
    }
};
</script>

<style scoped>
.create-class {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.create-class h2 {
    margin-top: 0;
}

.create-class form div {
    margin-bottom: 10px;
}

.create-class label {
    display: block;
    margin-bottom: 5px;
}

.create-class input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.create-class button {
    margin-right: 10px;
    padding: 10px 15px;
    cursor: pointer;
}
</style>
