import { get } from 'lodash'
import check from 'check-types'
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
  const computeDepend = get(
    formValidationDependencies,
    getPath(fieldName),
    getDepend
  )

  let depend = null

  // computing depend
  if (check.function(computeDepend)) {
    // depend is computed from the dependent function
    depend = computeDepend(values, fieldName, fieldIndex)
  } else if (check.string(computeDepend)) {
    // depend is computed from the dependent field name
    depend = get(values, computeDepend, null)
  } else if (check.boolean(computeDepend)) {
    // depend is computed from the dependent boolean value
    depend = computeDepend
  } else if (check.object(computeDepend)) {
    // depend is computed from one or more fields.
    // making sure provided fields matches the target fields
    depend = Object.entries(values).every(([field, dependValue]) => {
      let fieldValue = get(values, field)
      return fieldValue === dependValue
    })
  }

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
