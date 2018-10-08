<template>
  <main :class="mainClass">
    <svg
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup">
      <component
        v-for="(object, index) in objects"
        :key="index"
        :is="'d-' + object.type"
        :beginX="object.beginX"
        :beginY="object.beginY"
        :endX="object.endX"
        :endY="object.endY"
        :fillColor="object.fillColor"
        :strokeColor="object.strokeColor" />
      <!-- <d-rect
        :begin-x="addingShapeDetails.beginX"
        :begin-y="addingShapeDetails.beginY"
        :end-x="addingShapeDetails.endX"
        :end-y="addingShapeDetails.endY" /> -->
    </svg>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Mutation } from 'vuex-class';
import PageMode from '@/lib/pageMode';
import DRect from '@/components/dRect.vue';
import { defaultFillColor, defaultStrokeColor } from '@/lib/defaults';
import Shape from '@/lib/shape';

@Component({
  components: {
    DRect
  }
})
export default class DPage extends Vue {
  @State('pageMode')
  private pageMode!: PageMode;
  @Mutation('changePageMode')
  private changePageMode!: (pageMode: PageMode) => void;
  private objects = [
    new Shape("rect", 10, 10, 20, 20)
  ];
  // adding shape
  private addingShapeIndex = -1;
  private get mainClass() {
    return {
      'main-shaping': this.pageMode === PageMode.shaping,
    };
  }
  private mousedown(event: MouseEvent) {
    if (this.pageMode === PageMode.shaping) {
      this.objects.push(new Shape("rect",
        event.layerX,
        event.layerY,
        event.layerX,
        event.layerY
      ));
      this.addingShapeIndex = this.objects.length - 1;
    }
  }
  private mousemove(event: MouseEvent) {
    if (this.addingShapeIndex >= 0) {
      const targetObject = this.objects[this.addingShapeIndex];
      targetObject.endX = event.layerX;
      targetObject.endY = event.layerY;
    }
  }
  private mouseup() {
    if (this.addingShapeIndex >= 0) {
      this.addingShapeIndex = -1;
      this.changePageMode(PageMode.normal);
    }
  }
}
</script>


<style scoped>
main {
  flex: 1;
  position: relative;
}

.main-shaping {
  cursor: crosshair;
}

svg {
  width: 100%;
  height: 100%;
}
</style>
