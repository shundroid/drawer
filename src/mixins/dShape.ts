import Vue from "vue";
import { Mixin } from "vue-mixin-decorator";

@Mixin({
  props: {
    beginX: Number,
    beginY: Number,
    endX: Number,
    endY: Number,
    fillColor: String,
    strokeColor: String
  },
})
export default class DShape extends Vue {
  beginX!: number;
  beginY!: number;
  endX!: number;
  endY!: number;
}
