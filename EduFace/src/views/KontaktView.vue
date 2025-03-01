<template>
  <div>
    <Navbar />
  </div>
    <div class="right-column">
      <Kontakt />
    </div>

</template>

<script>
import Kontakt from '@/components/homepage/Kontakt.vue';
import Navbar from '@/components/homepage/Navbar.vue'

export default {
  components: {
    Kontakt,
    Navbar
  }
};
</script>

