"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _styledSystem = require("styled-system");

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ButtonComponent = function ButtonComponent(props) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, rest, children);
};

var Button = (0, _styledComponents["default"])(ButtonComponent).withConfig({
  displayName: "Button",
  componentId: "sc-19mvw3p-0"
})(_styledSystem.space, _styledSystem.layout);
exports.Button = Button;
Button.displayName = 'Button';
Button.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _styledSystem.space.propTypes), _styledSystem.layout.propTypes), {}, {
  children: _propTypes["default"].any
});
(0, _hoistNonReactStatics["default"])(Button, _semanticUiReact.Button);