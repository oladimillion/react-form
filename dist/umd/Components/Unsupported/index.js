"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Unsupported = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = require("../Text");

var Unsupported = function Unsupported(_ref) {
  var type = _ref.type;
  return /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    mb: 2,
    as: 'div'
  }, "Field Type ", /*#__PURE__*/_react["default"].createElement("b", null, type), " not supported");
};

exports.Unsupported = Unsupported;
Unsupported.defaultProps = {
  type: 'unknown'
};
Unsupported.propTypes = {
  type: _propTypes["default"].string
};