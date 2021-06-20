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

var _checkTypes = _interopRequireDefault(require("check-types"));

var _hooks = require("../hooks");

var _Components = require("../Components");

var _Radio = require("./Components/Radio");

var _FileLinks = require("./Components/FileLinks");

var _helpers = require("../helpers");

var _styled = require("./styled");

var _InputComponentTypes;

var InputComponentTypes = (_InputComponentTypes = {}, (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.TEXT, _Components.TextInput), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.TEXTAREA, _Components.TextArea), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.SELECT, _Components.Select), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.CHECKBOX, _Components.Checkbox), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.RADIO, _Radio.Radio), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.SWITCH, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.Switchery, (0, _extends2["default"])({}, props, {
    type: 'radio'
  }));
}), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.EMAIL, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: 'email'
  }));
}), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.URL, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: 'url'
  }));
}), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.PASSWORD, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: 'password'
  }));
}), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.FILE, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: 'file'
  }));
}), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.NUMBER, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: 'text'
  }));
}), (0, _defineProperty2["default"])(_InputComponentTypes, _helpers.fieldTypes.DATE, function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Components.TextInput, (0, _extends2["default"])({}, props, {
    type: 'date'
  }));
}), _InputComponentTypes);

var Field = function Field(props) {
  var label = props.label,
      type = props.type,
      useFileLink = props.useFileLink,
      as = props.as,
      disabled = props.disabled,
      renderLabel = props.renderLabel,
      renderErrorMessage = props.renderErrorMessage,
      name = props.name,
      rest = (0, _objectWithoutProperties2["default"])(props, ["label", "type", "useFileLink", "as", "disabled", "renderLabel", "renderErrorMessage", "name"]);

  var _useField = (0, _hooks.useField)(name),
      error = _useField.error,
      value = _useField.value,
      onChange = _useField.onChange,
      onBlur = _useField.onBlur,
      required = _useField.required,
      readOnly = _useField.readOnly,
      depend = _useField.depend;

  var isReadOnly = readOnly || disabled;
  var Component = as || (0, _get2["default"])(InputComponentTypes, type, _Components.Unsupported); // eslint-disable-next-line react-hooks/exhaustive-deps

  var FieldComponent = _react["default"].useCallback(Component, []);

  var isFileField = type === _helpers.fieldTypes.FILE;
  var isBooleanField = type === _helpers.fieldTypes.SWITCH || type === _helpers.fieldTypes.CHECKBOX;
  var errors = (0, _helpers.castArray)(error); // redering nothing if depend rule is not met

  if (!depend) return null;
  return /*#__PURE__*/_react["default"].createElement(_styled.FieldWrapper, {
    flexDirection: 'column',
    my: 3,
    width: '100%',
    isBooleanField: isBooleanField
  }, /*#__PURE__*/_react["default"].createElement(_Components.FlexBox, {
    mb: 2,
    flexWrap: "wrap"
  }, renderLabel({
    required: required,
    label: label
  }), required && /*#__PURE__*/_react["default"].createElement(_styled.Required, {
    as: 'span'
  }, "*"), isFileField && useFileLink && /*#__PURE__*/_react["default"].createElement(_FileLinks.FileLinks, {
    value: value
  })), /*#__PURE__*/_react["default"].createElement(FieldComponent, (0, _extends2["default"])({}, rest, !isFileField && {
    value: value
  }, {
    disabled: isReadOnly,
    name: name,
    type: type,
    onChange: onChange,
    onBlur: onBlur
  }, !isBooleanField && {
    error: !(0, _helpers.isEmptyValue)(error)
  })), renderErrorMessage({
    errors: errors
  }));
};

exports.Field = Field;
Field.defaultProps = {
  useFileLink: false,
  renderLabel: function renderLabel(_ref) {
    var label = _ref.label;
    return label && /*#__PURE__*/_react["default"].createElement(_Components.Label, null, label);
  },
  renderErrorMessage: function renderErrorMessage(_ref2) {
    var errors = _ref2.errors;
    return errors.map(function (error, index) {
      return !(0, _helpers.isEmptyValue)(error) && /*#__PURE__*/_react["default"].createElement(_Components.ErrorMessage, {
        key: index
      }, error);
    });
  }
};
Field.propTypes = {
  as: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].elementType]),
  renderLabel: _propTypes["default"].func,
  renderErrorMessage: _propTypes["default"].func,
  label: _propTypes["default"].string,
  useFileLink: _propTypes["default"].bool,
  name: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    text: _propTypes["default"].string,
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool])
  }))
};