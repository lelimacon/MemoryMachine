<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="header">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.header {
  height: 80px;
}
</style>
