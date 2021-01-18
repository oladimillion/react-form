"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _checkTypes = _interopRequireDefault(require("check-types"));

var _hooks = require("../hooks");

var _Components = require("../Components");

var _RadioArray = require("./Components/RadioArray");

var _helpers = require("../helpers");

var _InputComponentTypes;

var InputComponentTypes = (_InputComponentTypes = {}, (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.TEXT, _Components.TextInput), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.TEXTAREA, _Components.TextArea), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.SELECT, _Components.Select), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.CHECKBOX, _semanticUiReact.Checkbox), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.RADIO, _Components.Radio), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.RADIO_ARRAY, _RadioArray.RadioArray), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.EMAIL, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: "email"
  }));
}), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.URL, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: "url"
  }));
}), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.PASSWORD, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: "password"
  }));
}), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.FILE, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: "file"
  }));
}), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.NUMBER, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: "text"
  }));
}), _InputComponentTypes);

var Field = function Field(props) {
  var label = props.label,
      type = props.type,
      includeFileLink = props.includeFileLink,
      CustomField = props.Component,
      disabled = props.disabled,
      rest = (0, _objectWithoutProperties2["default"])(props, ["label", "type", "includeFileLink", "Component", "disabled"]);

  var _useField = (0, _hooks.useField)(props.name),
      error = _useField.error,
      value = _useField.value,
      onChange = _useField.onChange,
      onBlur = _useField.onBlur,
      required = _useField.required,
      readOnly = _useField.readOnly;

  var Component = CustomField || (0, _get2["default"])(InputComponentTypes, type, _Components.Unsupported);

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
    my: 3,
    width: "100%"
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
  })), /*#__PURE__*/_react["default"].createElement(FieldComponent, (0, _extends2["default"])({}, rest, fieldValue, {
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
var Required = (0, _styledComponents["default"])(_Components.Text).withConfig({
  displayName: "Field__Required",
  componentId: "blzmvn-0"
})(["font-size:1.3rem;color:#9f3a38;"]);

var FileLink = _styledComponents["default"].a.withConfig({
  displayName: "Field__FileLink",
  componentId: "blzmvn-1"
})(["margin-left:8px;"]);

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