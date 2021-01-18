import styled from 'styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Radio as SemanticRadio } from 'semantic-ui-react';
import PropTypes from 'prop-types';
export var Radio = styled(SemanticRadio).attrs(function () {
  return {
    className: 'Radio'
  };
}).withConfig({
  displayName: "Radio",
  componentId: "sc-1v8lucy-0"
})([""]);
Radio.displayName = 'Radio';
Radio.defaultProps = {
  toggle: true
};
Radio.propTypes = {
  toggle: PropTypes.bool
};
hoistNonReactStatics(Radio, SemanticRadio);