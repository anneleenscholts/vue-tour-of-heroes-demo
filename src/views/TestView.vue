<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import StyledInput from '@/components/StyledInput.vue';
import StyledInputByType from '@/components/StyledInputByType.vue';
import StyledInputSlot from '@/components/StyledInputSlot.vue';
import { ref } from 'vue';

const buttonType = "negative";
const username = ref("");

const logUsername = () => {
    console.log("username value", username.value);
}

</script>

<template>
    <div class="container">
        <div>
            <StyledButton :type=buttonType @click="logUsername">My styled button</StyledButton>
        </div>
        <!-- <div>
            <StyledInput label="Custom Input"
                :inputProps="{ type: 'number', placeholder: 'Enter a number', step: 1 }" />
        </div> -->
        <div>
            <StyledInputByType v-model="username" label="My input field" input-type="text" />
        </div>
        <!-- <div>
            <StyledInputSlot label="Just a label" />
        </div>
        <div>
            <StyledInputSlot label="With a slot">
                <input type="password" />
            </StyledInputSlot>
        </div> -->
    </div>
</template>

<style scoped>
.container {
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>