"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioArray = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Components = require("../../Components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RadioArray = function RadioArray(_ref) {
  var name = _ref.name,
      value = _ref.value,
      options = _ref.options,
      rest = _objectWithoutProperties(_ref, ["name", "value", "options"]);

  return /*#__PURE__*/_react["default"].createElement(_Components.RadioArray, _extends({
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