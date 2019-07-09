class Game {
  constructor(options) {
    this.rows = options.rows;
    this.columns = options.columns;
    this.maxCells = options.maxCells;
    this.ctx = options.ctx;
    this.froggy = options.froggy;
    this.gameOver = window.requestAnimationFrame;
  }

  _obstacle() {
    const cars = [];

    setInterval(() => {
      cars.push(
        new Car({
          x: 4
        })
      );
    }, 1000);
  }

  _drawBoard() {
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, 600, 800);
    this.ctx.fillStyle = "#FF7700";
    this.ctx.fillRect(0, 100, 600, 100);
    this.ctx.fillRect(0, 450, 600, 50);
    this.ctx.fillRect(0, 750, 600, 800);
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
    this.ctx.fillRect(car.x * 50, car.y * 50, car.size, car.size);
    if (car.x < -2 || car.x > 12) {
      car.x = 12;
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
    if (this.froggy.collides(car)) {
      alert("you're dead");
    } else {
      this._drawBoard();
      this._drawFroggy();
      this._drawCar();

      window.requestAnimationFrame(this._update.bind(this));
    }
  }

  _gameOver() {
    window.cancelAnimationFrame(this.gameOver);
  }

  _start() {
    this._controlsToKeys();
    car.move();
    window.requestAnimationFrame(this._update.bind(this));
  }
}
