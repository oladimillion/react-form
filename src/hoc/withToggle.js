import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'

export const withToggle = WrappedComponent => {
  const WithToggle = props => {
    const { value, onChange, ...rest } = props

    // casting value to boolean
    const checked = Boolean(value)

    const handleChange = (_, { checked, name }) => {
      return onChange({ target: { name, value: checked } })
    }

    return (
      <WrappedComponent {...rest} checked={checked} onChange={handleChange} />
    )
  }

  WithToggle.defaultProps = {
    value: false,
  }

  WithToggle.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func,
  }

  WithToggle.displayName = 'WithToggle'

  return hoistNonReactStatics(WithToggle, WrappedComponent)
}
