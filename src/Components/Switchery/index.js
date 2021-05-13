import styled from 'styled-components'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Radio as SemanticRadio } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export const Switchery = styled(SemanticRadio).attrs(() => ({
  className: 'Switchery',
}))``

Switchery.displayName = 'Switchery'

Switchery.defaultProps = {
  toggle: true,
}

Switchery.propTypes = {
  toggle: PropTypes.bool,
}

hoistNonReactStatics(Switchery, SemanticRadio)
