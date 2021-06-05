"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Radio = require("../../Components/Radio");

var Radio = function Radio(_ref) {
  var options = _ref.options,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["options"]);
  return /*#__PURE__*/_react["default"].createElement(_Radio.Radio, rest, options.map(function (_ref2, index) {
    var text = _ref2.text,
        value = _ref2.value;
    return /*#__PURE__*/_react["default"].createElement(_Radio.Radio.Item, {
      key: index,
      text: text,
      value: value
    });
  }));
};

exports.Radio = Radio;
Radio.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].string,
    text: _propTypes["default"].string
  })).isRequired,
  name: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].any
};