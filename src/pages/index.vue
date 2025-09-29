<template>
  <v-container class="fill-height d-flex flex-column justify-center align-center text-center">
    <h1 class="text-h2 font-weight-bold mb-6">Bienvenido a mi Landing 🚀</h1>
    <p class="text-subtitle-1 mb-8">Un texto breve que explique de qué va tu proyecto.</p>
    <v-btn @click="theme.toggle()" text="Toggle Light / Dark"></v-btn>
  </v-container>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>