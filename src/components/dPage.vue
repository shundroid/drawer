<template>
  <main :class="mainClass">
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';
import PageMode from '@/lib/pageMode';

@Component
export default class DPage extends Vue {
  @State('pageMode')
  private pageMode!: PageMode;
  private get mainClass() {
    return {
      'main-shaping': this.pageMode === PageMode.shaping,
    };
  }
}
</script>


<style scoped>
main {
  flex: 1;
}

.main-shaping {
  cursor: crosshair;
}
</style>
