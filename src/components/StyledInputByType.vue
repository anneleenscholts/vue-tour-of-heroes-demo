<script setup lang="ts">
const { label, inputType = "text" } = defineProps<{
  label: string,
  inputType?: string
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log('Input value:', target.value);
};
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input :type="inputType" @input="handleInput" />
  </div>
</template>


<!-- @input = shorthand v-on:input -->
<!-- :type means dynamic input with ref -->
<!-- :type = short hand v-bind:type -->
<!-- When defining a prop that has a default value of an object or array, using a function that returns a new object/array ensures that each instance of the component gets its own copy. This avoids unwanted side effects caused by shared references. -->