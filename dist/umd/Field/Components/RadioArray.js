"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioArray = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Components = require("../../Components");

var RadioArray = function RadioArray(_ref) {
  var name = _ref.name,
      value = _ref.value,
      options = _ref.options,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["name", "value", "options"]);
  return /*#__PURE__*/_react["default"].createElement(_Components.RadioArray, (0, _extends2["default"])({
    name: name,
    value: value
  }, rest), options.map(function (_ref2, index) {
    var text = _ref2.text,
        value = _ref2.value;
    return /*#__PURE__*/_react["default"].createElement(_Components.RadioArray.Item, {
      key: index,
      text: text,
      value: value
    });
  }));
};

exports.RadioArray = RadioArray;
RadioArray.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].string,
    text: _propTypes["default"].string
  })).isRequired,
  name: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].any
};