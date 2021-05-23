import _extends from "@babel/runtime/helpers/extends";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _construct from "@babel/runtime/helpers/construct";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _cloneDeep from "lodash/cloneDeep";
import _set from "lodash/set";
import _get from "lodash/get";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import styled from 'styled-components';
import check from 'check-types';
import Validator from 'validatorjs';
import PropTypes from 'prop-types';
import { withErrorBoundary } from '../hoc';
import { isEmptyValue } from '../helpers/isEmptyValue';
import { getPath } from '../helpers/getPath';
import { getCleanValues } from '../helpers/getCleanValues';
import { FormContext } from '../Context';
import { buildValidationRules } from '../helpers/buildValidationRules';
import { buildValidationDependencies } from '../helpers/buildValidationDependencies';
import { buildFieldValidationMessages, buildFormValidationMessages } from '../helpers/buildValidationMessages';
import { fieldTypes } from '../helpers/fieldTypes';
var StyledForm = styled.form.withConfig({
  displayName: "Form__StyledForm",
  componentId: "gl7an6-0"
})([""]);

var FormComponent = function FormComponent(props) {
  var children = props.children,
      initialValues = props.initialValues,
      validationRules = props.validationRules,
      render = props.render,
      onSubmit = props.onSubmit,
      readOnly = props.readOnly,
      rest = _objectWithoutProperties(props, ["children", "initialValues", "validationRules", "render", "onSubmit", "readOnly"]);

  var composedValidationRules = React.useMemo(function () {
    return buildValidationRules(validationRules);
  }, [validationRules]);
  var composedValidationDependencies = React.useMemo(function () {
    return buildValidationDependencies(validationRules);
  }, [validationRules]);

  var _React$useState = React.useState(_objectSpread({}, initialValues)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      errors = _React$useState4[0],
      setErrors = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      submitting = _React$useState6[0],
      setSubmitting = _React$useState6[1]; // removing fields whose depend rule returns false


  var cleanValues = getCleanValues(values, composedValidationDependencies);

  var setFormValue = function setFormValue() {
    var newValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var useInitialValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    setValues(function (state) {
      return _objectSpread(_objectSpread({}, useInitialValues && state), newValues);
    });
  };

  var setFormError = function setFormError() {
    var newErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var useInitialErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    setErrors(function (state) {
      return _objectSpread(_objectSpread({}, useInitialErrors && state), newErrors);
    });
  };

  var setFieldError = function setFieldError(fieldName, fieldError) {
    setFormError(_set(_cloneDeep(errors), fieldName, fieldError));
  };

  var resetForm = function resetForm() {
    setValues({});
    setErrors({});
    setSubmitting(false);
  };

  var setFieldValue = function setFieldValue(fieldName, fieldValue) {
    var path = getPath(fieldName);

    var rules = _get(validationRules, path, {});

    var composedRules = _get(composedValidationRules, path, '');

    var composedMessage = buildFieldValidationMessages(fieldName, rules.message);

    if (rules.validation) {
      var validatorParams = [_objectSpread(_objectSpread({}, cleanValues), {}, _defineProperty({}, fieldName, fieldValue)), _defineProperty({}, fieldName, composedRules), composedMessage];

      var validator = _construct(Validator, validatorParams);

      validator.fails();
      setFieldError(fieldName, validator.errors.get(fieldName));
    }

    setFormValue(_set(_cloneDeep(values), fieldName, fieldValue));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
      var fails, validatorParams, validator;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event && event.preventDefault();
              fails = false;

              if (!check.emptyObject(validationRules)) {
                validatorParams = [cleanValues, composedValidationRules, buildFormValidationMessages(validationRules, cleanValues)];
                validator = _construct(Validator, validatorParams);
                fails = validator.fails();
                setFormError(validator.errors.all());
              }

              if (!(check.emptyObject(validationRules) || !fails)) {
                _context.next = 11;
                break;
              }

              _context.prev = 4;
              setSubmitting(true);
              _context.next = 8;
              return onSubmit({
                values: cleanValues,
                errors: errors,
                submitting: submitting,
                resetForm: resetForm,
                setFormError: setFormError,
                setFormValue: setFormValue
              });

            case 8:
              _context.prev = 8;
              setSubmitting(false);
              return _context.finish(8);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4,, 8, 11]]);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(e) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _e$target = e.target,
        files = _e$target.files,
        targetName = _e$target.name,
        targetValue = _e$target.value;
    var propsName = props.name,
        propsValue = props.value,
        type = props.type,
        multiple = props.multiple;
    var name = !isEmptyValue(targetName) ? targetName : propsName;
    var value = !isEmptyValue(targetValue) ? targetValue : propsValue;

    if (type === fieldTypes.FILE && multiple) {
      setFieldValue(name, files);
    } else if (type === fieldTypes.FILE) {
      setFieldValue(name, files[0]);
    } else {
      setFieldValue(name, value);
    }
  };

  var contextValue = {
    setFieldValue: setFieldValue,
    setFieldError: setFieldError,
    setSubmitting: setSubmitting,
    resetForm: resetForm,
    submitting: submitting,
    dirty: !isEmptyValue(errors),
    values: cleanValues,
    errors: errors,
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    formValidationRules: composedValidationRules,
    formValidationDependencies: composedValidationDependencies,
    readOnly: readOnly,
    setFormValue: setFormValue
  };
  var renderChildren = React.useCallback(function () {
    if (check["function"](children)) {
      return children(contextValue);
    } else if (check["function"](render)) {
      return render(contextValue);
    }

    return children; // eslint-disble-next-line
  }, []);
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(StyledForm, _extends({}, rest, {
    onSubmit: handleSubmit
  }), renderChildren()));
};

FormComponent.defaultProps = {
  validationRules: {},
  initialValues: {},
  readOnly: false
};
FormComponent.propTypes = {
  validationRules: PropTypes.shape({}),
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  render: PropTypes.func
};
export var Form = withErrorBoundary(FormComponent);