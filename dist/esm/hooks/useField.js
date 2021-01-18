import { get } from 'lodash';
import { getPath } from '../helpers/getPath';
import { useFormContext } from './useFormContext';
export var useField = function useField(fieldName) {
  var _useFormContext = useFormContext(),
      values = _useFormContext.values,
      errors = _useFormContext.errors,
      setFieldValue = _useFormContext.setFieldValue,
      setFieldError = _useFormContext.setFieldError,
      handleChange = _useFormContext.handleChange,
      formValidationRules = _useFormContext.formValidationRules,
      readOnly = _useFormContext.readOnly,
      submitting = _useFormContext.submitting;

  var fieldValidationRules = get(formValidationRules, getPath(fieldName), '');
  var required = fieldValidationRules.includes('required');
  var value = get(values, fieldName);
  var error = get(errors, fieldName, []);
  return {
    value: value,
    error: error,
    onChange: handleChange,
    setValue: function setValue(value) {
      return setFieldValue(fieldName, value);
    },
    setError: function setError(error) {
      return setFieldError(fieldName, error);
    },
    onBlur: function onBlur() {
      return setFieldValue(fieldName, value);
    },
    handleChange: handleChange,
    fieldValidationRules: fieldValidationRules,
    required: required,
    readOnly: readOnly,
    submitting: submitting
  };
};