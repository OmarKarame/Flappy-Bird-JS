"use strict";

var _bird = _interopRequireDefault(require("./bird.js"));

var _input = _interopRequireDefault(require("./input.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var canvas = document.querySelector("#game-screen");
var context = canvas.getContext("2d"); // game dimensions

var gameWidth = canvas.width;
var gameHeight = canvas.height; // time info

var initialTime = 1; // creates a new object (Bird) called flappy

var flappy = new _bird["default"](gameWidth, gameHeight);
new _input["default"](flappy); // creates a game loop to update the screen continuously

function gameLoop(finalTime) {
  // --physics-- dt = tfinal - tinitial
  var deltaTime = finalTime - initialTime; // setting the new initial time to be last frame's final time

  initialTime = finalTime; //clears screen every frame

  context.clearRect(0, 0, gameWidth, gameHeight);
  flappy.update(deltaTime);
  flappy.draw(context);
  requestAnimationFrame(gameLoop);
}

gameLoop(); // context.fillStyle = '#000';
// context.fillRect(150, 330, 100, 100);
// context.beginPath()
// context.moveTo(190, 415)
// context.lineTo(230, 415)
// context.strokeStyle = 'black'
// context.lineWidth = 10;
// context.stroke()
// context.arc(canvas.width / 2, canvas.height / 2, 55, 0, Math.PI * 2, false);
// context.fill();