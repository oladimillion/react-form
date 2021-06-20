"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _Text = require("../Text");

var RouterLink = (0, _styledComponents["default"])(_reactRouterDom.Link).withConfig({
  displayName: "Link__RouterLink",
  componentId: "sc-8bva6j-0"
})(["", "{};"], _Text.Text);
RouterLink.displayName = 'RouterLink';
RouterLink.defaultProps = {
  to: ''
};
var ExternalLink = (0, _styledComponents["default"])(_Text.Text).withConfig({
  displayName: "Link__ExternalLink",
  componentId: "sc-8bva6j-1"
})([""]);
ExternalLink.displayName = 'ExternalLink';
ExternalLink.defaultProps = {
  href: null,
  as: 'a',
  target: '_blank',
  rel: 'noreferrer noopener'
};

var Link = function Link(props) {
  var to = props.to,
      children = props.children,
      external = props.external,
      rest = (0, _objectWithoutProperties2["default"])(props, ["to", "children", "external"]);
  return external ? /*#__PURE__*/_react["default"].createElement(ExternalLink, rest, children || href) : /*#__PURE__*/_react["default"].createElement(RouterLink, (0, _extends2["default"])({
    to: to
  }, rest), children || to);
};

exports.Link = Link;
Link.defaultProps = {
  href: null,
  to: '',
  children: null,
  external: false
};
Link.propTypes = {
  href: _propTypes["default"].string,
  to: _propTypes["default"].string,
  children: _propTypes["default"].any,
  external: _propTypes["default"].bool
};