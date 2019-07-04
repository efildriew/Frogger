class Car {
  constructor(options) {
    this.row = options.row;
    this.column = options.column;
    this.speed = options.speed;
    this.size = options.size;
    this.direction = options.direction;
  }
  move() {
    if (this.direction === "left") {
      this.row += this.speed;
    } else if (this.direction === "right") {
      this.row -= this.speed;
    }
  }
}
