<template>
  <rect
    :x="x"
    :y="y"
    :width="width"
    :height="height"
    :fill="fillColor"
    :stroke="strokeColor" />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Mixins } from "vue-mixin-decorator";
import dShape from "@/mixins/dShape";

export default class DRect extends Mixins(dShape) {
  private get width() {
    return Math.abs(this.beginX - this.endX);
  }
  private get height() {
    return Math.abs(this.beginY - this.endY);
  }
  private get x() {
    return Math.min(this.beginX, this.endX);
  }
  private get y() {
    return Math.min(this.beginY, this.endY);
  }
}
</script>

<style scoped>
svg {
  position: absolute;
}
</style>
