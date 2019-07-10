class Froggy {
  constructor() {
    this.direction = "up";
    this.body = {
      column: 6,
      row: 15
    };
  }

  moveUp() {
    this.direction = "up";
    this.body.row -= 1;
    if (this.body.row < 0) {
      alert("You win!");
    }
  }

  moveDown() {
    this.direction = "down";
    if (this.body.row === 15) {
      this.body.row = this.body.row;
    } else {
      this.body.row += 1;
    }
  }

  moveLeft() {
    this.direction = "left";
    if (this.body.column === 0) {
      this.body.column = this.body.column;
    } else {
      this.body.column -= 1;
    }
  }

  moveRight() {
    this.direction = "right";
    if (this.body.column === 11) {
      this.body.column = this.body.column;
    } else {
      this.body.column += 1;
    }
  }

  // collides(carPosition) {
  //   var froggyTop = this.body.row * 50;
  //   var froggyBottom = this.body.row * 50 + 50;
  //   var froggyLeft = this.body.column * 50;
  //   var froggyRight = this.body.column * 50 + 50;

  //   var carLeft = carPosition.x * 50;
  //   var carRight = carPosition.x * 50 + 50;
  //   var carTop = carPosition.y * 50 + 50;
  //   var carBottom = carPosition.y * 50;

  //   if (
  //     froggyBottom < carTop ||
  //     froggyTop > carBottom ||
  //     froggyRight < carLeft ||
  //     froggyLeft > carRight
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }
}
