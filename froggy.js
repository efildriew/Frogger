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
