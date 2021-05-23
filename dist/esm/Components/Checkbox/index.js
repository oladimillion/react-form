import styled from 'styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react';
import { withToggle } from '../../hoc/withToggle';
var StyledCheckbox = styled(SemanticCheckbox).attrs(function () {
  return {
    className: 'Checkbox'
  };
}).withConfig({
  displayName: "Checkbox__StyledCheckbox",
  componentId: "j1avh4-0"
})([""]);
export var Checkbox = withToggle(StyledCheckbox);
Checkbox.displayName = 'Checkbox';
hoistNonReactStatics(Checkbox, SemanticCheckbox);