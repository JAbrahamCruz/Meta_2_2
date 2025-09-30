<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
</script>

<style scoped>

</style>
