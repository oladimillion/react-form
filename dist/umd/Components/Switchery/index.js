"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switchery = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _withToggle = require("../../hoc/withToggle");

var StyledSwitchery = (0, _styledComponents["default"])(_semanticUiReact.Radio).attrs(function () {
  return {
    className: 'Switchery'
  };
}).withConfig({
  displayName: "Switchery__StyledSwitchery",
  componentId: "sc-1rqgb9k-0"
})([""]);
var Switchery = (0, _withToggle.withToggle)(StyledSwitchery);
exports.Switchery = Switchery;
Switchery.displayName = 'Switchery';
Switchery.defaultProps = {
  toggle: true
};
Switchery.propTypes = {
  toggle: _propTypes["default"].bool
};
(0, _hoistNonReactStatics["default"])(Switchery, _semanticUiReact.Radio);