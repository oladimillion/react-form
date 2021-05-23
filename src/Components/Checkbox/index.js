import styled from 'styled-components'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react'
import { withToggle } from '../../hoc/withToggle'

const StyledCheckbox = styled(SemanticCheckbox).attrs(() => ({
  className: 'Checkbox',
}))``

export const Checkbox = withToggle(StyledCheckbox)

Checkbox.displayName = 'Checkbox'

hoistNonReactStatics(Checkbox, SemanticCheckbox)
