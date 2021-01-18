"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castArray = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _checkTypes = _interopRequireDefault(require("check-types"));

var castArray = function castArray(value) {
  if (_checkTypes["default"].array(value)) {
    return value;
  } else if ((0, _typeof2["default"])(value) === 'object') {
    return Array.from(value);
  }

  return [value];
};

exports.castArray = castArray;