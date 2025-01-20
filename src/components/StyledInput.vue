<script setup lang="ts">
defineProps({
  label: String,
  inputProps: {
    type: Object as () => Record<string, any>,
    default: () => ({}),
  },
});
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input v-bind="inputProps" />
  </div>
</template>
