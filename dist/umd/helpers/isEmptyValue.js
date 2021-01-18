"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyValue = void 0;

var _checkTypes = _interopRequireDefault(require("check-types"));

var isEmptyValue = function isEmptyValue(value) {
  return [null, undefined, '', 'null', 'undefined'].includes(value) || _checkTypes["default"].emptyObject(value) || _checkTypes["default"].emptyArray(value);
};

exports.isEmptyValue = isEmptyValue;