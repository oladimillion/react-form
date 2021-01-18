function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", " {};\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import { Link as BaseLink } from 'react-router-dom';
import { Text } from '../Text';
export var Link = styled(BaseLink).attrs(function (props) {
  return {
    className: 'Link'
  };
})(_templateObject(), Text);
Link.displayName = 'Link';
Link.defaultProps = {
  to: ''
};