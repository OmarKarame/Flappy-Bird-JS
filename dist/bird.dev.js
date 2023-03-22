"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bird =
/*#__PURE__*/
function () {
  function Bird(gameWidth, gameHeight) {
    _classCallCheck(this, Bird);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight; // Each new bird will have the same radius, velocity, gravity, and will be automatically falling

    this.radius = 25;
    this.velocity = 0;
    this.gravity = 6;
    this.isJumping = false;
    this.isFalling = true;
    this.collision = false; // The bird will also be positiond in these coordinates

    this.position = {
      x: gameWidth / 2,
      y: gameHeight / 2
    };
  } // This funciton is called whem the user presses the space bar which sets falling to be false and jumping to be true


  _createClass(Bird, [{
    key: "jump",
    value: function jump() {
      this.isJumping = true;
      return this.isJumping;
    } // This draws the item (in this case the item being drawn is a circle)

  }, {
    key: "draw",
    value: function draw(context) {
      context.beginPath();
      context.fillStyle = "yellow";
      context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
      context.fill();
    } // This function updates what needs to happen to the object after every game loop

  }, {
    key: "update",
    value: function update(deltaTime) {
      if (!deltaTime) {
        return;
      }

      ; // This if statement runs when the bottom of the circle (the y coordinate which is at the circles center plus the radius)
      // It stops the bird from moving and ends the game

      if (this.position.y >= this.gameHeight - this.radius) {
        this.position.y = this.gameHeight - this.radius;
      } // This if statement checks if the bird is jumping
      else if (this.isJumping && !this.collision) {
          // This statement checks if the velocity is positive (if it is then the bird is falling downwards so the velocity must be reset)
          if (this.velocity > 0) {
            this.velocity = 0;
          } // The velocity then increases by 40 upwards (-40) until it reaches -150


          this.velocity = this.velocity - 40;
          this.isFalling = false; // Once the velocity gets below -150 the jumping stops and the falling becomes true 

          if (this.velocity < -150) {
            this.isJumping = false;
            this.isFalling = true;
          }
        } // The bird falls at an increasing rate of velocity + 6 every game loop
        else if (this.isFalling) {
            this.velocity += this.gravity;
            this.position.y += this.velocity / deltaTime;
          }
    }
  }]);

  return Bird;
}();

exports["default"] = Bird;