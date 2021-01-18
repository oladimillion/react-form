"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyValue = void 0;

var _checkTypes = _interopRequireDefault(require("check-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isEmptyValue = function isEmptyValue(value) {
  return [null, undefined, '', 'null', 'undefined'].includes(value) || _checkTypes["default"].emptyObject(value) || _checkTypes["default"].emptyArray(value);
};

exports.isEmptyValue = isEmptyValue;