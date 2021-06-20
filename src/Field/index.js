import React from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import check from 'check-types'
import { useField } from '../hooks'
import {
  FlexBox,
  Switchery,
  Select,
  TextArea,
  TextInput,
  Unsupported,
  Checkbox,
  ErrorMessage,
  Label,
} from '../Components'
import { Radio } from './Components/Radio'
import { FileLinks } from './Components/FileLinks'
import { isEmptyValue, fieldTypes, castArray } from '../helpers'
import { Required, FieldWrapper } from './styled'

const InputComponentTypes = {
  [fieldTypes.TEXT]: TextInput,
  [fieldTypes.TEXTAREA]: TextArea,
  [fieldTypes.SELECT]: Select,
  [fieldTypes.CHECKBOX]: Checkbox,
  [fieldTypes.RADIO]: Radio,
  [fieldTypes.SWITCH]: props => <Switchery {...props} type={'radio'} />,
  [fieldTypes.EMAIL]: props => <TextInput {...props} type={'email'} />,
  [fieldTypes.URL]: props => <TextInput {...props} type={'url'} />,
  [fieldTypes.PASSWORD]: props => <TextInput {...props} type={'password'} />,
  [fieldTypes.FILE]: props => <TextInput {...props} type={'file'} />,
  [fieldTypes.NUMBER]: props => <TextInput {...props} type={'text'} />,
  [fieldTypes.DATE]: props => <TextInput {...props} type={'date'} />,
}

export const Field = props => {
  const {
    label,
    type,
    useFileLink,
    as,
    disabled,
    renderLabel,
    renderErrorMessage,
    name,
    ...rest
  } = props

  const {
    error,
    value,
    onChange,
    onBlur,
    required,
    readOnly,
    depend,
  } = useField(name)

  const isReadOnly = readOnly || disabled
  const Component = as || get(InputComponentTypes, type, Unsupported)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const FieldComponent = React.useCallback(Component, [])
  const isFileField = type === fieldTypes.FILE
  const isBooleanField =
    type === fieldTypes.SWITCH || type === fieldTypes.CHECKBOX
  const errors = castArray(error)

  // redering nothing if depend rule is not met
  if (!depend) return null

  return (
    <FieldWrapper
      flexDirection={'column'}
      my={3}
      width={'100%'}
      isBooleanField={isBooleanField}
    >
      <FlexBox mb={2} flexWrap="wrap">
        {renderLabel({ required, label })}
        {required && <Required as={'span'}>*</Required>}
        {isFileField && useFileLink && <FileLinks value={value} />}
      </FlexBox>
      <FieldComponent
        {...rest}
        {...(!isFileField && { value })}
        disabled={isReadOnly}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        {...(!isBooleanField && { error: !isEmptyValue(error) })}
      />
      {renderErrorMessage({ errors })}
    </FieldWrapper>
  )
}

Field.defaultProps = {
  useFileLink: true,
  renderLabel: ({ label }) => {
    return label && <Label>{label}</Label>
  },
  renderErrorMessage: ({ errors }) => {
    return errors.map(
      (error, index) =>
        !isEmptyValue(error) && <ErrorMessage key={index}>{error}</ErrorMessage>
    )
  },
}

Field.propTypes = {
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  renderLabel: PropTypes.func,
  renderErrorMessage: PropTypes.func,
  label: PropTypes.string,
  useFileLink: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    })
  ),
}
