<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import { useHeroes } from '@/services/hero.service';
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const { addHero } = useHeroes();
const router = useRouter();

const name: Ref<string> = ref('');

</script>

<template>
    <div class="container">
        <div>Name: <input v-model="name" /></div>
        <div class="buttons">
            <StyledButton @click="router.go(-1)">Back</StyledButton>
            <StyledButton @click="addHero(name); router.go(-1)" :type="'primary'">Save</StyledButton>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 1rem;
}

.buttons {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
}
</style>