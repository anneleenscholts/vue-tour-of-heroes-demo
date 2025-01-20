<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import StyledInput from '@/components/StyledInput.vue';
import StyledInputByType from '@/components/StyledInputByType.vue';
import StyledInputSlot from '@/components/StyledInputSlot.vue';

const buttonType = "negative";

</script>

<template>
    <div class="container">
        <div>
            <StyledButton :type=buttonType>My styled button</StyledButton>
        </div>
        <div>
            <StyledInput label="Custom Input"
                :inputProps="{ type: 'number', placeholder: 'Enter a number', step: 1 }" />
        </div>
        <div>
            <StyledInputByType label="My input field" input-type="text" />
        </div>
        <div>
            <StyledInputSlot label="Just a label" />
        </div>
        <div>
            <StyledInputSlot label="With a slot">
                <input type="password" />
            </StyledInputSlot>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>