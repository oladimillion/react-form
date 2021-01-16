import React from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'
import check from 'check-types';
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
  Label
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
  [fieldTypes.EMAIL]: (props) => <TextInput {...props} type='email' />,
  [fieldTypes.URL]: (props) => <TextInput {...props} type='url' />,
  [fieldTypes.PASSWORD]: (props) => <TextInput {...props} type='password' />,
  [fieldTypes.FILE]: (props) => <TextInput {...props} type='file' />,
  [fieldTypes.NUMBER]: (props) => <TextInput {...props} type='text' />,
}

export const Field = (props) => {

  const { 
    label, 
    type, 
    includeFileLink,
    Component: CustomField, 
    disabled,
    ...rest 
  } = props

  const {
    error,
    value,
    onChange,
    onBlur,
    required,
    readOnly,
  } = useField(props.name)

  const Component = CustomField || get(InputComponentTypes, type, Unsupported)
  const FieldComponent = React.useCallback((props) => <Component  {...props} />, [])
  const isFileField = type === fieldTypes.FILE

  const fieldValue = React.useMemo(() => {
    return isFileField ? {} : { value: value || ''} 
  }, [value, isFileField])

  const errors = check.array(error) ? error : [error]

  return (
    <FlexBox flexDirection='column' my={3}>
      <FlexBox mb={2}>
        {label && <Label>{label}</Label>}
        {required && <Required as='span'>*</Required>}
        {(isFileField && includeFileLink) && castArray(value).map((link, index) => {
          return check.string(link) && (
            <FileLink 
              key={index}
              href={link} 
              target='_blank'
              rel='noopener'>
              {link}
            </FileLink>
        )})}
      </FlexBox>
      <FieldComponent 
        {...rest}
        {...fieldValue}
        disabled={readOnly || disabled}
        type={type}
        onChange={onChange} 
        onBlur={onBlur} 
        error={!isEmptyValue(error)} 
      />
      {errors.map((error, index) => (
        !isEmptyValue(error) && (
          <ErrorMessage key={index}>
            {error}
          </ErrorMessage>
        )
      ))}
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
  includeFileLink: true,
}

Field.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  label: PropTypes.string,
  includeFileLink: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
}

