const cars = [
  new Car({
    x: 12,
    y: 10,
    speed: 150,
    size: 50,
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
    direction: "right"
  }),

  new Car({
    x: 0,
    y: 14,
    speed: 100,
    size: 50,
    direction: "left"
  })
];

const trees = [
  new Tree({
    x: 12,
    y: 8,
    speed: 150,
    size: 100,
    direction: "right"
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
    this.ctx.fillStyle = "#FF7700";
    this.ctx.fillRect(0, 100, 600, 100);
    this.ctx.fillRect(0, 450, 600, 50);
    this.ctx.fillRect(0, 750, 600, 800);
    this.ctx.fillStyle = "#00046E";
    this.ctx.fillRect(0, 200, 600, 250);
  }

  _drawFroggy() {
    this.ctx.fillStyle = "#00FF3C";
    this.ctx.fillRect(
      this.froggy.body.column * 50,
      this.froggy.body.row * 50,
      50,
      50
    );
  }

  _drawCar() {
    cars.forEach(car => {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(car.x * 50, car.y * 50, car.size, 50);
      if (car.direction === "right") {
        if (car.x < -1 || car.x > 12) {
          car.x = 12;
        }
      }
      if (car.direction === "left") {
        if (car.x < -1 || car.x > 12) {
          car.x = 0;
        }
      }
    });
  }

  _drawTree() {
    trees.forEach(tree => {
      this.ctx.fillStyle = "brown";
      this.ctx.fillRect(tree.x * 50, tree.y * 50, tree.size, 50);
      if (tree.direction === "right") {
        if (tree.x < -1 || tree.x > 12) {
          tree.x = 12;
        }
      }
      if (tree.direction === "left") {
        if (tree.x < -1 || tree.x > 12) {
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

    trees.forEach(tree => {
      if (this.froggy.isTransportedBy(tree)) {
        alert("you're dead");
        this.froggy.body.column = 6;
        this.froggy.body.row = 15;
      }
    });

    if (this.froggy.lives > 0) {
      this._drawBoard();
      this._drawCar();
      this._drawTree();
      this._drawFroggy();

      if (this.froggy.body.row === 3) {
        alert("you win!");
        this.froggy.body.column = 6;
        this.froggy.body.row = 15;
      }

      window.requestAnimationFrame(this._update.bind(this));
    } else {
      this.ctx.clearRect(150, 150, 300, 500);
      //añadir pantalla de game over
      setTimeout(() => {
        location.reload();
      }, 5000);
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
