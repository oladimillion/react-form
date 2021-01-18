"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Text = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: 'Text',
    as: props.as
  };
}).withConfig({
  displayName: "Text",
  componentId: "sc-1lncnwv-0"
})(["", ";", ";", ";", ";", ";"], _styledSystem.space, _styledSystem.layout, _styledSystem.color, _styledSystem.typography, _styledSystem.shadow);

exports.Text = Text;
Text.displayName = 'Text';
Text.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styledSystem.space.propTypes), _styledSystem.layout.propTypes), _styledSystem.color.propTypes), _styledSystem.typography.propTypes), _styledSystem.shadow.propTypes);
Text.defaultProps = {
  as: 'p'
};