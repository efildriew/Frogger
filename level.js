class Level {
  constructor(row, speed, frequency) {
    this.row = row;
    this.speed = speed;
    this.frequency = frequency;
    this.cars = [];
    this.trees = [];
  }

  carsGenerator() {}
  treesGenerator() {}
}
