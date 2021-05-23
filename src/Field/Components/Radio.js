import React from 'react'
import PropTypes from 'prop-types'
import { Radio as BaseRadio } from '../../Components/Radio'

export const Radio = ({ options, ...rest }) => (
  <BaseRadio {...rest}>
    {options.map(({ text, value }, index) => (
      <BaseRadio.Item key={index} text={text} value={value} />
    ))}
  </BaseRadio>
)

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
}
