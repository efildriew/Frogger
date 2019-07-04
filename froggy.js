class Froggy {
  constructor() {
    this.direction = "up";
    this.body = {
      column: 6,
      row: 13
    };
  }
  moveUp() {
    this.direction = "up";
    this.body.row -= 1;
    if (this.body.row === 0) {
      alert("You win!");
    }
  }
  moveDown() {
    this.direction = "down";
    this.body.row += 1;
  }
  moveLeft() {
    this.direction = "left";
    this.body.column -= 1;
  }
  moveRight() {
    this.direction = "rigth";
    this.body.column += 1;
  }
}
