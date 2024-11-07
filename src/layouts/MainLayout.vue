<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import StyledButton from "@/components/StyledButton.vue"

const router = useRouter();
</script>

<template>
    <div class="layout-container">
        <div class="title">Tour of heroes</div>
        <div class="button-container">
            <StyledButton @click="router.push({ name: 'dashboard' })">Dashboard</StyledButton>
            <StyledButton @click="router.push({ name: 'heroes' })">Heroes</StyledButton>
        </div>
        <RouterView />
    </div>

</template>

<style scoped>
.title {
    font-size: 1.5rem;
    color: grey;
    font-weight: bold;
}

.layout-container {
    margin: 2rem;
}

.button-container {
    display: flex;
    gap: 0.25rem;
}


</style>