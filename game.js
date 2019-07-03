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

  _start() {
    this._drawBoard();
  }
}
