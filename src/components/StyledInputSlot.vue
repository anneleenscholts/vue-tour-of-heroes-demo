<script setup lang="ts">
const { label } = defineProps<{
  label: string,
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log('Input value:', target.value);
};
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <slot>
      <!-- Fallback input if no slot is provided -->
      <input placeholder="This is the default input" type="text" @input="handleInput" />
    </slot>
  </div>
</template>
