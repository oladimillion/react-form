"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _Context = require("../Context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFormContext = function useFormContext() {
  return _react["default"].useContext(_Context.FormContext);
};

exports.useFormContext = useFormContext;