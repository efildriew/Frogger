class Froggy {
  constructor() {
    this.direction = "up";
    this.body = {
      column: 6,
      row: 15
    };
    this.lives = 3;
    this.interval = undefined;
    this.homes = [false, false, false, false, false];
  }

  moveUp() {
    this.direction = "up";
    this.body.row -= 1;
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
    if (this.body.column <= 0) {
      this.body.column = 0;
    } else {
      this.body.column -= 1;
    }
  }

  moveRight() {
    this.direction = "right";
    if (this.body.column >= 11) {
      this.body.column = 11;
    } else {
      this.body.column += 1;
    }
  }

  collides(carPosition) {
    var froggyTop = this.body.row * 50;
    var froggyBottom = this.body.row * 50 + 50;
    var froggyLeft = this.body.column * 50;
    var froggyRight = this.body.column * 50 + 50;

    var carLeft = carPosition.x * 50;
    var carRight = carPosition.x * 50 + carPosition.size;
    var carTop = carPosition.y * 50 + 50;
    var carBottom = carPosition.y * 50;

    if (
      froggyBottom < carTop ||
      froggyTop > carBottom ||
      froggyRight < carLeft ||
      froggyLeft > carRight
    ) {
      return false;
    }
    this.lives -= 1;
    return true;
  }

  isTransportedBy(treePosition) {
    var froggyTop = this.body.row * 50;
    var froggyBottom = this.body.row * 50 + 50;
    var froggyLeft = this.body.column * 50;
    var froggyRight = this.body.column * 50 + 50;

    var treeLeft = treePosition.x * 50;
    var treeRight = treePosition.x * 50 + treePosition.size;
    var treeTop = treePosition.y * 50;
    var treeBottom = treePosition.y * 50 + 50;

    if (this.body.row < 9 && this.body.row > 3) {
      if (
        froggyBottom < treeTop ||
        froggyTop > treeBottom ||
        froggyRight < treeLeft ||
        froggyLeft > treeRight
      ) {
        this.lives -= 1;
        return true;
      }
      if (this.body.column <= 0) {
        this.body.column = 0;
      }

      if (this.body.column >= 11) {
        this.body.column = 11;
      }

      return false;
    }
  }
}
