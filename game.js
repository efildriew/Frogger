class Game {
  constructor(options) {
    this.rows = options.rows;
    this.columns = options.columns;
    this.maxCells = options.maxCells;
    this.ctx = options.ctx;
    this.froggy = options.froggy;
    this.gameOver = undefined;
  }

  _drawBoard() {
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, 600, 800);
    this.ctx.fillStyle = "#FF7700";
    this.ctx.fillRect(0, 0, 600, 150);
    this.ctx.fillRect(0, 650, 600, 800);
  }

  _drawFroggy() {
    this.ctx.fillStyle = "#00FF3C";
    this.ctx.fillRect(
      this.froggy.body.column * 50,
      this.froggy.body.row * 50,
      50,
      50
    );
  }

  _drawCar() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(car.row * 50, car.column * 50, car.size, car.size);
    if (car.row < -2 || car.row > 12) {
      car.row = 12;
    }
  }

  _controlsToKeys() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 38:
          this.froggy.moveUp();
          break;
        case 40:
          this.froggy.moveDown();
          break;
        case 37:
          this.froggy.moveLeft();
          break;
        case 39:
          this.froggy.moveRight();
          break;
      }
    };
  }

  _update() {
    this._drawBoard();
    this._drawFroggy();
    this._drawCar();
    car.move();
    window.requestAnimationFrame(this._update.bind(this));
  }

  _start() {
    this._controlsToKeys();
    window.requestAnimationFrame(this._update.bind(this));
  }
}
