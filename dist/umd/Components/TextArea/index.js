"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _semanticUiReact = require("semantic-ui-react");

var _styled = require("../styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  textarea {\n    ", "\n    ", "\n    &:focus {\n      border-color: #85b7d9;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTextArea = (0, _styledComponents["default"])(_semanticUiReact.TextArea)({
  resize: 'none',
  border: '1px solid rgba(34,36,38,.15)',
  'font-family': "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  'border-radius': '5px'
}, _styledSystem.space, _styledSystem.layout, function (props) {
  return "\n    &:focus {\n      border-color: #85b7d9;\n      background: #fff;\n      color: rgba(0,0,0,.8);\n      box-shadow: none;\n    }\n  ";
});

var TextAreaWrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var error = _ref.error;
  return error && "\n      background-color: #fff6f6;\n      border-color: #e0b4b4;\n      color: #9f3a38;\n      box-shadow: none;\n    ";
}, _styled.disabled);

var TextArea = function TextArea(props) {
  var error = props.error,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["error", "disabled"]);

  return /*#__PURE__*/_react["default"].createElement(TextAreaWrapper, {
    error: error,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(StyledTextArea, _extends({}, rest, {
    disabled: disabled
  })));
};

exports.TextArea = TextArea;
TextArea.displayName = 'TextArea';
TextArea.defaultProps = {
  p: 3,
  width: '100%',
  error: false
};
TextArea.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _styledSystem.space.propTypes), _styledSystem.layout.propTypes), {}, {
  error: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].any])
});