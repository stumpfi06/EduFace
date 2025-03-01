<template>
  <div class="interface-body">
    <h1>Einstellungen</h1>
    <div class="settings-section">
      <h2>Ansicht</h2>
      <label for="theme">Thema:</label>
      <select id="theme" v-model="settings.theme">
        <option value="light">Hell</option>
        <option value="dark">Dunkel</option>
      </select>
    </div>
    <div class="settings-section">
      <h2>Andere Einstellungen</h2>
      <label for="notifications">Benachrichtigungen:</label>
      <input type="checkbox" id="notifications" v-model="settings.notifications" />
    </div>
    <button @click="saveSettings">Speichern</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        theme: 'light',
        notifications: true,
      },
    }
  },
  methods: {
    saveSettings() {
      localStorage.setItem('settings', JSON.stringify(this.settings))
      console.log('Settings saved:', this.settings)
    },
  },
  created() {
    const savedSettings = localStorage.getItem('settings')
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings)
    }
  },
}
</script>

<style scoped src="../../css/Interface/Einstellungen.css"></style>
