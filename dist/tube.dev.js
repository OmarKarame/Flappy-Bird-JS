"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tubes =
/*#__PURE__*/
function () {
  function Tubes(gameWidth, gameHeight) {
    _classCallCheck(this, Tubes);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    var gap = 250;
    this.gap = gap;
    this.width = 80;
    this.topHeight = Math.floor(Math.random() * (this.gameHeight / 1.5 - this.gameHeight / 4)) + this.gameHeight / 3;
    this.bottomHeight = this.gameHeight - this.topHeight - gap;
    this.velocity = -5;
    this.isMovingLeft = true;
    this.position = {
      x: gameWidth * 2,
      topY: 0,
      bottomY: this.topHeight + gap
    };
  }

  _createClass(Tubes, [{
    key: "draw",
    value: function draw(context) {
      context.fillStyle = "green";
      context.fillRect(this.position.x, this.position.topY, this.width, this.topHeight);
      context.fillRect(this.position.x, this.position.bottomY, this.width, this.bottomHeight);
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      if (!deltaTime) {
        return;
      }

      ;

      if (this.position.x <= -this.gameWidth + this.width) {
        this.position.x = this.gameWidth;
        this.topHeight = Math.floor(Math.random() * (this.gameHeight / 2 - this.gameHeight / 4)) + this.gameHeight / 3;
        this.position.bottomY = this.topHeight + this.gap;
        this.bottomHeight = this.gameHeight - this.topHeight - this.gap;
      } else if (this.isMovingLeft) {
        this.position.x += this.velocity;
      }
    }
  }]);

  return Tubes;
}();

exports["default"] = Tubes;