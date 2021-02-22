import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../Text'

export const Label = ({ children, ...rest }) => (
  <Text {...rest} as={'label'}>
    {children}
  </Text>
)

Label.propTypes = {
  children: PropTypes.any,
}
