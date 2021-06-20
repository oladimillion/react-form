import hoistNonReactStatics from 'hoist-non-react-statics'
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react'
import { withToggle } from '../../hoc/withToggle'

export const Checkbox = withToggle(SemanticCheckbox)

Checkbox.displayName = 'Checkbox'

hoistNonReactStatics(Checkbox, SemanticCheckbox)
