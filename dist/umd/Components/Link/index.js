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

var RouterLink = (0, _styledComponents["default"])(_reactRouterDom.Link).attrs(function (props) {
  return {
    className: 'RouterLink'
  };
}).withConfig({
  displayName: "Link__RouterLink",
  componentId: "sc-8bva6j-0"
})(["", "{};"], _Text.Text);
RouterLink.displayName = 'RouterLink';
RouterLink.defaultProps = {
  to: ''
};
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
var LinkComponent = (0, _reactRouterDom.withRouter)(function (props) {
  var href = props.href,
      to = props.to,
      children = props.children,
      rest = (0, _objectWithoutProperties2["default"])(props, ["href", "to", "children"]);
  return href ? /*#__PURE__*/_react["default"].createElement(StyledLink, (0, _extends2["default"])({
    target: '_blank',
    rel: 'noreferrer noopener'
  }, href && {
    href: href
  }, rest), children || href) : /*#__PURE__*/_react["default"].createElement(RouterLink, (0, _extends2["default"])({
    to: to
  }, rest), children);
});

var Link = function Link(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(LinkComponent, props));
};

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