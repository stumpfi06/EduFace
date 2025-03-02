<template>
    <div class="contact-container" id="kontakt-section">
      <!-- Linke Seite -->
      <div class="contact-info-section">
        <h1 class="contact-title">Kontaktieren Sie uns</h1>
        <p class="contact-description">Haben Sie Fragen? Schreiben Sie uns eine Nachricht!</p>
      </div>
  
      <!-- Rechte Seite - Formular -->
      <div class="contact-form-section">
        <form class="contact-form" @submit.prevent="submitForm">
          <h2 class="form-title">Kontaktformular</h2>
          <div class="contact-form-group">
            <label class="contact-label">Name</label>
            <input type="text" v-model="name" class="contact-input" placeholder="Ihr Name" />
          </div>
          <div class="contact-form-group">
            <label class="contact-label">E-Mail</label>
            <input type="email" v-model="email" class="contact-input" placeholder="Ihre E-Mail" />
          </div>
          <div class="contact-form-group">
            <label class="contact-label">Nachricht</label>
            <textarea v-model="message" class="contact-textarea" placeholder="Ihre Nachricht"></textarea>
          </div>
          <button type="submit" class="contact-submit-button">Absenden</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import '@/css/Homepage/Kontakt.css';
  import { Resend } from 'resend';

  const name = ref<string>('');
  const email = ref<string>('');
  const message = ref<string>('');
  const apikey = import.meta.env.VITE_RESEND_APIKEY as string;

  const submitForm = async () => {
    console.log(apikey);
    const resend = new Resend(apikey);

    const { data, error } = await resend.emails.send({
      from: `${name.value} <${email.value}>`, 
      to: ['anwesenheit.eduface@gmail.com'],
      subject: 'Test',
      html: message.value, 
    });

    if (error) {
      return console.error({ error });
    }

    console.log({ data });
  };
  </script>
