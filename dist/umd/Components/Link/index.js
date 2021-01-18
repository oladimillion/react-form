"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _Text = require("../Text");

var Link = (0, _styledComponents["default"])(_reactRouterDom.Link).attrs(function (props) {
  return {
    className: 'Link'
  };
}).withConfig({
  displayName: "Link",
  componentId: "sc-8bva6j-0"
})(["", "{};"], _Text.Text);
exports.Link = Link;
Link.displayName = 'Link';
Link.defaultProps = {
  to: ''
};