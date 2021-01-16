import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../Text'

export const Label = ({ children, ...rest }) =>  (
  <StyledText {...rest} as='label'>{children}</StyledText>
)

const StyledText = styled(Text)`
  font-weight: bold;
  font-size: 1.1rem;
`

Label.propTypes = {
  children: PropTypes.any
}
