import React from 'react'
import styled from 'styled-components'
import hoistNonReactStatics from 'hoist-non-react-statics';
import { layout, space } from 'styled-system'
import { Button as SemanticButton } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const ButtonComponent = (props) => {
  const { children, ...rest } = props
  return <SemanticButton {...rest}>{children}</SemanticButton>
}

export const Button = styled(ButtonComponent)(
  space,
  layout,
)

Button.displayName = 'Button'

Button.propTypes = { 
  ...space.propTypes,
  ...layout.propTypes,
  children: PropTypes.any,
}

hoistNonReactStatics(Button, SemanticButton)
