"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switchery = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _withToggle = require("../../hoc/withToggle");

var Switchery = (0, _withToggle.withToggle)(_semanticUiReact.Radio);
exports.Switchery = Switchery;
Switchery.displayName = 'Switchery';
Switchery.defaultProps = {
  toggle: true
};
Switchery.propTypes = {
  toggle: _propTypes["default"].bool
};
(0, _hoistNonReactStatics["default"])(Switchery, _semanticUiReact.Radio);