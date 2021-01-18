"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _Context = require("../Context");

var useFormContext = function useFormContext() {
  return _react["default"].useContext(_Context.FormContext);
};

exports.useFormContext = useFormContext;