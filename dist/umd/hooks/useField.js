"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useField = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _getPath = require("../helpers/getPath");

var _useFormContext2 = require("./useFormContext");

var useField = function useField(fieldName) {
  var _useFormContext = (0, _useFormContext2.useFormContext)(),
      values = _useFormContext.values,
      errors = _useFormContext.errors,
      setFieldValue = _useFormContext.setFieldValue,
      setFieldError = _useFormContext.setFieldError,
      handleChange = _useFormContext.handleChange,
      formValidationRules = _useFormContext.formValidationRules,
      readOnly = _useFormContext.readOnly,
      submitting = _useFormContext.submitting;

  var fieldValidationRules = (0, _get2["default"])(formValidationRules, (0, _getPath.getPath)(fieldName), '');
  var required = fieldValidationRules.includes('required');
  var value = (0, _get2["default"])(values, fieldName);
  var error = (0, _get2["default"])(errors, fieldName, []);
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

exports.useField = useField;