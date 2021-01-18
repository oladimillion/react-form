"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = require("../Text");

var ErrorMessage = function ErrorMessage(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(_Text.Text, (0, _extends2["default"])({
    as: "small",
    color: "#9f3a38"
  }, rest), children);
};

exports.ErrorMessage = ErrorMessage;
ErrorMessage.propTypes = {
  children: _propTypes["default"].any
};