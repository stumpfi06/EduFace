<template>
    <div class="interface-body">
        <h1 class="schueler-h1">Schüler</h1>
        <table class="student-table" v-if="!state.isEditing && !state.isCreating">
            <thead>
                <tr>
                    <th @click="sortTable('Name.Nachname')">Nachname</th>
                    <th @click="sortTable('Name.Vorname')">Vorname</th>
                    <th @click="sortTable('KID')">Klasse</th>
                    <th @click="sortTable('Katalognummer')">Katalognummer</th>
                    <th>Aktionen</th> <!-- Added Actions column -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in state.students" :key="student.sid">
                    <td>{{ student.Name.Nachname }}</td>
                    <td>{{ student.Name.Vorname }}</td>
                    <td>{{ getKlasseName(student.KID) }}</td>
                    <td>{{ student.Katalognummer }}</td>
                    <td>
                        <button @click="editStudent(student)" class="action-button">
                            <i class="fas fa-edit"></i> <!-- Edit icon -->
                        </button>
                        <button v-if="isAdmin" @click="handleDeleteStudent(student.sid)" class="action-button">
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
        <button @click="createNewStudent" class="create-button">Neuen Schüler erstellen</button>

        <EditSchueler v-if="state.isEditing" :student="state.currentStudent" @close="state.isEditing = false" />
        <CreateSchueler v-if="state.isCreating" @close="state.isCreating = false" />
    </div>
</template>

<script>
import { getSchueler, getKlasseFromKID, deleteStudent as deleteStudentFromDB } from '@/firebase/queries'; // Adjust the import according to your project structure
import { reactive, onMounted, computed } from 'vue';
import EditSchueler from '@/components/Interface/Edit/EditSchueler.vue'; // Adjust the import according to your project structure
import CreateSchueler from '@/components/Interface/Create/CreateSchueler.vue'; // Adjust the import according to your project structure

export default {
    components: {
        EditSchueler,
        CreateSchueler
    },
    setup() {
        const state = reactive({
            students: [],
            klasse: {},
            currentPage: 1,
            pageSize: 8, // Reduced the number of students per page
            isEditing: false,
            isCreating: false,
            currentStudent: null,
            sortKey: 'Name.Nachname',
            sortOrder: 'asc',
            lastVisible: null,
            firstVisible: null,
            hasMore: true,
            hasPrevious: false,
            previousPages: [],
            currentUserRole: 'user' // Replace with your actual logic to get the current user role
        });

        const isAdmin = computed(() => {
            // Replace with your actual logic to check if the current user is an admin
            return state.currentUserRole === 'admin';
        });

        const loadStudents = async (reset = false, direction = 'next') => {
            if (reset) {
                state.lastVisible = null;
                state.firstVisible = null;
                state.currentPage = 1;
                state.students = [];
                state.previousPages = [];
            }
            const { schueler, lastDoc, firstDoc } = await getSchueler(state.sortKey, state.sortOrder, state.pageSize, direction === 'next' ? state.lastVisible : state.firstVisible, direction);
            if (direction === 'next') {
                state.previousPages.push(state.firstVisible);
                state.students = schueler;
                state.lastVisible = lastDoc;
                state.firstVisible = firstDoc;
                state.hasPrevious = state.previousPages.length > 1;
            } else {
                state.students = schueler;
                state.lastVisible = lastDoc;
                state.firstVisible = state.previousPages.pop();
                state.hasPrevious = state.previousPages.length > 0;
            }
            state.hasMore = schueler.length === state.pageSize;
            for (let student of state.students) {
                const klasseData = await getKlasseFromKID(student.KID);
                state.klasse[student.KID] = klasseData;
            }
        };

        onMounted(async () => {
            await loadStudents();
        });

        const getKlasseName = (KID) => {
            return state.klasse[KID] ? state.klasse[KID].Name : 'Unknown'; // Adjust the property name as needed
        };

        const nextPage = async () => {
            if (state.hasMore) {
                state.currentPage++;
                await loadStudents(false, 'next');
            }
        };

        const prevPage = async () => {
            if (state.currentPage > 1) {
                state.currentPage--;
                await loadStudents(false, 'prev');
            }
        };

        const editStudent = (student) => {
            state.currentStudent = student;
            state.isEditing = true;
            console.log("Editing student: ", student);
            console.log("Current state: ", state.isEditing);
        };

        const createNewStudent = () => {
            state.isCreating = true;
        };

        const handleDeleteStudent = async (sid) => {
            try {
                await deleteStudentFromDB(sid);
                state.students = state.students.filter(student => student.sid !== sid);
                console.log(`Deleted student with ID: ${sid}`);
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
            await loadStudents(true);
        };

        return {
            state,
            getKlasseName,
            nextPage,
            prevPage,
            editStudent,
            createNewStudent,
            handleDeleteStudent,
            sortTable,
            isAdmin
        };
    }
};
</script>

<style scoped>
@import '@/css/Interface/Schueler.css';

</style>