<script setup>
defineProps({
  user: {
    type: String,
    required: true
  }
})
</script>

<template>
    <h1>Header</h1> {{ user }}
</template>


<style scoped>
</style>
