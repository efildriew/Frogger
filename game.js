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
    x: 0,
    y: 7,
    speed: 200,
    size: 150,
    direction: "left"
  }),
  new Tree({
    x: 0,
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
    x: 0,
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

  // _obstacle() {
  // cars = [
  //   new Car({
  //     x: 12,
  //     y: 10,
  //     speed: 100,
  //     size: 50,
  //     direction: "right"
  //   }),

  //   new Car({
  //     x: 12,
  //     y: 11,
  //     speed: 100,
  //     size: 50,
  //     direction: "left"
  //   }),

  //   new Car({
  //     x: 12,
  //     y: 12,
  //     speed: 100,
  //     size: 50,
  //     direction: "right"
  //   }),

  //   new Car({
  //     x: 12,
  //     y: 13,
  //     speed: 100,
  //     size: 50,
  //     direction: "right"
  //   }),

  //   new Car({
  //     x: 12,
  //     y: 14,
  //     speed: 100,
  //     size: 50,
  //     direction: "left"
  //   }),
  // ];
  // const direction = Math.floor(Math.random * 2);

  // setInterval(() => {
  //   cars.push(
  //     new Car({
  //       x: Math.floor(Math.random * 5)
  //     })
  //   );
  // }, 1000);
  // }

  _drawBoard() {
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, 600, 800);
    this.ctx.fillStyle = "#00046E";
    this.ctx.fillRect(0, 100, 600, 350);
    this.ctx.drawImage(sprites, 0, 119, 400, 34, 0, 100, 600, 100);
    this.ctx.drawImage(sprites, 0, 119, 400, 34, 0, 450, 600, 50);
    this.ctx.drawImage(sprites, 0, 119, 400, 34, 0, 750, 600, 50);
  }

  _drawFroggy() {
    if (this.froggy.isSurfing === false) {
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
  }

  _drawCar() {
    cars.forEach((car, index) => {
      switch (index) {
        case 4:
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

        case 3:
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

        case 2:
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

        case 1:
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

        case 0:
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
      // this.ctx.drawImage(
      //   sprites,
      //   82,
      //   264,
      //   24,
      //   26,
      //   car.x * 50,
      //   car.y * 50,
      //   car.size,
      //   50
      // );
      if (car.direction === "right") {
        if (car.x < -2 || car.x > 12) {
          car.x = 12;
        }
      }
      if (car.direction === "left") {
        if (car.x < -2 || car.x > 12) {
          car.x = 0;
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
          tree.x = 0;
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

    if (this.froggy.column >= 8 && this.froggy.column <= 4) {
      this.froggy.isSurfing = true;
    } else {
      this.froggy.isSurfing = false;
    }

    // trees.forEach(tree => {
    switch (this.froggy.body.row) {
      case 8:
        if (this.froggy.isTransportedBy(trees[0])) {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        } else {
          // this.froggy.body.column = trees[0].x;
        }
        break;

      case 7:
        if (this.froggy.isTransportedBy(trees[1])) {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        }
        break;

      case 6:
        if (this.froggy.isTransportedBy(trees[2])) {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        }
        break;

      case 5:
        if (this.froggy.isTransportedBy(trees[3])) {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        }
        break;

      case 4:
        if (this.froggy.isTransportedBy(trees[4])) {
          alert("you're dead");
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        }
        break;

      default:
        break;
    }
    // });

    if (this.froggy.lives > 0) {
      this._drawBoard();
      this._drawCar();
      this._drawTree();
      this._drawFroggy();

      if (this.froggy.body.row === 3) {
        setTimeout(() => {
          alert("you win!");
        }, 10);
        this.froggy.body.column = 6;
        this.froggy.body.row = 15;
      }

      window.requestAnimationFrame(this._update.bind(this));
    } else {
      this.ctx.clearRect(150, 150, 300, 500);

      //añadir pantalla de game over

      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }

  _gameOver() {
    window.cancelAnimationFrame(this._update.bind(this));
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
