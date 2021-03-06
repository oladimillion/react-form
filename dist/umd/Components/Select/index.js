"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _semanticUiReact = require("semantic-ui-react");

var _styled = require("../styled");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Select = (0, _styledComponents["default"])(_semanticUiReact.Select).withConfig({
  displayName: "Select",
  componentId: "sc-1v2b2it-0"
})({
  width: '100%'
}, _styledSystem.space, _styledSystem.layout, _styled.disabled);
exports.Select = Select;
Select.displayName = 'Select';
Select.defaultProps = {
  search: true
};
Select.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _styledSystem.space.propTypes), _styledSystem.layout.propTypes), {}, {
  search: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].string,
    text: _propTypes["default"].string
  })).isRequired,
  error: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].any])
});
(0, _hoistNonReactStatics["default"])(Select, _semanticUiReact.Select);