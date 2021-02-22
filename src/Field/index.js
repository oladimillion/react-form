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
  ErrorMessage as BaseErrorMessage,
  Label as BaseLabel,
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
    Component: CustomField,
    disabled,
    ErrorMessage: CustomErrorMessage,
    Label: CustomLabel,
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

  const Component = CustomField || get(InputComponentTypes, type, Unsupported)
  const FieldComponent = React.useCallback(
    props => <Component {...props} />,
    []
  )
  const isFileField = type === fieldTypes.FILE

  const fieldValue = React.useMemo(() => {
    return isFileField ? {} : { value: value || '' }
  }, [value, isFileField])

  const errors = castArray(error)

  const renderLabel = () => {
    if (CustomLabel) {
      return <CustomLabel required={required} label={label} />
    }
    return label && <BaseLabel>{label}</BaseLabel>
  }

  const renderErrorMessage = () => {
    if (CustomErrorMessage) {
      return <CustomErrorMessage errors={errors} />
    }
    return errors.map(
      (error, index) =>
        !isEmptyValue(error) && (
          <BaseErrorMessage key={index}>{error}</BaseErrorMessage>
        )
    )
  }

  // redering nothing if depend rule is not met
  if (!depend) return null

  return (
    <FlexBox flexDirection={'column'} my={3} width={'100%'}>
      <FlexBox mb={2}>
        {renderLabel()}
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
      {renderErrorMessage()}
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
  Label: null,
  ErrorMessage: null,
}

Field.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  Label: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  ErrorMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  label: PropTypes.string,
  useFileLink: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
}
