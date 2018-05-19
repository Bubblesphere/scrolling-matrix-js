import { PanelRenderer, bit } from "../../lib/types";

const FuturisticRenderer: PanelRenderer = (display: Array<Array<bit>>) => {
  const canva = document.getElementById("myCanvas") as HTMLCanvasElement
  const ctx = canva.getContext("2d");

  for(var i = 0; i < display.length; i++) {
      for(var j = 0; j < display[i].length; j++) {
        ctx.beginPath();
        ctx.fillStyle= display[i][j] == 1 ? "#00B16A" : "#22313F";
        ctx.rect(j*40, i*40, 40, 40);
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#67809F";
        ctx.stroke();
      }
  }
};

export default FuturisticRenderer;