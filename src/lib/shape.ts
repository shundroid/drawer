import { defaultFillColor, defaultStrokeColor } from "@/lib/defaults";

export default class Shape {
  public type!: string;
  public beginX!: number;
  public beginY!: number;
  public endX!: number;
  public endY!: number;
  public fillColor: string = defaultFillColor;
  public strokeColor: string = defaultStrokeColor;
  constructor(type: string, beginX: number, beginY: number, endX: number, endY: number) {
    this.type = type;
    this.beginX = beginX;
    this.beginY = beginY;
    this.endX = endX;
    this.endY = endY;
  }
}
