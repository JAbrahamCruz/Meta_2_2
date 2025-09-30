<template>
    <v-img :src="bannerBg" height="30vh" cover>
        <v-container class="my-container fill-height d-flex flex-column justify-center align-center text-center text-white">
            <h1 class="text-h3">Bienvenido a mi Sitio Web con Vuetify!</h1>
        </v-container>
    </v-img>
</template>

<script setup>
import bannerBg from "../assets/images/banner-bg.png"
</script>

<style scoped>

</style>