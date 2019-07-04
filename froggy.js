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
    this.direction = "right";
    this.body.column += 1;
  }
  collides(position) {
    //   if (
    //     this.body.row === position.toFixed(0) ||
    //     this.body.column === position.toFixed(0)
    //   ) {
    //     alert("you are dead!");
    //   }
  }
}
