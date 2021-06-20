import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as BaseLink } from 'react-router-dom';
import { Text } from '../Text';
var RouterLink = styled(BaseLink).withConfig({
  displayName: "Link__RouterLink",
  componentId: "sc-8bva6j-0"
})(["", "{};"], Text);
RouterLink.displayName = 'RouterLink';
RouterLink.defaultProps = {
  to: ''
};
var ExternalLink = styled(Text).withConfig({
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
export var Link = function Link(props) {
  var to = props.to,
      children = props.children,
      external = props.external,
      rest = _objectWithoutProperties(props, ["to", "children", "external"]);

  return external ? /*#__PURE__*/React.createElement(ExternalLink, rest, children || href) : /*#__PURE__*/React.createElement(RouterLink, _extends({
    to: to
  }, rest), children || to);
};
Link.defaultProps = {
  href: null,
  to: '',
  children: null,
  external: false
};
Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.any,
  external: PropTypes.bool
};