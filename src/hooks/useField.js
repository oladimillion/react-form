import { get } from 'lodash'
import { getPath } from '../helpers/getPath'
import { useFormContext } from './useFormContext'

export const useField = (fieldName) => {
  const {
    values,
    errors,
    setFieldValue,
    setFieldError,
    handleChange,
    formValidationRules,
    readOnly,
    submitting,
  } = useFormContext()

  const fieldValidationRules = get(formValidationRules, getPath(fieldName), '')
  const required = fieldValidationRules.includes('required')
  const value = get(values, fieldName)
  const error = get(errors, fieldName, [])

  return {
    value,
    error,
    onChange: handleChange,
    setValue: (value) => setFieldValue(fieldName, value),
    setError: (error) => setFieldError(fieldName, error),
    onBlur: () => setFieldValue(fieldName, value),
    handleChange,
    fieldValidationRules, 
    required,
    readOnly,
    submitting,
  }
}

