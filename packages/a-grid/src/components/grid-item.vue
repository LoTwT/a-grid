<script setup lang="ts">
defineOptions({
  name: "AGridItem",
})

const {
  tag = "div",
  start = "auto",
  span = 1,
} = defineProps<{
  tag?: keyof HTMLElementTagNameMap
  start?: string | number
  span?: number
}>()
</script>

<template>
  <component :is="tag" class="a-grid-item">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.a-grid-item {
  grid-column: v-bind(start) / span v-bind(span);
}
</style>
