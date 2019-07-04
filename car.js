class Car {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.speed = options.speed;
    this.size = options.size;
    this.direction = options.direction;
    this.interval = undefined;
  }

  moveForward() {
    if (this.direction === "left") {
      this.x += 1;
    } else if (this.direction === "right") {
      this.x -= 0.25;
    }
  }

  move() {
    this.interval = setInterval(this.moveForward.bind(this), this.speed);
  }
}
