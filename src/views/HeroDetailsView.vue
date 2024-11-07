<script lang="ts" setup>
import type { Hero } from '@/components/models';
import StyledButton from '@/components/StyledButton.vue';
import { useHeroes } from '@/services/hero.service';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const { findHero, updateHero, deleteHero } = useHeroes();

onMounted(() => {
    const heroID = Number(route.params.id);
    const myHero = findHero(heroID);
    hero.value = myHero;
})

const hero: Ref<Hero | null> = ref(null);
</script>

<template>
    <template v-if="hero">
        <div class="title">{{ hero.name }}</div>
        <div>id: {{ hero.number }}</div>
        <div>name: <input v-model="hero.name" /></div>
        <div class="buttons">
            <StyledButton @click="router.go(-1)">Back</StyledButton>
            <StyledButton :type="'negative'" @click="deleteHero(hero.number); router.go(-1)">Delete</StyledButton>
            <StyledButton :type="'primary'" @click="updateHero(hero); router.go(-1)">Save</StyledButton>
        </div>
    </template>
</template>

<style scoped>
.buttons {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
}
</style>