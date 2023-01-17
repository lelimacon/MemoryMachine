<script setup lang="ts">
import { store } from "../store.js";

const reload = () => {
  location = location;
}
</script>

<template>
  <div class="header">
    <div v-on:click="reload" class="logo">🎴</div>
    <div v-on:click="reload" class="title">memory machine</div>

    <div style="flex-grow: 1"></div>

    <div style="margin-right: 8px">🙈</div>
    <input type="checkbox" id="switch" name="switch" role="switch" v-model="store.showCards">
    <div style="margin-right: 26px">🫣</div>

    <div style="margin-right: 8px">🌚</div>
    <input type="checkbox" id="switch" name="switch" role="switch" v-model="store.lightMode">
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
  margin-right: 18px;
  cursor: pointer;
}
.title {
  color: var(--h1-color);
  letter-spacing: 12px;
  cursor: pointer;
}
</style>
