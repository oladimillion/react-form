"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = require("../Text");

var Label = function Label(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(StyledText, (0, _extends2["default"])({}, rest, {
    as: "label"
  }), children);
};

exports.Label = Label;
var StyledText = (0, _styledComponents["default"])(_Text.Text).withConfig({
  displayName: "Label__StyledText",
  componentId: "pbegrj-0"
})(["font-weight:bold;font-size:1.1rem;"]);
Label.propTypes = {
  children: _propTypes["default"].any
};