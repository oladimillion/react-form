"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;

var _checkTypes = _interopRequireDefault(require("check-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isNumber = function isNumber(value) {
  return _checkTypes["default"].number(Number(value));
};

exports.isNumber = isNumber;