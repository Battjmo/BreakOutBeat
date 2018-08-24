/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./gameFiles/breakStijl.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gameFiles/board.js":
/*!****************************!*\
  !*** ./gameFiles/board.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bricks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bricks */ "./gameFiles/bricks.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./gameFiles/util.js");




class Board {

constructor() {
  this.gameBricks = this.brickGridGenerator();
  // this.brickCounter = this.brickCounter.bind(this);
  // this.brickCount = this.brickCounter(this.gameBricks);
}


//builds random row from premade set of shapes
rowBuilder(row, leftEdge, rowHeight) {
  // let rowXPosition = 80;
  let jumbledRow = this.shuffle(row);
  let gameRow = [];
  for (let i = 0; i < row.length; i++) {
    row[i].x = leftEdge;
    row[i].y = rowHeight;
    leftEdge += (row[i].width + 10);
    gameRow.push(row[i]);
  }
  return gameRow;
}


//picks random shapes from row to push into final
rowRandomizer(row) {
  let gameRow = [];
  for (let i = 0; i < row.length; i++) {
    if (_util__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(0, 10) < 5) {
      gameRow.push(row[i]);
    }
  }
  return gameRow;
}



//shuffles all rows
shuffle(rows) {
  for (let i = rows.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rows[i], rows[j]] = [rows[j], rows[i]];
  }
  return rows;
}


//BRICK GRID POPULATOR, call two above functions
brickGridGenerator() {
  let gameBricks = [];
  let shuffledRows = this.shuffle(_bricks__WEBPACK_IMPORTED_MODULE_0__["allBricks"]);
  for (let i = 0; i < 3; i++) {
    gameBricks.push(shuffledRows[i]);
  }
  for (let i = 0; i < gameBricks.length; i++) {
    if (i === 0) {
      gameBricks[i] = this.rowBuilder(gameBricks[i], 50, 62);
  } else if (i === 1) {
      gameBricks[i] = this.rowBuilder(gameBricks[i], 50, 150);
  } else {
    gameBricks[i] = this.rowBuilder(gameBricks[i], 50, 238);
  }
    gameBricks[i] = this.rowRandomizer(gameBricks[i]);
    }

  return gameBricks;
  }

  //counts the bricks for score and game end purposes
  // brickCounter(brickGrid) {
  //   let brickCount = 0;
  //   for (var i = 0; i < brickGrid.length; i++) {
  //     for (var j = 0; j < brickGrid[i].length; j++) {
  //       brickCount++;
  //     }
  //   }
  //   return brickCount;
  // }

//END OF CLASS
}

/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./gameFiles/breakStijl.js":
/*!*********************************!*\
  !*** ./gameFiles/breakStijl.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./gameFiles/game.js");


document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = _game__WEBPACK_IMPORTED_MODULE_0__["default"].canvasWidth;
  canvasEl.height = _game__WEBPACK_IMPORTED_MODULE_0__["default"].canvasHeight;

  const ctx = canvasEl.getContext("2d");
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  game.playGame();
});


/***/ }),

/***/ "./gameFiles/bricks.js":
/*!*****************************!*\
  !*** ./gameFiles/bricks.js ***!
  \*****************************/
/*! exports provided: allBricks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allBricks", function() { return allBricks; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./gameFiles/util.js");


  let brickColumnCount = 10;
  let brickRowCount = 3;

  //brick rows
  //row 1
  // let brick1 = {x: 50, y: 40, width: 40, height: 40, status: 1, color: Util.hue()};
  // let brick2 = {x: 70, y: 40, width: 50, height: 50, status: 1, color: Util.hue()};
  // let brick3 = {x: 100, y: 40, width: 70, height: 30, status: 1, color: Util.hue()};
  // let brick4 = {x: 150, y: 40, width: 120, height: 60, status: 1, color: Util.hue()};
  // let brick5 = {x: 250, y: 40, width: 40, height: 70, status: 1, color: Util.hue()};
  // let brick6 = {x: 270, y: 40, width: 60, height: 60, status: 1, color: Util.hue()};
  // let brick7 = {x: 310, y: 40, width: 70, height: 60, status: 1, color: Util.hue()};
  // let brick8 = {x: 360, y: 40, width: 60, height: 70, status: 1, color: Util.hue()};
  // let brick9 = {x: 400, y: 40, width: 50, height: 70, status: 1, color: Util.hue()};
  // let brick10 = {x: 430, y: 40, width: 40, height: 40, status: 1, color: Util.hue()};

  let brick1 = {x: 50, y: 40, width: 30, height: 50, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick2 = {x: 70, y: 40, width: 40, height: 60, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick3 = {x: 100, y: 40, width: 60, height: 40, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick4 = {x: 150, y: 40, width: 110, height: 70, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick5 = {x: 250, y: 40, width: 30, height: 80, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick6 = {x: 270, y: 40, width: 50, height: 70, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick7 = {x: 310, y: 40, width: 60, height: 70, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick8 = {x: 360, y: 40, width: 50, height: 80, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick9 = {x: 400, y: 40, width: 40, height: 80, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick10 = {x: 430, y: 40, width: 30, height: 50, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};



  //row2
  // let brick11 = {x: 50, y: 100, width: 50, height: 40, status: 1, color: Util.hue()};
  // let brick12 = {x: 80, y: 100, width: 60, height: 30, status: 1, color: Util.hue()};
  // let brick13 = {x: 120, y: 100, width: 30, height: 70, status: 1, color: Util.hue()};
  // let brick14 = {x: 130, y: 100, width: 80, height: 50, status: 1, color: Util.hue()};
  // let brick15 = {x: 190, y: 100, width: 40, height: 60, status: 1, color: Util.hue()};
  // let brick16 = {x: 210, y: 100, width: 90, height: 20, status: 1, color: Util.hue()};
  // let brick17 = {x: 280, y: 100, width: 70, height: 60, status: 1, color: Util.hue()};
  // let brick18 = {x: 330, y: 100, width: 60, height: 40, status: 1, color: Util.hue()};
  // let brick19 = {x: 370, y: 100, width: 50, height: 70, status: 1, color: Util.hue()};
  // let brick20 = {x: 400, y: 100, width: 70, height: 60, status: 1, color: Util.hue()};

  //row2
  let brick11 = {x: 50, y: 100, width: 40, height: 50, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick12 = {x: 80, y: 100, width: 50, height: 40, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick13 = {x: 120, y: 100, width: 20, height: 80, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick14 = {x: 130, y: 100, width: 70, height: 40, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick15 = {x: 190, y: 100, width: 30, height: 70, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick16 = {x: 210, y: 100, width: 80, height: 30, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick17 = {x: 280, y: 100, width: 60, height: 70, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick18 = {x: 330, y: 100, width: 50, height: 50, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick19 = {x: 370, y: 100, width: 40, height: 80, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick20 = {x: 400, y: 100, width: 60, height: 70, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};

  //row3
  // let brick21 = {x: 50, y: 160, width: 60, height: 50, status: 1, color: Util.hue()};
  // let brick22 = {x: 90, y: 160, width: 30, height: 60, status: 1, color: Util.hue()};
  // let brick23 = {x: 100, y: 160, width: 70, height: 70, status: 1, color: Util.hue()};
  // let brick24 = {x: 150, y: 160, width: 50, height: 40, status: 1, color: Util.hue()};
  // let brick25 = {x: 180, y: 160, width: 40, height: 50, status: 1, color: Util.hue()};
  // let brick26 = {x: 200, y: 160, width: 80, height: 70, status: 1, color: Util.hue()};
  // let brick27 = {x: 260, y: 160, width: 30, height: 60, status: 1, color: Util.hue()};
  // let brick28 = {x: 270, y: 160, width: 60, height: 40, status: 1, color: Util.hue()};
  // let brick29 = {x: 310, y: 160, width: 130, height: 50, status: 1, color: Util.hue()};
  // let brick30 = {x: 420, y: 160, width: 50, height: 30, status: 1, color: Util.hue()};

  let brick21 = {x: 50, y: 160, width: 50, height: 60, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick22 = {x: 90, y: 160, width: 20, height: 70, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick23 = {x: 100, y: 160, width: 60, height: 80, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick24 = {x: 150, y: 160, width: 40, height: 50, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick25 = {x: 180, y: 160, width: 30, height: 60, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick26 = {x: 200, y: 160, width: 70, height: 80, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick27 = {x: 260, y: 160, width: 20, height: 70, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick28 = {x: 270, y: 160, width: 50, height: 50, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick29 = {x: 310, y: 160, width: 120, height: 60, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};
  let brick30 = {x: 420, y: 160, width: 50, height: 50, status: 1, color: _util__WEBPACK_IMPORTED_MODULE_0__["default"].hue()};

  // row collections
  let brickRow1 = [brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10];
  let brickRow2 = [brick11, brick12, brick13, brick14, brick15, brick16, brick17, brick18, brick19, brick20];
  let brickRow3 = [brick21, brick22, brick23, brick24, brick25, brick26, brick27, brick28, brick29, brick30];

  const allBricks = [brickRow1, brickRow2, brickRow3];


/***/ }),

/***/ "./gameFiles/game.js":
/*!***************************!*\
  !*** ./gameFiles/game.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./gameFiles/board.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./gameFiles/util.js");



class Game {
  constructor(ctx) {
    //CANVAS
    this.canvasWidth = 700;
    this.canvasHeight = 500;
    this.ctx = ctx;
    this.Board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
    //BALL
    this.ballX = this.canvasWidth / 2;
    this.ballY = this.canvasHeight - 40;
    this.ballRadius = 13;
    this.ballColor = "#ffffff";
    this.xSpeed = 3;
    this.ySpeed = -3;
    //PADDLE
    this.paddleWidth = 100;
    this.paddleHeight = 20;
    this.paddleX = (this.canvasWidth - this.paddleWidth) / 2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.hitPaddleLastFrame = false;
    //GAME
    this.score = 0;
    this.play = false;
    this.draw = this.draw.bind(this);
    this.playthis = this.playGame.bind(this);
    this.bloop = new Audio('./gameFiles/sounds/low-bloop.wav');
    this.victory = new Audio('./gameFiles/sounds/success.wav');
    var audio1 = document.getElementById("myAudio1");
    this.victory.onended = function() {
    alert("YOU WIN! PRESS RESTURN TO HAVE ANOTHER GO.");
    document.location.reload();
    this.muted = false;
    };
  }



  //BALL DRAWER
  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI*2);
    this.ctx.fillStyle = this.ballColor;
    this.ctx.fill();
    this.ctx.closePath();
  }
  //PADDLE DRAWER
  drawPaddle() {
    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, this.canvasHeight - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = "#e83030";
    this.ctx.fill();
    this.ctx.closePath();
  }
  //BRICK DRAWER
  drawBricks() {
    let brickCount = 0;
    for (let i = 0; i < this.Board.gameBricks.length; i++) {
      for (let j = 0; j < this.Board.gameBricks[i].length; j++) {
        if (this.Board.gameBricks[i][j].status === 1) {
          brickCount++;
          this.ctx.beginPath();
          this.ctx.rect(this.Board.gameBricks[i][j].x, this.Board.gameBricks[i][j].y, this.Board.gameBricks[i][j].width, this.Board.gameBricks[i][j].height);
          this.ctx.fillStyle = this.Board.gameBricks[i][j].color;
          this.ctx.fill();
          this.ctx.closePath();
          }
        }
      }
      if (brickCount === 0) {
        this.victory.play().onended();


      }
    }




    // COLLISION DETECTION
    collisionDetection() {
      //BALL COLLISION COORDINATES
      let ballRightX = this.ballX + this.ballRadius;
      let ballLeftX = this.ballX - this.ballRadius;
      let ballTopY = this.ballY - this.ballRadius;
      let ballBottomY = this.ballY + this.ballRadius;

        for(let c = 0; c < this.Board.gameBricks.length; c++) {
            for(let r = 0; r < this.Board.gameBricks[c].length; r++) {
                let b = this.Board.gameBricks[c][r];
                if (b.status === 1) {
                if ((ballLeftX > b.x && ballLeftX < b.x + b.width && this.ballY > b.y && this.ballY < b.y + b.height) ||
                   (ballRightX > b.x && ballRightX < b.x + b.width && this.ballY > b.y && this.ballY < b.y + b.height )) {
                     this.xSpeed = -this.xSpeed;
                     b.status = 0;
                     this.bloop.pause();
                     this.bloop.currentTime = 0;
                     this.bloop.play();
                     this.score++;
                }
                if ((this.ballX > b.x && this.ballX < b.x + b.width && ballTopY > b.y && ballTopY < b.y + b.height) ||
                  (this.ballX > b.x && this.ballX < b.x + b.width && ballBottomY > b.y && ballBottomY < b.y + b.height)) {
                     this.ySpeed = -this.ySpeed;
                     this.bloop.pause();
                     this.bloop.currentTime = 0;
                     this.bloop.play();
                     b.status = 0;
                     this.score++;
                   }
                }
              }
            }
        }


    bindKeys() {
      document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
      document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
      document.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);
    }

      //keypress handling
    keyDownHandler(e) {
      if(e.keyCode === 39) {
          this.rightPressed = true;
      }
      else if(e.keyCode === 37) {
          this.leftPressed = true;
      }
      else if(e.keyCode === 32) {
        this.play = !this.play;
      }
      else if(e.keyCode === 77) {
        this.muted = !this.muted;
      }
    }

    keyUpHandler(e) {
      if(e.keyCode == 39) {
          this.rightPressed = false;
      }
      else if(e.keyCode == 37) {
          this.leftPressed = false;
      }
    }

    //mousehandling
    mouseMoveHandler(e) {
      let relativeX = e.clientX - this.canvasWidth.offsetLeft;
      if ((relativeX > (this.paddleWidth / 2)) && (relativeX < (this.canvasWidth - (this.paddleWidth / 2)))) {
        this.paddleX = relativeX - (this.paddleWidth / 2);
      }
    }

    //score func
    drawScore() {
      this.ctx.font = "20px Roboto";
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fillText("SCORE: " + this.score, 8, 20);
    }

    //DRAW LOOP
    draw() {
      if (this.muted) {
        this.bloop.muted = true;
        this.victory.muted = true;
      } else {
        this.bloop.muted = false;
        this.victory.muted = false;
      }
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.drawBricks();
      this.drawBall();
      this.drawPaddle();
      this.drawScore();
      this.collisionDetection();

      if (this.play) {

        //edges of ball
        let ballRight = this.ballX + this.ballRadius;
        let ballLeft = this.ballX - this.ballRadius;
        let ballTop = this.ballY - this.ballRadius;
        let ballBottom = this.ballY + this.ballRadius;

    //bouncing off walls
      if (this.ballX + this.xSpeed > this.canvasWidth - this.ballRadius || this.ballX + this.xSpeed < this.ballRadius) {
          this.xSpeed = -this.xSpeed;
      }
      if (this.ballY + this.ySpeed < this.ballRadius) {
          this.ySpeed = -this.ySpeed;
      }
      if ((((ballRight + this.xSpeed >= this.paddleX) && (ballRight + this.xSpeed <= this.paddleWidth + this.paddleX)) ||
           ((ballLeft + this.xSpeed >= this.paddleX) && (ballLeft + this.xSpeed <= this.paddleX - this.paddleWidth))) &&
            (ballBottom >= this.canvasHeight - this.paddleHeight)) {
              if (!this.hitPaddleLastFrame) {
                this.hitPaddleLastFrame = true;
                this.ySpeed = -this.ySpeed;
              } else {
                this.hitPaddleLastFrame = true;
              }

            } else {
              this.hitPaddleLastFrame = false;
            }
          //losing if the ball goes out the bottom
      if (this.ballY + this.ySpeed > this.canvasHeight - this.ballRadius) {
              this.xSpeed = 0;
              this.ySpeed = 0;
              alert("GAME OVER! PRESS ENTER TO TRY AGAIN");
              document.location.reload();
          }

    //moving the paddle
      if(this.rightPressed && this.paddleX < this.canvasWidth - this.paddleWidth) {
        this.paddleX += 7;
      }
      else if(this.leftPressed && this.paddleX > 0) {
          this.paddleX -= 7;
      }
    //changing ball position
      this.ballX += this.xSpeed;
      this.ballY += this.ySpeed;

    }


      requestAnimationFrame(this.draw.bind(this));

      //end of draw
    }


    //GAME LOOP
    playGame() {
      this.bindKeys();
      this.draw();
    }



  //END OF CLASS
}

Game.canvasWidth = 700;
Game.canvasHeight = 500;


/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./gameFiles/util.js":
/*!***************************!*\
  !*** ./gameFiles/util.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//UTILITY

const Util = {

hue() {
  //Now calls the randomColor script, used to used this function:
  // return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  var color = randomColor();
  return color;
},

//random brick draw percentage generator
randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (Util);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map