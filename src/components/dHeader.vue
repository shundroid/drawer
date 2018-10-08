<template>
  <header ref="a">
    <div>Drawer</div>
    <button id="shapesButton" @click="clickShapes" :class="shapesButtonClass">
      <fa icon="shapes" />
    </button>
    <button>
      <fa icon="image" />
    </button>
    <button>
      <fa icon="i-cursor" />
    </button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Mutation, State } from 'vuex-class';
import { mapMutations } from 'vuex';
import PageMode from '@/lib/pageMode';

@Component
export default class DHeader extends Vue {
  @Mutation('changePageMode')
  private changePageMode!: (pageMode: PageMode) => void;
  @State('pageMode')
  private pageMode!: PageMode;

  private clickShapes() {
    this.changePageMode(PageMode.shaping);
  }
  private get shapesButtonClass() {
    return {
      'shapes-button-active': this.pageMode === PageMode.shaping,
    };
  }
}
</script>

<style scoped>
header {
  background-color: #2ecc71;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 5px;
}
header > button {
  margin-left: 10px;
  height: 100%;
  text-align: center;
  padding: 5px;
  border: none;
  background-color: rgba(0,0,0,0);
  color: white;
}
.shapes-button-active {
  background-color: #27ae60;
}
</style>
