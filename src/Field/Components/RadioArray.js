import React from 'react'
import PropTypes from 'prop-types'
import { RadioArray as BaseRadioArray } from '../../Components'

export const RadioArray = ({ name, value, options, ...rest }) => (
  <BaseRadioArray name={name} value={value} {...rest}>
    {options.map(({ text, value }, index) => (
      <BaseRadioArray.Item key={index} text={text} value={value} />
    ))}
  </BaseRadioArray>
)

RadioArray.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
} 
