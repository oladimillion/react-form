"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = require("lodash");

var _checkTypes = _interopRequireDefault(require("check-types"));

var _validatorjs = _interopRequireDefault(require("validatorjs"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hoc = require("../hoc");

var _isEmptyValue = require("../helpers/isEmptyValue");

var _getPath = require("../helpers/getPath");

var _Context = require("../Context");

var _buildValidationRules = require("../helpers/buildValidationRules");

var _buildValidationMessages = require("../helpers/buildValidationMessages");

var _fieldTypes = require("../helpers/fieldTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledForm = _styledComponents["default"].form(_templateObject());

var FormComponent = function FormComponent(props) {
  var children = props.children,
      initialValues = props.initialValues,
      validationRules = props.validationRules,
      render = props.render,
      onSubmit = props.onSubmit,
      readOnly = props.readOnly,
      rest = _objectWithoutProperties(props, ["children", "initialValues", "validationRules", "render", "onSubmit", "readOnly"]);

  var composedValidationRules = _react["default"].useMemo(function () {
    return (0, _buildValidationRules.buildValidationRules)(validationRules);
  }, [validationRules]);

  var _React$useState = _react["default"].useState(initialValues),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var _React$useState3 = _react["default"].useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      errors = _React$useState4[0],
      setErrors = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      submitting = _React$useState6[0],
      setSubmitting = _React$useState6[1];

  var setFieldError = function setFieldError(fieldName, fieldError) {
    var newErrors = (0, _lodash.set)((0, _lodash.cloneDeep)(errors), fieldName, fieldError);
    setErrors(newErrors);
  };

  var resetForm = function resetForm() {
    setValues({});
    setErrors({});
    setSubmitting(false);
  };

  var setFieldValue = function setFieldValue(fieldName, fieldValue) {
    var path = (0, _getPath.getPath)(fieldName);
    var rules = (0, _lodash.get)(validationRules, path, {});
    var composedRules = (0, _lodash.get)(composedValidationRules, path, '');
    var composedMessage = (0, _buildValidationMessages.buildFieldValidationMessages)(fieldName, rules.message);

    if (rules.validation) {
      var validatorParams = [_defineProperty({}, fieldName, fieldValue), _defineProperty({}, fieldName, composedRules), composedMessage];

      var validator = _construct(_validatorjs["default"], validatorParams);

      validator.fails();
      setFieldError(fieldName, validator.errors.get(fieldName));
    }

    var newValues = (0, _lodash.set)((0, _lodash.cloneDeep)(values), fieldName, fieldValue);
    setValues(newValues);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var fails, validatorParams, validator;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event && event.preventDefault();
              fails = false;

              if (!_checkTypes["default"].emptyObject(validationRules)) {
                validatorParams = [values, composedValidationRules, (0, _buildValidationMessages.buildFormValidationMessages)(validationRules, values)];
                validator = _construct(_validatorjs["default"], validatorParams);
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
                values: values,
                errors: errors,
                submitting: submitting,
                resetForm: resetForm
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
      return _ref3.apply(this, arguments);
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
    var name = !(0, _isEmptyValue.isEmptyValue)(targetName) ? targetName : propsName;
    var value = !(0, _isEmptyValue.isEmptyValue)(targetValue) ? targetValue : propsValue;

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
    values: values,
    errors: errors,
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    formValidationRules: composedValidationRules,
    readOnly: readOnly
  };

  var renderChildren = function renderChildren() {
    if (_checkTypes["default"]["function"](children)) {
      return children(contextValue);
    } else if (_checkTypes["default"]["function"](render)) {
      return render(contextValue);
    }

    return children;
  };

  return /*#__PURE__*/_react["default"].createElement(_Context.FormContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react["default"].createElement(StyledForm, _extends({}, rest, {
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