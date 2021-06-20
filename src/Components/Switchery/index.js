import PropTypes from 'prop-types'
import { Radio as SemanticRadio } from 'semantic-ui-react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { withToggle } from '../../hoc/withToggle'

export const Switchery = withToggle(SemanticRadio)

Switchery.displayName = 'Switchery'

Switchery.defaultProps = {
  toggle: true,
}

Switchery.propTypes = {
  toggle: PropTypes.bool,
}

hoistNonReactStatics(Switchery, SemanticRadio)
