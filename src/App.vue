<script setup lang="ts">
import Header from './components/Header.vue';
import FillGrid from './components/FillGrid.vue';
import PlayingCard from './components/PlayingCard.vue';
import {
  Card,
  Type,
  Suit,
} from './models/PlayingCards';

const cards: Card[] = [];
for (let i = 0; i < 21; i++)
  cards.push({ type: Type.Tarot, suit: Suit.Trumps, index: i });
</script>

<template>
  <Header />
  <FillGrid class="card-grid" :aspectRatio="8 / 12" :maxRows="8" :minGap="12">
    <PlayingCard v-for="c in cards" :card="c" />
  </FillGrid>
</template>

<style scoped>
.card-grid {
  margin: 8px 12px;
}
</style>
