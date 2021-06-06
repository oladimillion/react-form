import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as BaseLink, withRouter } from 'react-router-dom';
import { Text } from '../Text';
var StyledRouterLink = styled(BaseLink).attrs(function (props) {
  return {
    className: 'RouterLink'
  };
}).withConfig({
  displayName: "Link__StyledRouterLink",
  componentId: "sc-8bva6j-0"
})(["", "{};"], Text);
StyledRouterLink.displayName = 'RouterLink';
StyledRouterLink.defaultProps = {
  to: ''
};
var RouterLink = withRouter(StyledRouterLink);
var StyledLink = styled(Text).attrs(function (props) {
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
var LinkComponent = withRouter(function (props) {
  var href = props.href,
      to = props.to,
      children = props.children,
      rest = _objectWithoutProperties(props, ["href", "to", "children"]);

  return href ? /*#__PURE__*/React.createElement(StyledLink, _extends({
    target: '_blank',
    rel: 'noreferrer noopener'
  }, href && {
    href: href
  }, rest), children || href) : /*#__PURE__*/React.createElement(RouterLink, _extends({
    to: to
  }, rest), children || to);
});
export var Link = styled(LinkComponent).withConfig({
  displayName: "Link",
  componentId: "sc-8bva6j-2"
})([""]);
Link.defaultProps = {
  href: null,
  to: '',
  children: null
};
Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.any
};