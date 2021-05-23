import React from 'react'
import styled from 'styled-components'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Form, Radio as SemanticRadio } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const RadioContext = React.createContext({
  value: null,
  onChange: () => {},
})

const RadioComponent = props => {
  const {
    children,
    onChange,
    name,
    disabled,
    value: fieldValue,
    ...rest
  } = props

  const [value, setValue] = React.useState(fieldValue)

  return (
    <RadioContext.Provider
      value={{
        value,
        name,
        disabled,
        setValue,
        onChange: value => {
          setValue(value)
          onChange({
            target: {
              name,
              value,
            },
          })
        },
      }}
    >
      <RadioWrapper {...rest}>{children}</RadioWrapper>
    </RadioContext.Provider>
  )
}

RadioComponent.defaultProps = {
  onChange: () => {},
  children: null,
  value: null,
  name: null,
}

const RadioComponentItem = props => {
  const { value, name, onChange, disabled } = React.useContext(RadioContext)
  const { Component, value: fieldValue, text, ...rest } = props
  const dataProps = {
    checked: fieldValue === value,
    onChange: () => onChange(fieldValue),
    label: text,
    name,
    disabled,
  }
  return (
    <Form.Field {...rest}>
      {Component ? (
        <Component {...dataProps} />
      ) : (
        <SemanticRadio {...dataProps} />
      )}
    </Form.Field>
  )
}

RadioComponentItem.defaultProps = {
  value: null,
  Component: null,
}

RadioComponentItem.propTypes = {
  value: PropTypes.any,
  text: PropTypes.string.isRequired,
  Component: PropTypes.any,
}

const RadioWrapper = styled.div.attrs(() => ({
  className: 'ui form',
}))`
  position: relative;
  max-width: 100%;
  font-size: 1rem;
`

RadioComponent.Item = RadioComponentItem

export const Radio = styled(RadioComponent).attrs(() => ({
  className: 'Radio',
}))``

Radio.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
}

Radio.displayName = 'Radio'

hoistNonReactStatics(Radio, RadioComponent)
