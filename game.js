const cars = [
  new Car({
    x: 12,
    y: 10,
    speed: 150,
    size: 100,
    direction: "right"
  }),

  new Car({
    x: 0,
    y: 11,
    speed: 100,
    size: 50,
    direction: "left"
  }),

  new Car({
    x: 12,
    y: 12,
    speed: 100,
    size: 50,
    direction: "right"
  }),

  new Car({
    x: 12,
    y: 13,
    speed: 50,
    size: 50,
    direction: "left"
  }),

  new Car({
    x: 0,
    y: 14,
    speed: 100,
    size: 50,
    direction: "right"
  })
];

const trees = [
  new Tree({
    x: 12,
    y: 8,
    speed: 150,
    size: 150,
    direction: "right"
  }),
  new Tree({
    x: -4,
    y: 7,
    speed: 200,
    size: 150,
    direction: "left"
  }),
  new Tree({
    x: -6,
    y: 6,
    speed: 100,
    size: 250,
    direction: "left"
  }),
  new Tree({
    x: 12,
    y: 5,
    speed: 200,
    size: 100,
    direction: "right"
  }),
  new Tree({
    x: -5,
    y: 4,
    speed: 100,
    size: 200,
    direction: "left"
  })
];

class Game {
  constructor(options) {
    this.rows = options.rows;
    this.columns = options.columns;
    this.maxCells = options.maxCells;
    this.ctx = options.ctx;
    this.froggy = options.froggy;
    this.gameOver = undefined;
  }

  _drawBoard() {
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, 600, 800);
    this.ctx.fillStyle = "#00046E";
    this.ctx.fillRect(0, 100, 600, 350);
    this.ctx.drawImage(sprites, 8, 55, 376, 54, 0, 100, 600, 100);
    this.ctx.drawImage(sprites, 0, 119, 400, 34, 0, 450, 600, 50);
    this.ctx.drawImage(sprites, 0, 119, 400, 34, 0, 750, 600, 50);
  }

  _drawFroggy() {
    this.ctx.drawImage(
      sprites,
      13,
      370,
      21,
      16,
      this.froggy.body.column * 50,
      this.froggy.body.row * 50,
      50,
      50
    );
  }

  _drawCar() {
    cars.forEach(car => {
      switch (car.y) {
        case 14:
          this.ctx.drawImage(
            sprites,
            82,
            264,
            24,
            26,
            car.x * 50,
            car.y * 50,
            car.size,
            50
          );
          break;

        case 13:
          this.ctx.drawImage(
            sprites,
            11,
            301,
            21,
            24,
            car.x * 50,
            car.y * 50,
            car.size,
            50
          );
          break;

        case 12:
          this.ctx.drawImage(
            sprites,
            10,
            267,
            28,
            20,
            car.x * 50,
            car.y * 50,
            car.size,
            50
          );
          break;

        case 11:
          this.ctx.drawImage(
            sprites,
            47,
            265,
            27,
            24,
            car.x * 50,
            car.y * 50,
            car.size,
            50
          );
          break;

        case 10:
          this.ctx.drawImage(
            sprites,
            106,
            302,
            46,
            18,
            car.x * 50,
            car.y * 50,
            car.size,
            50
          );
          break;

        default:
          break;
      }
      if (car.direction === "right") {
        if (car.x < -2 || car.x > 12) {
          car.x = 12;
        }
      }
      if (car.direction === "left") {
        if (car.x < -2 || car.x > 12) {
          car.x = -1;
        }
      }
    });
  }

  _drawTree() {
    trees.forEach(tree => {
      this.ctx.drawImage(
        sprites,
        7,
        230,
        83,
        21,
        tree.x * 50,
        tree.y * 50,
        tree.size,
        50
      );
      if (tree.direction === "right") {
        if (tree.x < -5 || tree.x > 12) {
          tree.x = 12;
        }
      }
      if (tree.direction === "left") {
        if (tree.x < -5 || tree.x > 12) {
          tree.x = -5;
        }
      }
    });
  }

  _controlsToKeys() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 38:
          this.froggy.moveUp();
          break;
        case 40:
          this.froggy.moveDown();
          break;
        case 37:
          this.froggy.moveLeft();
          break;
        case 39:
          this.froggy.moveRight();
          break;
      }
    };
  }

  _update() {
    cars.forEach(car => {
      if (this.froggy.collides(car)) {
        alert("you're dead");
        this.froggy.body.column = 6;
        this.froggy.body.row = 15;
      }
    });

    switch (this.froggy.body.row) {
      case 8:
        if (this.froggy.isTransportedBy(trees[0])) {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        } else {
          this.froggy.body.column -= 0.0275;
        }
        break;

      case 7:
        if (this.froggy.isTransportedBy(trees[1])) {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        } else {
          this.froggy.body.column += 0.0215;
        }
        break;

      case 6:
        if (this.froggy.isTransportedBy(trees[2])) {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        } else {
          this.froggy.body.column += 0.04;
        }
        break;

      case 5:
        if (this.froggy.isTransportedBy(trees[3])) {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        } else {
          this.froggy.body.column -= 0.0215;
        }
        break;

      case 4:
        if (this.froggy.isTransportedBy(trees[4])) {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        } else {
          this.froggy.body.column += 0.04;
        }
        break;

      default:
        break;
    }

    if (this.froggy.lives > 0) {
      this._drawBoard();
      this._drawCar();
      this._drawTree();
      this._drawFroggy();

      if (this.froggy.body.row === 3) {
        // setTimeout(() => {
        //   alert("you win!");
        // }, 10);
        // this.froggy.body.column = 6;
        // this.froggy.body.row = 15;
        if (
          this.froggy.body.column > 0 &&
          this.froggy.body.column < 1 &&
          this.froggy.homes[0] === false
        ) {
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
          this.froggy.homes[0] = true;
        } else if (
          this.froggy.body.column > 3 &&
          this.froggy.body.column < 4 &&
          this.froggy.homes[1] === false
        ) {
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
          this.froggy.homes[1] = true;
        } else if (
          this.froggy.body.column > 5 &&
          this.froggy.body.column < 6 &&
          this.froggy.homes[2] === false
        ) {
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
          this.froggy.homes[2] = true;
        } else if (
          this.froggy.body.column > 8 &&
          this.froggy.body.column < 9 &&
          this.froggy.homes[3] === false
        ) {
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
          this.froggy.homes[3] = true;
        } else if (
          this.froggy.body.column > 11 &&
          this.froggy.body.column < 12 &&
          this.froggy.homes[4] === false
        ) {
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
          this.froggy.homes[4] = true;
        } else {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
          this.froggy.lives -= 1;
        }
      }

      this.froggy.homes.forEach((isHome, index) => {
        if (isHome) {
          switch (index) {
            case 0:
              this.ctx.drawImage(frogFinish, 488, 176, 16, 16, 10, 150, 40, 40);
              break;

            case 1:
              this.ctx.drawImage(
                frogFinish,
                488,
                176,
                16,
                16,
                145,
                150,
                40,
                40
              );
              break;

            case 2:
              this.ctx.drawImage(
                frogFinish,
                488,
                176,
                16,
                16,
                280,
                150,
                40,
                40
              );
              break;

            case 3:
              this.ctx.drawImage(
                frogFinish,
                488,
                176,
                16,
                16,
                415,
                150,
                40,
                40
              );
              break;

            case 4:
              this.ctx.drawImage(
                frogFinish,
                488,
                176,
                16,
                16,
                550,
                150,
                40,
                40
              );
              break;

            default:
              break;
          }
        }
      });

      window.requestAnimationFrame(this._update.bind(this));
    } else {
      this._gameOver();
    }
  }

  _gameOver() {
    window.cancelAnimationFrame(this._update.bind(this));
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(250, 450, 150, 50);
    this.ctx.strokeStyle = "red";
    this.ctx.strokeText("GAME OVER", 320, 480, 140);

    setTimeout(() => {
      location.reload();
    }, 3000);
  }

  _start() {
    this._controlsToKeys();
    cars.forEach(car => {
      car.move();
    });
    trees.forEach(tree => {
      tree.move();
    });
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
  }
}
