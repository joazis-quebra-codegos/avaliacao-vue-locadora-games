<template>
  <NavbarComponent />
  
  <main class="container py-4">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
</script>