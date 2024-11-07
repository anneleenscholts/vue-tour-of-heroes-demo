<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import StyledButton from "@/components/StyledButton.vue"
import { useAuth } from '@/services/auth.service';

const router = useRouter();

const { isAuthenticated, logout } = useAuth();

</script>

<template>
    <div>
        <StyledButton @click="logout(); router.push({name: 'login'})" v-if="isAuthenticated">Logout</StyledButton>
        <StyledButton @click="router.push({ name: 'login' })" v-else>Login</StyledButton>
    </div>
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