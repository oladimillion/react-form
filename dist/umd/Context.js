"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormContext = /*#__PURE__*/_react["default"].createContext({
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
  formValidationRules: {}
});

exports.FormContext = FormContext;