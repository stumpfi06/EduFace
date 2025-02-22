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
  
        <label for="fontSize">Schriftgröße:</label>
        <select id="fontSize" v-model="settings.fontSize">
          <option value="small">Klein</option>
          <option value="medium">Mittel</option>
          <option value="large">Groß</option>
        </select>
      </div>
  
      <div class="settings-section">
        <h2>Allgemein</h2>
        <label for="language">Sprache:</label>
        <select id="language" v-model="settings.language">
          <option value="de">Deutsch</option>
          <option value="en">Englisch</option>
        </select>
  
        <label for="autoLogin">Automatische Anmeldung:</label>
        <input type="checkbox" id="autoLogin" v-model="settings.autoLogin">
      </div>
  
      <button class="save-btn" @click="saveSettings">Speichern</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        settings: {
          theme: 'light',
          fontSize: 'medium',
          language: 'de',
          autoLogin: false,
          notifications: true
        }
      };
    },
    methods: {
      saveSettings() {
        localStorage.setItem('settings', JSON.stringify(this.settings));
        console.log('Settings saved:', this.settings);
      }
    },
    created() {
      const savedSettings = localStorage.getItem('settings');
      if (savedSettings) {
        this.settings = JSON.parse(savedSettings);
      }
    }
  };
  </script>
  
  <style scoped src="@/css/interface/Einstellungen.css">
  
  </style>
  