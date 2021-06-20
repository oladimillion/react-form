import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _get from "lodash/get";

var _InputComponentTypes;

import React from 'react';
import PropTypes from 'prop-types';
import check from 'check-types';
import { useField } from '../hooks';
import { FlexBox, Switchery, Select, TextArea, TextInput, Unsupported, Checkbox, ErrorMessage, Label } from '../Components';
import { Radio } from './Components/Radio';
import { FileLinks } from './Components/FileLinks';
import { isEmptyValue, fieldTypes, castArray } from '../helpers';
import { Required, FieldWrapper } from './styled';
var InputComponentTypes = (_InputComponentTypes = {}, _defineProperty(_InputComponentTypes, fieldTypes.TEXT, TextInput), _defineProperty(_InputComponentTypes, fieldTypes.TEXTAREA, TextArea), _defineProperty(_InputComponentTypes, fieldTypes.SELECT, Select), _defineProperty(_InputComponentTypes, fieldTypes.CHECKBOX, Checkbox), _defineProperty(_InputComponentTypes, fieldTypes.RADIO, Radio), _defineProperty(_InputComponentTypes, fieldTypes.SWITCH, function (props) {
  return /*#__PURE__*/React.createElement(Switchery, _extends({}, props, {
    type: 'radio'
  }));
}), _defineProperty(_InputComponentTypes, fieldTypes.EMAIL, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: 'email'
  }));
}), _defineProperty(_InputComponentTypes, fieldTypes.URL, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: 'url'
  }));
}), _defineProperty(_InputComponentTypes, fieldTypes.PASSWORD, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: 'password'
  }));
}), _defineProperty(_InputComponentTypes, fieldTypes.FILE, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: 'file'
  }));
}), _defineProperty(_InputComponentTypes, fieldTypes.NUMBER, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: 'text'
  }));
}), _defineProperty(_InputComponentTypes, fieldTypes.DATE, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: 'date'
  }));
}), _InputComponentTypes);
export var Field = function Field(props) {
  var label = props.label,
      type = props.type,
      useFileLink = props.useFileLink,
      as = props.as,
      disabled = props.disabled,
      renderLabel = props.renderLabel,
      renderErrorMessage = props.renderErrorMessage,
      name = props.name,
      rest = _objectWithoutProperties(props, ["label", "type", "useFileLink", "as", "disabled", "renderLabel", "renderErrorMessage", "name"]);

  var _useField = useField(name),
      error = _useField.error,
      value = _useField.value,
      onChange = _useField.onChange,
      onBlur = _useField.onBlur,
      required = _useField.required,
      readOnly = _useField.readOnly,
      depend = _useField.depend;

  var isReadOnly = readOnly || disabled;

  var Component = as || _get(InputComponentTypes, type, Unsupported); // eslint-disable-next-line react-hooks/exhaustive-deps


  var FieldComponent = React.useCallback(Component, []);
  var isFileField = type === fieldTypes.FILE;
  var isBooleanField = type === fieldTypes.SWITCH || type === fieldTypes.CHECKBOX;
  var errors = castArray(error); // redering nothing if depend rule is not met

  if (!depend) return null;
  return /*#__PURE__*/React.createElement(FieldWrapper, {
    flexDirection: 'column',
    my: 3,
    width: '100%',
    isBooleanField: isBooleanField
  }, /*#__PURE__*/React.createElement(FlexBox, {
    mb: 2,
    flexWrap: "wrap"
  }, renderLabel({
    required: required,
    label: label
  }), required && /*#__PURE__*/React.createElement(Required, {
    as: 'span'
  }, "*"), isFileField && useFileLink && /*#__PURE__*/React.createElement(FileLinks, {
    value: value
  })), /*#__PURE__*/React.createElement(FieldComponent, _extends({}, rest, !isFileField && {
    value: value
  }, {
    disabled: isReadOnly,
    name: name,
    type: type,
    onChange: onChange,
    onBlur: onBlur
  }, !isBooleanField && {
    error: !isEmptyValue(error)
  })), renderErrorMessage({
    errors: errors
  }));
};
Field.defaultProps = {
  useFileLink: false,
  renderLabel: function renderLabel(_ref) {
    var label = _ref.label;
    return label && /*#__PURE__*/React.createElement(Label, null, label);
  },
  renderErrorMessage: function renderErrorMessage(_ref2) {
    var errors = _ref2.errors;
    return errors.map(function (error, index) {
      return !isEmptyValue(error) && /*#__PURE__*/React.createElement(ErrorMessage, {
        key: index
      }, error);
    });
  }
};
Field.propTypes = {
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  renderLabel: PropTypes.func,
  renderErrorMessage: PropTypes.func,
  label: PropTypes.string,
  useFileLink: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  }))
};