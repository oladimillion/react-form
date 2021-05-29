"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _semanticUiReact = require("semantic-ui-react");

var _withToggle = require("../../hoc/withToggle");

var StyledCheckbox = (0, _styledComponents["default"])(_semanticUiReact.Checkbox).attrs(function () {
  return {
    className: 'Checkbox'
  };
}).withConfig({
  displayName: "Checkbox__StyledCheckbox",
  componentId: "j1avh4-0"
})([""]);
var Checkbox = (0, _withToggle.withToggle)(StyledCheckbox);
exports.Checkbox = Checkbox;
Checkbox.displayName = 'Checkbox';
(0, _hoistNonReactStatics["default"])(Checkbox, _semanticUiReact.Checkbox);