import React from 'react';
export var FormContext = /*#__PURE__*/React.createContext({
  setFormValue: function setFormValue() {},
  setFormError: function setFormError() {},
  setFieldValue: function setFieldValue() {},
  setFieldError: function setFieldError() {},
  setSubmitting: function setSubmitting() {},
  resetForm: function resetForm() {},
  onChange: function onChange() {},
  validateForm: function validateForm() {},
  validateField: function validateField() {},
  submitting: false,
  dirty: false,
  readOnly: false,
  values: {},
  errors: {},
  formValidationRules: {},
  formValidationDependencies: {}
});