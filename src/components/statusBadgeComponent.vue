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

const props = defineProps<{
    status: true | false
}>()


</script>