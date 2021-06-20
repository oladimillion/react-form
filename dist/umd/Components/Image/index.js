"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _semanticUiReact = require("semantic-ui-react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Image = (0, _styledComponents["default"])(_semanticUiReact.Image).withConfig({
  displayName: "Image",
  componentId: "sc-1ei3pgu-0"
})(["", ";", ";", ";"], _styledSystem.border, _styledSystem.layout, _styledSystem.background);
exports.Image = Image;
Image.displayName = 'Image';
Image.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _styledSystem.border.propTypes), _styledSystem.layout.propTypes), _styledSystem.background.propTypes);
Image.defaultProps = {
  as: 'img'
};