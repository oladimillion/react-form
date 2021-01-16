import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../Text'

export const SuccessMessage = ({ children, ...rest }) =>  (
  <Text as='small' color='#277927' {...rest}>{children}</Text>
)

SuccessMessage.propTypes = {
  children: PropTypes.any
}
