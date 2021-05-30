"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubmitButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../../Components/Button");

var _hooks = require("../../hooks");

var SubmitButton = function SubmitButton(props) {
  var children = props.children,
      disabled = props.disabled,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "disabled"]);

  var _useFormContext = (0, _hooks.useFormContext)(),
      submitting = _useFormContext.submitting,
      readOnly = _useFormContext.readOnly;

  return /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
    loading: submitting,
    disabled: submitting || readOnly || disabled
  }, rest), children);
};

exports.SubmitButton = SubmitButton;
SubmitButton.defaultProps = {
  type: 'submit',
  primary: true
};
SubmitButton.propTypes = {
  children: _propTypes["default"].any,
  type: _propTypes["default"].string
};