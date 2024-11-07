<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useHeroes } from './services/hero.service';
import { onMounted } from 'vue';

const { loadHeroes } = useHeroes();

onMounted(() => {
  loadHeroes();
})

</script>

<template>
  <RouterView />
</template>