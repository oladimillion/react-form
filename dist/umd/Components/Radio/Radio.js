"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Radio = (0, _styledComponents["default"])(_semanticUiReact.Radio).attrs(function () {
  return {
    className: 'Radio'
  };
})(_templateObject());
exports.Radio = Radio;
Radio.displayName = 'Radio';
Radio.defaultProps = {
  toggle: true
};
Radio.propTypes = {
  toggle: _propTypes["default"].bool
};
(0, _hoistNonReactStatics["default"])(Radio, _semanticUiReact.Radio);