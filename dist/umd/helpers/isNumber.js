"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;

var _checkTypes = _interopRequireDefault(require("check-types"));

var isNumber = function isNumber(value) {
  return _checkTypes["default"].number(Number(value));
};

exports.isNumber = isNumber;