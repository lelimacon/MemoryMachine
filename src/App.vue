<script setup lang="ts">
import { store } from "./store.js";
import "@picocss/pico/css/pico.css";
import Header from './components/Header.vue';
import FillGrid from './components/FillGrid.vue';
import PlayingCard from './components/PlayingCard.vue';
import {
  Card,
  Type,
  Suit,
} from './models/PlayingCards';

const cards: Card[] = [];
for (let i = 1; i <= 22; i++)
  cards.push({ type: Type.tarot, suit: Suit.trumps, index: i });
</script>

<template>
  <div class="main" :data-theme="store.lightMode ? 'light' : 'dark'">
    <Header />
    <FillGrid class="card-grid" :aspectRatio="1536 / 2663" :maxRows="10" :minGap="22">
      <PlayingCard v-for="c in cards" :card="c" />
    </FillGrid>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--card-background-color);
  color: var(--card-color);
}
.card-grid {
  margin: 4px 8px;
  flex-grow: 1;
}
</style>
