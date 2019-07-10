document.onload = (function() {
  const canvas = document.getElementById("frogger");
  const ctx = canvas.getContext("2d");
  const widthCell = 50;

  // Dibujo el fondo

  ctx.fillStyle = "#00046E";
  ctx.fillRect(0, 0, 600, 400);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 400, 600, 800);

  // Dibuja el rectangulo donde irá el título

  ctx.fillStyle = "#00FF00";
  ctx.fillRect(50, 50, 500, 200);
  ctx.font = "130px Arial";
  ctx.strokeText("FROGGY", 70, 180, 460);

  // Dibuja el rectángulo donde irá el "Insert Coin"

  ctx.fillStyle = "#CC6600";
  ctx.fillRect(200, 600, 200, 50);
  ctx.font = "40px Arial";
  ctx.strokeText("Press 1 to start!", 210, 638, 180);

  // Credito

  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(
    "A tribute by Marc Valles",
    canvas.width / 2,
    canvas.height / 2,
    200
  );

  // Definir tecla 1 para empezar el juego

  document.onkeydown = e => {
    if (e.keyCode === 49) {
      game = new Game({
        rows: canvas.width / widthCell,
        columns: canvas.height / widthCell,
        maxCells: widthCell,
        ctx: ctx,
        froggy: new Froggy()
      });
      // car = new Car({
      //   x: 12,
      //   y: 10,
      //   speed: 100,
      //   size: 50,
      //   direction: "right"
      // });
      game._start();
    }
  };
})();
