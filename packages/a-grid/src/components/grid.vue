<script setup lang="ts">
defineOptions({
  name: "AGrid",
})

withDefaults(
  defineProps<{
    tag: keyof HTMLElementTagNameMap
    columns: number
  }>(),
  {
    tag: "div",
    columns: 12,
  },
)
</script>

<template>
  <component :is="tag" class="a-grid">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.a-grid {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), minmax(0, 1fr));
}
</style>
