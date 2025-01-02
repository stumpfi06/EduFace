<template>
    <div class="interface-body">
        <h1 class="lehrer-h1">Lehrer</h1>
        <table class="teacher-table" v-if="!state.isEditing && !state.isCreating">
            <thead>
                <tr>
                    <th @click="sortTable('Name.Nachname')">Nachname</th>
                    <th @click="sortTable('Name.Vorname')">Vorname</th>
                    <th @click="sortTable('Kürzel')">Kürzel</th>
                    <th @click="sortTable('Fächer')">Fächer</th>
                    <th>Aktionen</th> <!-- Added Actions column -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="teacher in state.teachers" :key="teacher.Lid">
                    <td>{{ teacher.Name.Nachname }}</td>
                    <td>{{ teacher.Name.Vorname }}</td>
                    <td>{{ teacher.Kürzel }}</td>
                    <td>{{ teacher.Fächer.join(', ') }}</td>
                    <td>
                        <button @click="editTeacher(teacher)" class="action-button">
                            <i class="fas fa-edit"></i> <!-- Edit icon -->
                        </button>
                        <button v-if="isAdmin" @click="handleDeleteTeacher(teacher.Lid)" class="action-button">
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
        <button @click="createNewTeacher" class="create-button">Neuen Lehrer erstellen</button>

        <EditLehrer v-if="state.isEditing" :teacher="state.currentTeacher" @close="state.isEditing = false" />
        <CreateLehrer v-if="state.isCreating" @close="state.isCreating = false" />
    </div>
</template>

<script>
import { getLehrer, deleteLehrer as deleteLehrerFromDB } from '@/firebase/queries'; // Adjust the import according to your project structure
import { reactive, onMounted, computed } from 'vue';
import EditLehrer from '@/components/Interface/Edit/EditLehrer.vue'; // Adjust the import according to your project structure
import CreateLehrer from '@/components/Interface/Create/CreateLehrer.vue'; // Adjust the import according to your project structure

export default {
    components: {
        EditLehrer,
        CreateLehrer
    },
    setup() {
        const state = reactive({
            teachers: [],
            currentPage: 1,
            pageSize: 8, // Reduced the number of teachers per page
            isEditing: false,
            isCreating: false,
            currentTeacher: null,
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

        const loadTeachers = async (reset = false, direction = 'next') => {
            if (reset) {
                state.lastVisible = null;
                state.firstVisible = null;
                state.currentPage = 1;
                state.teachers = [];
                state.previousPages = [];
            }
            const { lehrer, lastDoc, firstDoc } = await getLehrer(state.sortKey, state.sortOrder, state.pageSize, direction === 'next' ? state.lastVisible : state.previousPages[state.previousPages.length - 1]);
            if (direction === 'next') {
                state.previousPages.push(state.firstVisible);
                state.teachers = lehrer;
                state.lastVisible = lastDoc;
                state.firstVisible = firstDoc;
                state.hasPrevious = true;
            } else {
                state.teachers = lehrer;
                state.lastVisible = lastDoc;
                state.firstVisible = state.previousPages.pop();
                state.hasPrevious = state.previousPages.length > 0;
            }
            state.hasMore = lehrer.length === state.pageSize;
        };

        onMounted(async () => {
            await loadTeachers();
        });

        const nextPage = async () => {
            if (state.hasMore) {
                state.currentPage++;
                await loadTeachers(false, 'next');
            }
        };

        const prevPage = async () => {
            if (state.currentPage > 1) {
                state.currentPage--;
                await loadTeachers(false, 'prev');
            }
        };

        const editTeacher = (teacher) => {
            state.currentTeacher = teacher;
            state.isEditing = true;
            console.log("Editing teacher: ", teacher);
            console.log("Current state: ", state.isEditing);
        };

        const createNewTeacher = () => {
            state.isCreating = true;
        };

        const handleDeleteTeacher = async (Lid) => {
            try {
                await deleteLehrerFromDB(Lid);
                state.teachers = state.teachers.filter(teacher => teacher.Lid !== Lid);
                console.log(`Deleted teacher with ID: ${Lid}`);
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
            await loadTeachers(true);
        };

        return {
            state,
            nextPage,
            prevPage,
            editTeacher,
            createNewTeacher,
            handleDeleteTeacher,
            sortTable,
            isAdmin
        };
    }
};
</script>

<style scoped>
@import '@/css/Interface/Lehrer.css';

</style>