import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Radio as SemanticRadio } from 'semantic-ui-react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { withToggle } from '../../hoc/withToggle';
var StyledSwitchery = styled(SemanticRadio).attrs(function () {
  return {
    className: 'Switchery'
  };
}).withConfig({
  displayName: "Switchery__StyledSwitchery",
  componentId: "sc-1rqgb9k-0"
})([""]);
export var Switchery = withToggle(StyledSwitchery);
Switchery.displayName = 'Switchery';
Switchery.defaultProps = {
  toggle: true
};
Switchery.propTypes = {
  toggle: PropTypes.bool
};
hoistNonReactStatics(Switchery, SemanticRadio);