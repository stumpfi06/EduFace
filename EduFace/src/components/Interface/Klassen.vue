<template>
    <div class="interface-body">
        <h1 class="klassen-h1">Klassen</h1>
        <table class="class-table" v-if="!state.isEditing && !state.isCreating">
            <thead>
                <tr>
                    <th @click="sortTable('Name')">Name</th>
                    <th @click="sortTable('SchuelerAnzahl')">Anzahl der Schüler</th>
                    <th @click="sortTable('KV')">Klassenvorstand</th>
                    <th>Aktionen</th> <!-- Added Actions column -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="klasse in state.klassen" :key="klasse.KID">
                    <td>{{ klasse.Name }}</td>
                    <td>{{ klasse.SchuelerAnzahl }}</td>
                    <td>{{ getKuerzel(klasse.KV) }}</td>
                    <td>
                        <button @click="editKlasse(klasse)" class="action-button">
                            <i class="fas fa-edit"></i> <!-- Edit icon -->
                        </button>
                        <button v-if="isAdmin" @click="handleDeleteKlasse(klasse.KID)" class="action-button">
                            <i class="fas fa-trash"></i> <!-- Delete icon -->
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="pagination" v-if="!state.isEditing && !state.isCreating">
            <button @click="prevPage" :disabled="state.currentPage === 1">Previous</button>
            <span>Page {{ state.currentPage }}</span>
            <button @click="nextPage" :disabled="!state.hasMore">Next</button>
        </div>
        <button @click="createNewKlasse" class="create-button">Neue Klasse erstellen</button>

        <EditKlasse v-if="state.isEditing" :klasse="state.currentKlasse" @close="state.isEditing = false" />
        <CreateKlasse v-if="state.isCreating" @close="state.isCreating = false" />
    </div>
</template>

<script>
import { getKlassen, getLehrer, deleteKlasse as deleteKlasseFromDB } from '@/firebase/queries'; // Adjust the import according to your project structure
import { reactive, onMounted, computed } from 'vue';
import EditKlasse from '@/components/Interface/Edit/EditKlasse.vue'; // Adjust the import according to your project structure
import CreateKlasse from '@/components/Interface/Create/CreateKlasse.vue'; // Adjust the import according to your project structure

export default {
    components: {
        EditKlasse,
        CreateKlasse
    },
    setup() {
        const state = reactive({
            klassen: [],
            lehrer: {},
            currentPage: 1,
            pageSize: 8, // Reduced the number of classes per page
            isEditing: false,
            isCreating: false,
            currentKlasse: null,
            sortKey: 'Name',
            sortOrder: 'asc',
            lastVisible: null,
            firstVisible: null,
            hasMore: true,
            currentUserRole: 'user' // Replace with your actual logic to get the current user role
        });

        const isAdmin = computed(() => {
            // Replace with your actual logic to check if the current user is an admin
            return state.currentUserRole === 'admin';
        });

        const loadKlassen = async (reset = false, direction = 'next') => {
            if (reset) {
                state.lastVisible = null;
                state.firstVisible = null;
                state.currentPage = 1;
                state.klassen = [];
            }
            const { klassen, lastDoc } = await getKlassen(state.sortKey, state.sortOrder, state.pageSize, direction === 'next' ? state.lastVisible : state.firstVisible);
            const lehrerData = await getLehrer();
            lehrerData.lehrer.forEach(teacher => {
                state.lehrer[teacher.Lid] = teacher.Kürzel;
            });
            if (direction === 'next') {
                state.klassen = klassen;
                state.lastVisible = lastDoc;
            } else {
                state.klassen = klassen;
                state.firstVisible = lastDoc;
            }
            state.hasMore = klassen.length === state.pageSize;
        };

        const getKuerzel = (Lid) => {
            return state.lehrer[Lid] || 'Unknown';
        };

        onMounted(async () => {
            await loadKlassen();
        });

        const nextPage = async () => {
            if (state.hasMore) {
                state.currentPage++;
                await loadKlassen(false, 'next');
            }
        };

        const prevPage = async () => {
            if (state.currentPage > 1) {
                state.currentPage--;
                await loadKlassen(false, 'prev');
            }
        };

        const editKlasse = (klasse) => {
            state.currentKlasse = klasse;
            state.isEditing = true;
            console.log("Editing class: ", klasse);
            console.log("Current state: ", state.isEditing);
        };

        const createNewKlasse = () => {
            state.isCreating = true;
        };

        const handleDeleteKlasse = async (KID) => {
            try {
                await deleteKlasseFromDB(KID);
                state.klassen = state.klassen.filter(klasse => klasse.KID !== KID);
                console.log(`Deleted class with ID: ${KID}`);
            } catch (error) {
                console.error("Error deleting document: ", error);
            }
        };

        const sortTable = async (key) => {
            if (state.sortKey === key) {
                state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
            } else {
                state.sortKey = key;
                state.sortOrder = 'asc';
            }
            await loadKlassen(true);
        };

        return {
            state,
            getKuerzel,
            nextPage,
            prevPage,
            editKlasse,
            createNewKlasse,
            handleDeleteKlasse,
            sortTable,
            isAdmin
        };
    }
};
</script>

<style scoped>
@import '@/css/Interface/Klassen.css';

</style>