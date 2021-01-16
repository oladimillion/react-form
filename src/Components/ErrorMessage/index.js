import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../Text'

export const ErrorMessage = ({ children, ...rest }) =>  (
  <Text as='small' color='#9f3a38' {...rest}>{children}</Text>
)

ErrorMessage.propTypes = {
  children: PropTypes.any
}
