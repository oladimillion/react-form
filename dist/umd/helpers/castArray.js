"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castArray = void 0;

var _checkTypes = _interopRequireDefault(require("check-types"));

var castArray = function castArray(value) {
  if (_checkTypes["default"].array(value)) {
    return value;
  } else if (_checkTypes["default"].object(value)) {
    return Array.from(value);
  }

  return [value];
};

exports.castArray = castArray;