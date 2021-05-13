import styled from 'styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Radio as SemanticRadio } from 'semantic-ui-react';
import PropTypes from 'prop-types';
export var Switchery = styled(SemanticRadio).attrs(function () {
  return {
    className: 'Switchery'
  };
}).withConfig({
  displayName: "Switchery",
  componentId: "sc-1rqgb9k-0"
})([""]);
Switchery.displayName = 'Switchery';
Switchery.defaultProps = {
  toggle: true
};
Switchery.propTypes = {
  toggle: PropTypes.bool
};
hoistNonReactStatics(Switchery, SemanticRadio);