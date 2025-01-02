<template>
  <div class="user-verwaltung">
    <h1>User Verwaltung</h1>
    <ul>
      <li v-for="user in users" :key="user.uid">{{ user.email }} - {{ user.role }}</li>
    </ul>
  </div>
</template>

<script>
import { getAllUsers } from '@/firebase/users';

export default {
  data() {
    return {
      users: []
    };
  },
  async created() {
    this.users = await getAllUsers();
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
