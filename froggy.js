class Froggy {
  constructor() {
    this.direction = "up";
    this.body = {
      column: 6,
      row: 14
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
  moveRigth() {
    this.direction = "rigth";
    this.body.column += 1;
  }
}
