<template>
  <span class="badge" :class="{
    'badge bg-success': props.status === true,
    'badge bg-danger': props.status === false
  }"
  >
  {{props.status}}
  </span>

</template>

<script setup lang="ts">

// TODO: Declare a prop 'status' do tipo string usando defineProps.
const props = defineProps<{
    status: true | false
}>()


</script>