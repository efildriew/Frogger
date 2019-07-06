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
  collides(carPosition) {
    var froggyLeft = this.body.row * 50;
    var froggyRight = this.body.row * 50 + 50;
    var froggyTop = this.body.column * 50;
    var froggyBottom = this.body.column * 50 + 50;

    var carLeft = carPosition.x;
    var carRight = carPosition.x + carPosition.size;
    var carTop = carPosition.y;
    var carBottom = carPosition.y + carPosition.size;
  }
}
