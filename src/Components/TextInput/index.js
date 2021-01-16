import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Input as SemanticInput } from 'semantic-ui-react'
import { disabled } from '../styled'

export const TextInput = styled(SemanticInput)(
  space,
  layout,
  disabled,
)

TextInput.displayName = 'TextInput'

TextInput.defaultProps = {
  width: '100%',
}

TextInput.propTypes = { 
  ...space.propTypes,
  ...layout.propTypes,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
}

hoistNonReactStatics(TextInput, SemanticInput)
