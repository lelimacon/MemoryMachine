<script setup lang="ts">
import { ref } from "vue";
import { store } from "../store.js";

const count = ref(0);
</script>

<template>
  <div class="header">
    <div class="logo">🎴</div>
    <div class="title">memory machine</div>
    <div style="flex-grow: 1"></div>
      <div style="margin-right: 8px">🌚</div>
      <input type="checkbox" id="switch" name="switch" role="switch" v-model="store.darkMode">
      <div>🌝</div>
  </div>
</template>

<style scoped>
.header {
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  font-size: 22px;
}
.logo {
  font-size: 32px;
  margin-right: 18px
}
.title {
  color: var(--h1-color);
  letter-spacing: 12px;
}
</style>
