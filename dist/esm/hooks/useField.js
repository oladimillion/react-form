import _get from "lodash/get";
import check from 'check-types';
import { getPath } from '../helpers/getPath';
import { getComputedDepend } from '../helpers/getComputedDepend';
import { useFormContext } from './useFormContext';
export var useField = function useField(fieldName) {
  check.assert.string(fieldName, 'fieldName must be provided');

  var _useFormContext = useFormContext(),
      values = _useFormContext.values,
      errors = _useFormContext.errors,
      setFieldValue = _useFormContext.setFieldValue,
      setFieldError = _useFormContext.setFieldError,
      handleChange = _useFormContext.handleChange,
      formValidationRules = _useFormContext.formValidationRules,
      formValidationDependencies = _useFormContext.formValidationDependencies,
      readOnly = _useFormContext.readOnly,
      submitting = _useFormContext.submitting; // field index


  var fieldIndex = null;

  if ((fieldName || '').includes('.')) {
    fieldIndex = parseInt(fieldName.split('.')[1]);
  } // validation rules associated with fieldName


  var fieldValidationRules = _get(formValidationRules, getPath(fieldName), ''); // computing dependencies of fieldName


  var depend = getComputedDepend(formValidationDependencies, getPath(fieldName))(values, fieldName, fieldIndex);
  var required = fieldValidationRules.includes('required');

  var value = _get(values, fieldName);

  var error = _get(errors, fieldName, []);

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
    submitting: submitting,
    depend: depend
  };
};