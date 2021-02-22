"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContext = void 0;

var _react = _interopRequireDefault(require("react"));

var FormContext = /*#__PURE__*/_react["default"].createContext({
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

exports.FormContext = FormContext;