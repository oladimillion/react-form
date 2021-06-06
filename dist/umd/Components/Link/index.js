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

var StyledRouterLink = (0, _styledComponents["default"])(_reactRouterDom.Link).attrs(function (props) {
  return {
    className: 'RouterLink'
  };
}).withConfig({
  displayName: "Link__StyledRouterLink",
  componentId: "sc-8bva6j-0"
})(["", "{};"], _Text.Text);
StyledRouterLink.displayName = 'RouterLink';
StyledRouterLink.defaultProps = {
  to: ''
};
var RouterLink = (0, _reactRouterDom.withRouter)(StyledRouterLink);
var StyledLink = (0, _styledComponents["default"])(_Text.Text).attrs(function (props) {
  return {
    as: 'a',
    className: 'Link'
  };
}).withConfig({
  displayName: "Link__StyledLink",
  componentId: "sc-8bva6j-1"
})([""]);
StyledLink.displayName = 'Link';
StyledLink.defaultProps = {
  href: null
};

var LinkComponent = function LinkComponent(props) {
  // eslint-disable-next-line no-unused-vars
  var href = props.href,
      to = props.to,
      children = props.children,
      staticContext = props.staticContext,
      rest = (0, _objectWithoutProperties2["default"])(props, ["href", "to", "children", "staticContext"]);
  return href ? /*#__PURE__*/_react["default"].createElement(StyledLink, (0, _extends2["default"])({
    target: '_blank',
    rel: 'noreferrer noopener'
  }, href && {
    href: href
  }, rest), children || href) : /*#__PURE__*/_react["default"].createElement(RouterLink, (0, _extends2["default"])({
    to: to
  }, rest), children || to);
};

var Link = (0, _styledComponents["default"])(LinkComponent).withConfig({
  displayName: "Link",
  componentId: "sc-8bva6j-2"
})([""]);
exports.Link = Link;
Link.defaultProps = {
  href: null,
  to: '',
  children: null
};
Link.propTypes = {
  href: _propTypes["default"].string,
  to: _propTypes["default"].string,
  children: _propTypes["default"].any
};