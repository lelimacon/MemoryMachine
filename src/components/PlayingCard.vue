<script setup lang="ts">
import { ref } from 'vue';
import {
  Card,
} from '../models/PlayingCards';

var props = defineProps<{
  card: Card,
}>()

const count = ref(0);

</script>

<template>
  <div class="playing-card">
     Type {{ card.type }}
     Suit {{ card.suit }}
     Index {{ card.index }}
  </div>
</template>

<style scoped>
.playing-card {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
</style>
