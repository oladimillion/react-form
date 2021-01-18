import styled from 'styled-components';
import { Link as BaseLink } from 'react-router-dom';
import { Text } from '../Text';
export var Link = styled(BaseLink).attrs(function (props) {
  return {
    className: 'Link'
  };
}).withConfig({
  displayName: "Link",
  componentId: "sc-8bva6j-0"
})(["", "{};"], Text);
Link.displayName = 'Link';
Link.defaultProps = {
  to: ''
};