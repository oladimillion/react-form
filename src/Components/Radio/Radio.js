import styled from 'styled-components'
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Radio as SemanticRadio } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export const Radio = styled(SemanticRadio).attrs(() => ({
  className: 'Radio',
}))``

Radio.displayName = 'Radio'

Radio.defaultProps = {
  toggle: true,
}

Radio.propTypes = {
  toggle: PropTypes.bool,
}

hoistNonReactStatics(Radio, SemanticRadio)


