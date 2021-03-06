import { CanvasRenderer, CanvasRendererParameter } from "./canvas-renderer";

export namespace CanvasRenderers {
  export class Ellipse extends CanvasRenderer  {
    constructor(parameters: CanvasRendererParameter) {
      super(parameters)
    }
    
    moveToNextBit(ctx: CanvasRenderingContext2D, i: any, j: any, w: any, h: any): void {
      ctx.moveTo(w*(j+1), h*(i+1) - h / 2);
    }

    drawBit(ctx: CanvasRenderingContext2D, i: any, j: any, w: any, h: any): void {
      const radW = w / 2;
      const radH = h / 2;

      ctx.ellipse(w * j + radW, h * i + radH, radW, radH, 0, 0, 2 * Math.PI);
    }
  }

  export class Rect extends CanvasRenderer {
    constructor(parameters: CanvasRendererParameter) {
      super(parameters);
    }

    drawBit(context: CanvasRenderingContext2D, i: any, j: any, w: any, h: any): void {
      return context.rect(w * j, h * i, w, h);
    }

    moveToNextBit(ctx: CanvasRenderingContext2D, i: any, j: any, w: any, h: any): void {
    }


  }
}
