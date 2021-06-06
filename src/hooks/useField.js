import { get } from 'lodash'
import check from 'check-types'
import { getPath } from '../helpers/getPath'
import { getComputedDepend } from '../helpers/getComputedDepend'
import { useFormContext } from './useFormContext'

export const useField = fieldName => {
  check.assert.string(fieldName, 'fieldName must be provided')

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

  // field index
  let fieldIndex = null
  if ((fieldName || '').includes('.')) {
    fieldIndex = parseInt(fieldName.split('.')[1])
  }

  // validation rules associated with fieldName
  const fieldValidationRules = get(formValidationRules, getPath(fieldName), '')

  // computing dependencies of fieldName
  const depend = getComputedDepend(
    formValidationDependencies,
    getPath(fieldName)
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
