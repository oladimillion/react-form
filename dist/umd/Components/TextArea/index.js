"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _semanticUiReact = require("semantic-ui-react");

var _styled = require("../styled");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledTextArea = (0, _styledComponents["default"])(_semanticUiReact.TextArea).withConfig({
  displayName: "TextArea__StyledTextArea",
  componentId: "sc-5y0yh4-0"
})({
  resize: 'none',
  border: '1px solid rgba(34,36,38,.15)',
  'font-family': "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  'border-radius': '5px'
}, _styledSystem.space, _styledSystem.layout, function (props) {
  return "\n    &:focus {\n      border-color: #85b7d9;\n      background: #fff;\n      color: rgba(0,0,0,.8);\n      box-shadow: none;\n      outline: none;\n    }\n  ";
});

var TextAreaWrapper = _styledComponents["default"].div.withConfig({
  displayName: "TextArea__TextAreaWrapper",
  componentId: "sc-5y0yh4-1"
})(["textarea{", " ", " &:focus{border-color:#85b7d9;}}"], function (_ref) {
  var error = _ref.error;
  return error && "\n      background-color: #fff6f6;\n      border-color: #e0b4b4;\n      color: #9f3a38;\n      box-shadow: none;\n    ";
}, _styled.disabled);

var TextArea = function TextArea(props) {
  var error = props.error,
      disabled = props.disabled,
      rest = (0, _objectWithoutProperties2["default"])(props, ["error", "disabled"]);
  return /*#__PURE__*/_react["default"].createElement(TextAreaWrapper, {
    error: error,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(StyledTextArea, (0, _extends2["default"])({}, rest, {
    disabled: disabled
  })));
};

exports.TextArea = TextArea;
TextArea.displayName = 'TextArea';
TextArea.defaultProps = {
  p: 3,
  width: '100%',
  error: false,
  value: ''
};
TextArea.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _styledSystem.space.propTypes), _styledSystem.layout.propTypes), {}, {
  error: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].any]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
});