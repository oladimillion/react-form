import React from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'
import check from 'check-types'
import { useField } from '../hooks'
import {
  Text,
  FlexBox,
  Radio,
  Select,
  TextArea,
  TextInput,
  Unsupported,
  ErrorMessage,
  Label,
} from '../Components'
import { RadioArray } from './Components/RadioArray'
import { isEmptyValue, fieldTypes, castArray } from '../helpers'

const InputComponentTypes = {
  [fieldTypes.TEXT]: TextInput,
  [fieldTypes.TEXTAREA]: TextArea,
  [fieldTypes.SELECT]: Select,
  [fieldTypes.CHECKBOX]: Checkbox,
  [fieldTypes.RADIO]: Radio,
  [fieldTypes.RADIO_ARRAY]: RadioArray,
  [fieldTypes.EMAIL]: props => <TextInput {...props} type={'email'} />,
  [fieldTypes.URL]: props => <TextInput {...props} type={'url'} />,
  [fieldTypes.PASSWORD]: props => <TextInput {...props} type={'password'} />,
  [fieldTypes.FILE]: props => <TextInput {...props} type={'file'} />,
  [fieldTypes.NUMBER]: props => <TextInput {...props} type={'text'} />,
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
  } = useField(props.name)

  const isReadOnly = readOnly || disabled

  const Component = as || get(InputComponentTypes, type, Unsupported)
  const FieldComponent = React.useCallback(Component, [])
  const isFileField = type === fieldTypes.FILE

  const fieldValue = React.useMemo(() => {
    return isFileField ? {} : { value: value || '' }
  }, [value, isFileField])

  const errors = castArray(error)

  // redering nothing if depend rule is not met
  if (!depend) return null

  return (
    <FlexBox flexDirection={'column'} my={3} width={'100%'}>
      <FlexBox mb={2}>
        {renderLabel({ required, label })}
        {required && <Required as={'span'}>*</Required>}
        {isFileField &&
          useFileLink &&
          castArray(value).map((link, index) => {
            return (
              check.string(link) && (
                <FileLink
                  key={index}
                  href={link}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  {link}
                </FileLink>
              )
            )
          })}
      </FlexBox>
      <FieldComponent
        {...rest}
        {...fieldValue}
        disabled={isReadOnly}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        error={!isEmptyValue(error)}
      />
      {renderErrorMessage({ errors })}
    </FlexBox>
  )
}

const Required = styled(Text)`
  font-size: 1.3rem;
  color: #9f3a38;
`

const FileLink = styled.a`
  margin-left: 8px;
`

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
}
