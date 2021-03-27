"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _checkTypes = _interopRequireDefault(require("check-types"));

var _validatorjs = _interopRequireDefault(require("validatorjs"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hoc = require("../hoc");

var _isEmptyValue = require("../helpers/isEmptyValue");

var _getPath = require("../helpers/getPath");

var _getCleanValues = require("../helpers/getCleanValues");

var _Context = require("../Context");

var _buildValidationRules = require("../helpers/buildValidationRules");

var _buildValidationDependencies = require("../helpers/buildValidationDependencies");

var _buildValidationMessages = require("../helpers/buildValidationMessages");

var _fieldTypes = require("../helpers/fieldTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledForm = _styledComponents["default"].form.withConfig({
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
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "initialValues", "validationRules", "render", "onSubmit", "readOnly"]);

  var composedValidationRules = _react["default"].useMemo(function () {
    return (0, _buildValidationRules.buildValidationRules)(validationRules);
  }, [validationRules]);

  var composedValidationDependencies = _react["default"].useMemo(function () {
    return (0, _buildValidationDependencies.buildValidationDependencies)(validationRules);
  }, [validationRules]);

  var _React$useState = _react["default"].useState(_objectSpread({}, initialValues)),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var _React$useState3 = _react["default"].useState({}),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      errors = _React$useState4[0],
      setErrors = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(false),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      submitting = _React$useState6[0],
      setSubmitting = _React$useState6[1]; // removing fields whose depend rule returns false


  var cleanValues = _react["default"].useCallback((0, _getCleanValues.getCleanValues)(values, composedValidationDependencies), [values]);

  var setFieldError = function setFieldError(fieldName, fieldError) {
    var newErrors = (0, _set2["default"])((0, _cloneDeep2["default"])(errors), fieldName, fieldError);
    setErrors(newErrors);
  };

  var setFormValue = function setFormValue() {
    var newValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var useInitialValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    setValues(_objectSpread(_objectSpread({}, useInitialValues && values), newValues));
  };

  var setFormError = function setFormError() {
    var newErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var useInitialErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    setErrors(_objectSpread(_objectSpread({}, useInitialErrors && errors), newErrors));
  };

  var resetForm = function resetForm() {
    setValues({});
    setErrors({});
    setSubmitting(false);
  };

  var setFieldValue = function setFieldValue(fieldName, fieldValue) {
    var path = (0, _getPath.getPath)(fieldName);
    var rules = (0, _get2["default"])(validationRules, path, {});
    var composedRules = (0, _get2["default"])(composedValidationRules, path, '');
    var composedMessage = (0, _buildValidationMessages.buildFieldValidationMessages)(fieldName, rules.message);

    if (rules.validation) {
      var validatorParams = [_objectSpread(_objectSpread({}, cleanValues), {}, (0, _defineProperty2["default"])({}, fieldName, fieldValue)), (0, _defineProperty2["default"])({}, fieldName, composedRules), composedMessage];
      var validator = (0, _construct2["default"])(_validatorjs["default"], validatorParams);
      validator.fails();
      setFieldError(fieldName, validator.errors.get(fieldName));
    }

    var newValues = (0, _set2["default"])((0, _cloneDeep2["default"])(values), fieldName, fieldValue);
    setValues(newValues);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(event) {
      var fails, validatorParams, validator;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event && event.preventDefault();
              fails = false;

              if (!_checkTypes["default"].emptyObject(validationRules)) {
                validatorParams = [cleanValues, composedValidationRules, (0, _buildValidationMessages.buildFormValidationMessages)(validationRules, cleanValues)];
                validator = (0, _construct2["default"])(_validatorjs["default"], validatorParams);
                fails = validator.fails();
                setErrors(validator.errors.all());
              }

              if (!(_checkTypes["default"].emptyObject(validationRules) || !fails)) {
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

  var handleChange = function handleChange(e, props) {
    var _e$target = e.target,
        files = _e$target.files,
        targetName = _e$target.name,
        targetValue = _e$target.value;
    var propsName = props.name,
        propsValue = props.value,
        type = props.type,
        multiple = props.multiple;
    var name = targetName || propsName;
    var value = targetValue || propsValue;

    if (type === _fieldTypes.fieldTypes.FILE && multiple) {
      setFieldValue(name, files);
    } else if (type === _fieldTypes.fieldTypes.FILE) {
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
    dirty: !(0, _isEmptyValue.isEmptyValue)(errors),
    values: cleanValues,
    errors: errors,
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    formValidationRules: composedValidationRules,
    formValidationDependencies: composedValidationDependencies,
    readOnly: readOnly,
    setFormValue: setFormValue
  };

  var renderChildren = _react["default"].useCallback(function () {
    if (_checkTypes["default"]["function"](children)) {
      return children(contextValue);
    } else if (_checkTypes["default"]["function"](render)) {
      return render(contextValue);
    }

    return children; // eslint-disble-next-line
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_Context.FormContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react["default"].createElement(StyledForm, (0, _extends2["default"])({}, rest, {
    onSubmit: handleSubmit
  }), renderChildren()));
};

FormComponent.defaultProps = {
  validationRules: {},
  initialValues: {},
  readOnly: false
};
FormComponent.propTypes = {
  validationRules: _propTypes["default"].shape({}),
  onSubmit: _propTypes["default"].func,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),
  render: _propTypes["default"].func
};
var Form = (0, _hoc.withErrorBoundary)(FormComponent);
exports.Form = Form;