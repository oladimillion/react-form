import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _get from "lodash/get";
import check from 'check-types';
import { getPath } from '../helpers/getPath';
import { useFormContext } from './useFormContext';

var getDepend = function getDepend() {
  return true;
};

export var useField = function useField(fieldName) {
  var _useFormContext = useFormContext(),
      values = _useFormContext.values,
      errors = _useFormContext.errors,
      setFieldValue = _useFormContext.setFieldValue,
      setFieldError = _useFormContext.setFieldError,
      handleChange = _useFormContext.handleChange,
      formValidationRules = _useFormContext.formValidationRules,
      formValidationDependencies = _useFormContext.formValidationDependencies,
      readOnly = _useFormContext.readOnly,
      submitting = _useFormContext.submitting; // setting field index for array fields


  var fieldIndex = null;

  if (fieldName.includes('.')) {
    fieldIndex = parseInt(fieldName.split('.')[1]);
  }

  var fieldValidationRules = _get(formValidationRules, getPath(fieldName), '');

  var computeDepend = _get(formValidationDependencies, getPath(fieldName), getDepend);

  var depend = null; // computing depend

  if (check["function"](computeDepend)) {
    // depend is computed from the dependent function
    depend = computeDepend(values, fieldName, fieldIndex);
  } else if (check.string(computeDepend)) {
    // depend is computed from the dependent field name
    depend = _get(values, computeDepend, null);
  } else if (check["boolean"](computeDepend)) {
    // depend is computed from the dependent boolean value
    depend = computeDepend;
  } else if (check.object(computeDepend)) {
    // depend is computed from one or more fields.
    // making sure provided fields matches the target fields
    depend = Object.entries(values).every(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          field = _ref2[0],
          dependValue = _ref2[1];

      var fieldValue = _get(values, field);

      return fieldValue === dependValue;
    });
  }

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