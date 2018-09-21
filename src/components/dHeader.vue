<template>
  <header>
    <div>Drawer</div>
    <div id="shapesButton" @click="clickShapes" >
      <fa icon="shapes" />
    </div>
    <fa icon="image" />
    <fa icon="i-cursor" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Mutation } from 'vuex-class';
import { mapMutations } from 'vuex';
import PageMode from '@/lib/pageMode';

@Component
export default class DHeader extends Vue {
  @Mutation('changePageMode')
  private changePageMode!: (pageMode: PageMode) => void;
  private clickShapes() {
    this.changePageMode(PageMode.shaping);
  }
}
</script>

<style scoped>
header {
  background-color: #2ecc71;
  color: white;
  padding: 5px;
  display: flex;
  align-items: center;
}
header * {
  margin-left: 10px;
}
</style>
