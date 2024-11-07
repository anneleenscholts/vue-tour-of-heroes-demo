<script lang="ts" setup>
import StyledButton from '@/components/StyledButton.vue';
import { useAuth } from '@/services/auth.service';
import { ref, type Ref } from 'vue';

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");

const { login } = useAuth();

</script>

<template>
    <div class="login-container">
        <div class="login-inputs">
            <div>Email: <input type="email" v-model="email" /></div>
            <div>Paswoord: <input type="password" v-model="password" /></div>
        </div>
        <StyledButton class="login-button" @click="login(email, password)">Login</StyledButton>
    </div>
</template>

<style scoped>
.login-container {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.login-inputs {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.login-button {
    max-width: fit-content;
}
</style>