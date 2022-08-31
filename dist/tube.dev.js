"use strict";

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
  }

  _createClass(Tubes, [{
    key: "draw",
    value: function draw(context) {
      context.fillrect();
    }
  }, {
    key: "update",
    value: function update(deltaTime) {}
  }]);

  return Tubes;
}();