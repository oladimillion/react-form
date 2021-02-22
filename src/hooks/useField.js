import { get } from 'lodash'
import { getPath } from '../helpers/getPath'
import { useFormContext } from './useFormContext'

const getDepend = () => true

export const useField = fieldName => {
  const {
    values,
    errors,
    setFieldValue,
    setFieldError,
    handleChange,
    formValidationRules,
    formValidationDependencies,
    readOnly,
    submitting,
  } = useFormContext()

  // setting field index for array fields
  let fieldIndex = null
  if (fieldName.includes('.')) {
    fieldIndex = parseInt(fieldName.split('.')[1])
  }

  const fieldValidationRules = get(formValidationRules, getPath(fieldName), '')
  const depend = get(
    formValidationDependencies, 
    getPath(fieldName), 
    getDepend
  )(values, fieldName, fieldIndex)
  const required = fieldValidationRules.includes('required')
  const value = get(values, fieldName)
  const error = get(errors, fieldName, [])

  return {
    value,
    error,
    onChange: handleChange,
    setValue: value => setFieldValue(fieldName, value),
    setError: error => setFieldError(fieldName, error),
    onBlur: () => setFieldValue(fieldName, value),
    handleChange,
    fieldValidationRules,
    required,
    readOnly,
    submitting,
    depend,
  }
}
