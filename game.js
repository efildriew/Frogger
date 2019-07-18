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

    // letras frogger

    this.ctx.drawImage(frogFinish, 17, 368, 15, 15, 20, 20, 40, 60);
    this.ctx.drawImage(frogFinish, 41, 368, 15, 15, 80, 20, 40, 60);
    this.ctx.drawImage(frogFinish, 65, 368, 15, 15, 140, 20, 40, 60);
    this.ctx.drawImage(frogFinish, 89, 368, 15, 15, 200, 20, 40, 60);
    this.ctx.drawImage(frogFinish, 89, 368, 15, 15, 260, 20, 40, 60);
    this.ctx.drawImage(frogFinish, 115, 368, 15, 15, 320, 20, 40, 60);
    this.ctx.drawImage(frogFinish, 41, 368, 15, 15, 380, 20, 40, 60);
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

  _drawLives() {
    switch (this.froggy.lives) {
      case 3:
        this.ctx.drawImage(frogFinish, 225, 17, 7, 7, 500, 40, 20, 20);
        this.ctx.drawImage(frogFinish, 225, 17, 7, 7, 530, 40, 20, 20);
        this.ctx.drawImage(frogFinish, 225, 17, 7, 7, 560, 40, 20, 20);
        break;
      case 2:
        this.ctx.drawImage(frogFinish, 17, 112, 15, 16, 500, 40, 20, 20);
        this.ctx.drawImage(frogFinish, 225, 17, 7, 7, 530, 40, 20, 20);
        this.ctx.drawImage(frogFinish, 225, 17, 7, 7, 560, 40, 20, 20);
        break;
      case 1:
        this.ctx.drawImage(frogFinish, 17, 112, 15, 16, 500, 40, 20, 20);
        this.ctx.drawImage(frogFinish, 17, 112, 15, 16, 530, 40, 20, 20);
        this.ctx.drawImage(frogFinish, 225, 17, 7, 7, 560, 40, 20, 20);
        break;
      default:
        break;
    }
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
        squash.play();
        this.froggy.body.column = 6;
        this.froggy.body.row = 15;
      }
    });

    switch (this.froggy.body.row) {
      case 8:
        if (this.froggy.isTransportedBy(trees[0])) {
          plunk.play();
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        } else {
          this.froggy.body.column -= 0.0275;
        }
        break;

      case 7:
        if (this.froggy.isTransportedBy(trees[1])) {
          plunk.play();
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        } else {
          this.froggy.body.column += 0.0215;
        }
        break;

      case 6:
        if (this.froggy.isTransportedBy(trees[2])) {
          plunk.play();
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        } else {
          this.froggy.body.column += 0.04;
        }
        break;

      case 5:
        if (this.froggy.isTransportedBy(trees[3])) {
          plunk.play();
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
        } else {
          this.froggy.body.column -= 0.0215;
        }
        break;

      case 4:
        if (this.froggy.isTransportedBy(trees[4])) {
          plunk.play();
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
      this._drawLives();
      this._drawCar();
      this._drawTree();
      this._drawFroggy();

      if (this.froggy.body.row === 3) {
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
          plunk.play();
          this.froggy.body.column = 6;
          this.froggy.body.row = 15;
          this.froggy.lives -= 1;
        }

        // if (this.froggy.homes.length === 5) {
        //   alert("You win! Next Level");

        // cambiar por pantalla de score, siguiente nivel, o lo que sea
        // }
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
    this.ctx.drawImage(frogFinish, 17, 112, 15, 16, 500, 40, 20, 20);
    this.ctx.drawImage(frogFinish, 17, 112, 15, 16, 530, 40, 20, 20);
    this.ctx.drawImage(frogFinish, 17, 112, 15, 16, 560, 40, 20, 20);

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
