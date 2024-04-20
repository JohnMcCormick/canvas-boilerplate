const draw = (canvas, canvasContext, timestamp, frameMilliseconds) => {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);

  canvasContext.font = "20px Arial";

  canvasContext.textAlign = "left"
  canvasContext.fillText(`${(1000 / frameMilliseconds).toFixed(2)}`, 5, 20);

  canvasContext.textAlign = "right"
  canvasContext.fillText(`${(timestamp / 1000).toFixed(0)}`, canvas.width - 5, 20);
}

const loop = (canvas, canvasContext, timestamp, timestampPrev) => {
  const frameMilliseconds = timestamp - timestampPrev;
  
  draw(canvas, canvasContext, timestamp, frameMilliseconds);

  timestampPrev = timestamp;
  
  window.requestAnimationFrame((timestamp) => loop(canvas, canvasContext, timestamp, timestampPrev));
}

const init = () => {
  const canvas = document.getElementById("canvas");
  const canvasContext = canvas.getContext("2d");

  let timestampPrev = 0;
  window.requestAnimationFrame((timestamp) => loop(canvas, canvasContext, timestamp, timestampPrev));
};

window.addEventListener("load", init);
