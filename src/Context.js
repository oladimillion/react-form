import React from 'react'

export const FormContext = React.createContext({
  setFieldValue: () => {},
  setFieldError: () => {},
  setSubmitting: () => {},
  resetForm: () => {},
  onChange: () => {},
  validateForm: () => {},
  validateField: () => {},
  submitting: false,
  dirty: false,
  readOnly: false,
  values: {},
  errors: {},
  formValidationRules: {},
})
