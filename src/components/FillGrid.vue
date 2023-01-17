<script setup lang="ts">
import { ref, toRefs, onMounted, onUnmounted } from "vue";

onMounted(() => {
  window.addEventListener("resize", resetContainerItems);
  resetContainerItems();
});

onUnmounted(() => {
  window.removeEventListener("resize", resetContainerItems);
});

const props = defineProps<{
  aspectRatio: number,
  maxRows: number,
  minGap: number,
}>();

//const { no } = toRefs(props);

const itemSize = ref(<Size>{});

type Size = {
  width: number,
  height: number,
}

const getBestItemBounds = (
    containerSize: Size,
    aspectRatio: number,
    itemCount: number,
    maxRows: number,
    minGap: number,
): Size => {
  const containerRatio = containerSize.width / containerSize.height;

  const refHeight = 100;
  const refWidth = refHeight * aspectRatio;

  let bestRatio = 0;
  let bestGridSize: Size = { width: 0, height: 0 };

  for (let rowCount = 1; rowCount <= maxRows; rowCount++) {
    if (rowCount > itemCount)
      continue;

    const colCount = Math.ceil(itemCount / rowCount);
    const ratio = (refWidth * colCount) / (refHeight * rowCount);

    if (bestRatio == 0 || Math.abs(ratio - containerRatio) < Math.abs(bestRatio - containerRatio)) {
      bestRatio = ratio;
      bestGridSize = { width: colCount, height: rowCount };
    }
  }

  if (bestRatio < containerRatio) {
    const itemHeight = (containerSize.height - (minGap * bestGridSize.height)) / bestGridSize.height;
    const itemWidth = itemHeight * aspectRatio;
    return { width: itemWidth, height: itemHeight };
  } else {
    const itemWidth = (containerSize.width - (minGap * bestGridSize.width)) / bestGridSize.width;
    const itemHeight = itemWidth / aspectRatio;
    return { width: itemWidth, height: itemHeight };
  }
};

function resetContainerItems() {
  const container = document.getElementById('container');
  if (!container)
    return;
  const itemCount = container.childElementCount;
  if (!itemCount)
    return;
  const rect = container.getBoundingClientRect();
  const containerSize = { width: rect.width, height: rect.height };
  itemSize.value = getBestItemBounds(containerSize, props.aspectRatio, itemCount, props.maxRows, props.minGap);
}

</script>

<template>

  <div
      id="container"
      :style="{
        '--item-width': itemSize.width + 'px',
        '--item-height': itemSize.height + 'px',
      }">
    <slot></slot>
  </div>

</template>

<style scoped>
#container {
  display: inline-grid;
  grid-template-columns: repeat(auto-fit, var(--item-width));
  grid-template-rows: repeat(auto-fit, var(--item-height));
  place-content: space-evenly;
}

.item {
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
