class Car {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.speed = options.speed;
    this.size = options.size;
    this.direction = options.direction;
    this.interval = undefined;
    // this.positionX = undefined;
    // this.positionY = undefined;
  }

  moveForward() {
    if (this.direction === "left") {
      this.x += 0.25;
      // this.positionX = this.x + this.size;
      // this.positionY = this.y + this.size;
    } else if (this.direction === "right") {
      this.x -= 0.25;
      // this.positionX = this.x + this.size;
      // this.positionY = this.y + this.size;
    }
  }

  move() {
    this.interval = setInterval(this.moveForward.bind(this), this.speed);
  }
}
