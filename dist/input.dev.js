"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bird = _interopRequireDefault(require("./bird.js "));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function InputHandler(flappy) {
  _classCallCheck(this, InputHandler);

  document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
      case 32:
        flappy.jump();
    }
  });
};

exports["default"] = InputHandler;