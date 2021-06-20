"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _semanticUiReact = require("semantic-ui-react");

var _withToggle = require("../../hoc/withToggle");

var Checkbox = (0, _withToggle.withToggle)(_semanticUiReact.Checkbox);
exports.Checkbox = Checkbox;
Checkbox.displayName = 'Checkbox';
(0, _hoistNonReactStatics["default"])(Checkbox, _semanticUiReact.Checkbox);