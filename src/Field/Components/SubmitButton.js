import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../Components/Button'
import { useFormContext } from '../../hooks'

export const SubmitButton = props => {
  const { children, disabled, ...rest } = props
  const { submitting, readOnly } = useFormContext()

  return (
    <Button
      loading={submitting}
      disabled={submitting || readOnly || disabled}
      {...rest}
    >
      {children}
    </Button>
  )
}

SubmitButton.defaultProps = {
  type: 'submit',
  primary: true,
}

SubmitButton.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
}
