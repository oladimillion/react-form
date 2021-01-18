"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castArray = void 0;

var _checkTypes = _interopRequireDefault(require("check-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var castArray = function castArray(value) {
  if (_checkTypes["default"].array(value)) {
    return value;
  } else if (_typeof(value) === 'object') {
    return Array.from(value);
  }

  return [value];
};

exports.castArray = castArray;