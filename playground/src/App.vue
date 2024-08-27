<script setup lang="ts">
import { AGrid, AGridItem } from "a-grid"
</script>

<template>
  <a-grid tag="section">
    <a-grid-item start="2" span="2" style="background-color: red">
      1
    </a-grid-item>
    <a-grid-item tag="span" :start="6" span="2" style="background-color: pink">
      2
    </a-grid-item>
    <a-grid-item tag="a" :span="3" style="background-color: lightblue">
      3
    </a-grid-item>
    <a-grid-item tag="aside" start="12" style="background-color: lightcoral">
      4
    </a-grid-item>
  </a-grid>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
