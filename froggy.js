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
    var froggyTop = this.body.row * 50;
    var froggyBottom = this.body.row * 50;
    var froggyLeft = this.body.column * 50;
    var froggyRight = this.body.column * 50;

    var carLeft = carPosition.x * 50;
    var carRight = carPosition.x * 50 + carPosition.size;
    var carTop = carPosition.y * 50;
    var carBottom = carPosition.y * 50 + carPosition.size;

    if (
      froggyBottom < carTop ||
      froggyTop > carBottom ||
      froggyRight < carLeft ||
      froggyLeft > carRight
    ) {
      return false;
    }
    return true;
  }
}
