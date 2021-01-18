"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _checkTypes = _interopRequireDefault(require("check-types"));

var _hooks = require("../hooks");

var _Components = require("../Components");

var _RadioArray = require("./Components/RadioArray");

var _helpers = require("../helpers");

var _InputComponentTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.3rem;\n  color: #9f3a38;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var InputComponentTypes = (_InputComponentTypes = {}, _defineProperty(_InputComponentTypes, _helpers.fieldTypes.TEXT, _Components.TextInput), _defineProperty(_InputComponentTypes, _helpers.fieldTypes.TEXTAREA, _Components.TextArea), _defineProperty(_InputComponentTypes, _helpers.fieldTypes.SELECT, _Components.Select), _defineProperty(_InputComponentTypes, _helpers.fieldTypes.CHECKBOX, _semanticUiReact.Checkbox), _defineProperty(_InputComponentTypes, _helpers.fieldTypes.RADIO, _Components.Radio), _defineProperty(_InputComponentTypes, _helpers.fieldTypes.RADIO_ARRAY, _RadioArray.RadioArray), _defineProperty(_InputComponentTypes, _helpers.fieldTypes.EMAIL, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, _extends({}, props, {
    type: "email"
  }));
}), _defineProperty(_InputComponentTypes, _helpers.fieldTypes.URL, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, _extends({}, props, {
    type: "url"
  }));
}), _defineProperty(_InputComponentTypes, _helpers.fieldTypes.PASSWORD, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, _extends({}, props, {
    type: "password"
  }));
}), _defineProperty(_InputComponentTypes, _helpers.fieldTypes.FILE, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, _extends({}, props, {
    type: "file"
  }));
}), _defineProperty(_InputComponentTypes, _helpers.fieldTypes.NUMBER, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, _extends({}, props, {
    type: "text"
  }));
}), _InputComponentTypes);

var Field = function Field(props) {
  var label = props.label,
      type = props.type,
      includeFileLink = props.includeFileLink,
      CustomField = props.Component,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["label", "type", "includeFileLink", "Component", "disabled"]);

  var _useField = (0, _hooks.useField)(props.name),
      error = _useField.error,
      value = _useField.value,
      onChange = _useField.onChange,
      onBlur = _useField.onBlur,
      required = _useField.required,
      readOnly = _useField.readOnly;

  var Component = CustomField || (0, _lodash.get)(InputComponentTypes, type, _Components.Unsupported);

  var FieldComponent = _react["default"].useCallback(function (props) {
    return /*#__PURE__*/_react["default"].createElement(Component, props);
  }, []);

  var isFileField = type === _helpers.fieldTypes.FILE;

  var fieldValue = _react["default"].useMemo(function () {
    return isFileField ? {} : {
      value: value || ''
    };
  }, [value, isFileField]);

  var errors = _checkTypes["default"].array(error) ? error : [error];
  return /*#__PURE__*/_react["default"].createElement(_Components.FlexBox, {
    flexDirection: "column",
    my: 3
  }, /*#__PURE__*/_react["default"].createElement(_Components.FlexBox, {
    mb: 2
  }, label && /*#__PURE__*/_react["default"].createElement(_Components.Label, null, label), required && /*#__PURE__*/_react["default"].createElement(Required, {
    as: "span"
  }, "*"), isFileField && includeFileLink && (0, _helpers.castArray)(value).map(function (link, index) {
    return _checkTypes["default"].string(link) && /*#__PURE__*/_react["default"].createElement(FileLink, {
      key: index,
      href: link,
      target: "_blank",
      rel: "noopener"
    }, link);
  })), /*#__PURE__*/_react["default"].createElement(FieldComponent, _extends({}, rest, fieldValue, {
    disabled: readOnly || disabled,
    type: type,
    onChange: onChange,
    onBlur: onBlur,
    error: !(0, _helpers.isEmptyValue)(error)
  })), errors.map(function (error, index) {
    return !(0, _helpers.isEmptyValue)(error) && /*#__PURE__*/_react["default"].createElement(_Components.ErrorMessage, {
      key: index
    }, error);
  }));
};

exports.Field = Field;
var Required = (0, _styledComponents["default"])(_Components.Text)(_templateObject());

var FileLink = _styledComponents["default"].a(_templateObject2());

Field.defaultProps = {
  includeFileLink: true
};
Field.propTypes = {
  Component: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].elementType]),
  label: _propTypes["default"].string,
  includeFileLink: _propTypes["default"].bool,
  name: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string
};