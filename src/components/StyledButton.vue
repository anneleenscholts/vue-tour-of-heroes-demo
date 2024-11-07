<script lang="ts" setup>
type ButtonType = "default" | "primary" | "negative";
defineProps<{ type?: ButtonType }>()
</script>

<template>
    <button :class="{ 'primary': type === 'primary', 'negative': type === 'negative' }">
        <slot />
    </button>
</template>

<style scoped>
button {
    background-color: #eeeeee;
    border-radius: 0.25rem;
    font-weight: 500;
    border: none;
    padding: 0.25rem 0.5rem;
    color: #567868;
}

button:hover {
    background-color: #e6e6e6;
    color: #0096e8;
    cursor: pointer;
}

.primary {
    background-color: #1976d2;
    color: #fff;
}

.primary:hover {
    background-color: #1565c0;
    color: #fff;
}

.negative {
    background-color: #c10015;
    color: #fff;
}

.negative:hover {
    background-color: #9b0012;
    color: #fff;
}
</style>