<template>
  <v-container min-height="85vh" class="h-auto d-flex align-center justify-center flex-column ga-3">

    <v-container class="d-flex align-center flex-wrap justify-center ga-16">
      <Card></Card>
      <Card></Card>
    </v-container>
    <Table></Table>
    <v-btn color="success">text</v-btn>
  </v-container>
</template>

<script setup>
import Card from "@/components/Card.vue"
import Table from "@/components/Table.vue"
</script>

<style scoped>

</style>