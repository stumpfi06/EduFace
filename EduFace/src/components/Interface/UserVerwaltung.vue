<template>
  <div class="interface-body">
    <h1 class="userverwaltung-h1">User Verwaltung</h1>
    <table class="user-table" v-if="!state.isEditing && !state.isCreating">
      <thead>
        <tr>
          <th @click="sortTable('email')">Email</th>
          <th @click="sortTable('role')">Role</th>
          <th>Vorname</th>
          <th>Nachname</th>
          <th>Klasse</th>
          <th>Aktionen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in state.users" :key="user.uid">
          <td>{{ user.email }}</td>
          <td>{{ formatRole(user.role) }}</td>
          <td>{{ getVorname(user) }}</td>
          <td>{{ getNachname(user) }}</td>
          <td>{{ getKlasse(user) }}</td>
          <td>
            <button @click="editUser(user)" class="action-button">
              <i class="fas fa-edit"></i>
            </button>
            <button v-if="isAdmin" @click="handleDeleteUser(user.uid)" class="action-button">
              <i class="fas fa-trash"></i>
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
    <div v-if="!state.isEditing && !state.isCreating" class="create-button-container">
      <button @click="createNewUser" class="create-button">Neuen User erstellen</button>
    </div>

    <EditUser v-if="state.isEditing" :user="state.currentUser" @close="state.isEditing = false" />
    <CreateUser v-if="state.isCreating" @close="state.isCreating = false" @user-created="onUserCreated" />
  </div>
</template>

<script>
import { getAllUsers, deleteUser as deleteUserFromDB, getUserRole } from '@/firebase/users';
import { getKlasseFromKID, getLehrerByLid, getSchuelerBySid } from '@/firebase/queries';
import { reactive, onMounted, computed } from 'vue';
import EditUser from '@/components/Interface/Edit/EditUser.vue';
import CreateUser from '@/components/Interface/Create/CreateUser.vue';

export default {
  components: {
    EditUser,
    CreateUser
  },
  setup() {
    const state = reactive({
      users: [],
      currentPage: 1,
      pageSize: 8,
      isEditing: false,
      isCreating: false,
      currentUser: null,
      sortKey: 'email',
      sortOrder: 'asc',
      lastVisible: null,
      firstVisible: null,
      hasMore: true,
      hasPrevious: false,
      previousPages: [],
      currentUserRole: 'user',
      studentNames: {},
      teacherNames: {},
      studentClasses: {}
    });

    const isAdmin = computed(() => {
      return state.currentUserRole === 'admin';
    });

    const isSchueler = computed(() => {
      return state.currentUserRole === 'schueler';
    });

    const loadUsers = async (reset = false, direction = 'next') => {
      if (reset) {
        state.lastVisible = null;
        state.firstVisible = null;
        state.currentPage = 1;
        state.users = [];
        state.previousPages = [];
      }
      const { users, lastDoc, firstDoc } = await getAllUsers(state.sortKey, state.sortOrder, state.pageSize, direction === 'next' ? state.lastVisible : state.firstVisible, direction);
      if (direction === 'next') {
        state.previousPages.push(state.firstVisible);
        state.users = users;
        state.lastVisible = lastDoc;
        state.firstVisible = firstDoc;
        state.hasPrevious = state.previousPages.length > 1;
      } else {
        state.users = users;
        state.lastVisible = lastDoc;
        state.firstVisible = state.previousPages.pop();
        state.hasPrevious = state.previousPages.length > 0;
      }
      state.hasMore = users.length === state.pageSize;

      // Fetch names and classes for students and teachers
      for (const user of users) {
        if (user.sid) {
          const { Schueler } = await getSchuelerBySid(user.sid);
          state.studentNames[user.sid] = Schueler.Name;
          const klasse = await getKlasseFromKID(Schueler.KID);
          state.studentClasses[user.sid] = klasse ? klasse.Name : '';
        }
        if (user.lid) {
          const { Lehrer } = await getLehrerByLid(user.lid);
          state.teacherNames[user.lid] = Lehrer.Name;
        }
      }
    };

    onMounted(async () => {
      state.currentUserRole = await getUserRole(); // Fetch and set the current user's role
      await loadUsers();
    });

    const nextPage = async () => {
      if (state.hasMore) {
        state.currentPage++;
        await loadUsers(false, 'next');
      }
    };

    const prevPage = async () => {
      if (state.currentPage > 1) {
        state.currentPage--;
        await loadUsers(false, 'prev');
      }
    };

    const editUser = (user) => {
      state.currentUser = user;
      state.isEditing = true;
    };

    const createNewUser = () => {
      state.isCreating = true;
    };

    const handleDeleteUser = async (uid) => {
      try {
        await deleteUserFromDB(uid);
        state.users = state.users.filter(user => user.uid !== uid);
      } catch (error) {
        console.error("Error deleting user: ", error);
      }
    };

    const sortTable = async (key) => {
      if (state.sortKey === key) {
        state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortKey = key;
        state.sortOrder = 'asc';
      }
      await loadUsers(true);
    };

    const formatRole = (role) => {
      if (role === 'schueler') {
        return 'Schüler';
      }
      return role.charAt(0).toUpperCase() + role.slice(1);
    };

    const getVorname = (user) => {
      if (user.role === 'schueler') {
        return state.studentNames[user.sid]?.Vorname || '';
      } else {
        return state.teacherNames[user.lid]?.Vorname || '';
      }
    };

    const getNachname = (user) => {
      if (user.role === 'schueler') {
        return state.studentNames[user.sid]?.Nachname || '';
      } else {
        return state.teacherNames[user.lid]?.Nachname || '';
      }
    };

    const getKlasse = (user) => {
      if (user.role === 'schueler') {
        return state.studentClasses[user.sid] || '';
      }
      return '';
    };

    const onUserCreated = async () => {
      state.isCreating = false;
      await loadUsers(true); // Reload users after a new user is created

    };

    const onUserEdited = async () => {
      state.isEditing = false;
      await loadUsers(true); // Reload users after a user is edited
      window.location.reload(); // Reload the page
    };

    return {
      state,
      nextPage,
      prevPage,
      editUser,
      createNewUser,
      handleDeleteUser,
      sortTable,
      isAdmin,
      isSchueler,
      formatRole,
      getVorname,
      getNachname,
      getKlasse,
      onUserCreated,
      onUserEdited
    };
  }
};
</script>

<style src="@/css/Interface/UserVerwaltung.css" scoped>
</style>
