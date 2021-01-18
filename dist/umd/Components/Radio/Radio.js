"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var Radio = (0, _styledComponents["default"])(_semanticUiReact.Radio).attrs(function () {
  return {
    className: 'Radio'
  };
}).withConfig({
  displayName: "Radio",
  componentId: "sc-1v8lucy-0"
})([""]);
exports.Radio = Radio;
Radio.displayName = 'Radio';
Radio.defaultProps = {
  toggle: true
};
Radio.propTypes = {
  toggle: _propTypes["default"].bool
};
(0, _hoistNonReactStatics["default"])(Radio, _semanticUiReact.Radio);