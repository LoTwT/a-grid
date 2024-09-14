<script setup lang="ts">
defineOptions({
  name: "AGrid",
})

const props = withDefaults(
  defineProps<{
    tag?: keyof HTMLElementTagNameMap
    columns?: number
    rowGap?: string | number
    columnGap?: string | number
  }>(),
  {
    tag: "div",
    columns: 12,
    rowGap: 16,
    columnGap: 16,
  },
)

const internalRowGap = computed(() =>
  typeof props.rowGap === "number" ? `${props.rowGap}px` : props.rowGap,
)
const internalColumnGap = computed(() =>
  typeof props.columnGap === "number"
    ? `${props.columnGap}px`
    : props.columnGap,
)
</script>

<template>
  <component :is="tag" class="a-grid">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.a-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(v-bind(columns), minmax(0, 1fr));
  gap: v-bind(internalRowGap) v-bind(internalColumnGap);
}
</style>
