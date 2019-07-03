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
    this.ctx.fillRect(0, 0, 600, 100);
    this.ctx.fillRect(0, 700, 600, 800);
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
          this.froggy.moveRigth();
          break;
      }
    };
  }

  _update() {
    this._drawBoard();
    this._drawFroggy();
    window.requestAnimationFrame(this._update.bind(this));
  }

  _start() {
    this._controlsToKeys();
    window.requestAnimationFrame(this._update.bind(this));
  }
}
