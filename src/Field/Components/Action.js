import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../Components/Button'
import { useFormContext } from '../../hooks'

export const Action = (props) => {
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

Action.defaultProps = {
  type: 'submit',
}

Action.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
}
