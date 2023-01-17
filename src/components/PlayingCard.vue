<script setup lang="ts">
import { ref } from 'vue';
import { store } from "../store.js";
import {
  Card,
} from '../models/PlayingCards';

const props = defineProps<{
  card: Card,
}>()

const selected = ref(false);

const select = () => {
  selected.value = !selected.value;
};

const getCardUrl = () => {
  const baseUrl = 'url(' + import.meta.env.BASE_URL + 'cards/';
  console.log(baseUrl);
  const suit = props.card.suit;
  const type = props.card.type;
  if (selected.value && !store.showCards)
    return baseUrl + type + '/back.jpg)';
  return baseUrl + type + '/' + suit + '_' + props.card.index + '.jpg)';
}
</script>

<template>
  <div
      v-on:click="(_) => select()"
      :class="'playing-card' + (selected && store.showCards ? ' dim' : '')"
      :style="{
        'background-image': getCardUrl(),
      }">
  </div>
</template>

<style scoped>
.playing-card {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: alias;
  border-radius: 26px;
  background-position: -6px -6px;
  background-size: cover;
  background-size: calc(100% + 12px) calc(100% + 12px);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.playing-card:hover {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.playing-card.dim {
  box-shadow: none;
  opacity: 0.3;
}
</style>
