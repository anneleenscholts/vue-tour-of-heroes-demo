<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import { useHeroes } from '@/services/hero.service';
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const { addHero } = useHeroes();
const router = useRouter();

const name: Ref<string> = ref('');

const saveHero = async () => {
    try {
        await addHero(name.value);
        router.go(-1)
    } catch (error) {
        console.error(error);
    }
}

</script>

<template>
    <div class="container">
        <div>Name: <input v-model="name" /></div>
        <div class="buttons">
            <StyledButton @click="router.go(-1)">Back</StyledButton>
            <StyledButton @click="saveHero()" :type="'primary'">Save</StyledButton>
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