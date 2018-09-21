<template>
  <div id="app">
    <d-header />
    <d-page />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DHeader from './components/dHeader.vue';
import DPage from './components/dPage.vue';

@Component({
  components: {
    DHeader,
    DPage,
  },
})
export default class App extends Vue {}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
