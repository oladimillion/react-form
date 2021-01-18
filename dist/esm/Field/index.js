var _InputComponentTypes;

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

import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';
import check from 'check-types';
import { useField } from '../hooks';
import { Text, FlexBox, Radio, Select, TextArea, TextInput, Unsupported, ErrorMessage, Label } from '../Components';
import { RadioArray } from './Components/RadioArray';
import { isEmptyValue, fieldTypes, castArray } from '../helpers';
var InputComponentTypes = (_InputComponentTypes = {}, _defineProperty(_InputComponentTypes, fieldTypes.TEXT, TextInput), _defineProperty(_InputComponentTypes, fieldTypes.TEXTAREA, TextArea), _defineProperty(_InputComponentTypes, fieldTypes.SELECT, Select), _defineProperty(_InputComponentTypes, fieldTypes.CHECKBOX, Checkbox), _defineProperty(_InputComponentTypes, fieldTypes.RADIO, Radio), _defineProperty(_InputComponentTypes, fieldTypes.RADIO_ARRAY, RadioArray), _defineProperty(_InputComponentTypes, fieldTypes.EMAIL, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: "email"
  }));
}), _defineProperty(_InputComponentTypes, fieldTypes.URL, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: "url"
  }));
}), _defineProperty(_InputComponentTypes, fieldTypes.PASSWORD, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: "password"
  }));
}), _defineProperty(_InputComponentTypes, fieldTypes.FILE, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: "file"
  }));
}), _defineProperty(_InputComponentTypes, fieldTypes.NUMBER, function (props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    type: "text"
  }));
}), _InputComponentTypes);
export var Field = function Field(props) {
  var label = props.label,
      type = props.type,
      includeFileLink = props.includeFileLink,
      CustomField = props.Component,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["label", "type", "includeFileLink", "Component", "disabled"]);

  var _useField = useField(props.name),
      error = _useField.error,
      value = _useField.value,
      onChange = _useField.onChange,
      onBlur = _useField.onBlur,
      required = _useField.required,
      readOnly = _useField.readOnly;

  var Component = CustomField || get(InputComponentTypes, type, Unsupported);
  var FieldComponent = React.useCallback(function (props) {
    return /*#__PURE__*/React.createElement(Component, props);
  }, []);
  var isFileField = type === fieldTypes.FILE;
  var fieldValue = React.useMemo(function () {
    return isFileField ? {} : {
      value: value || ''
    };
  }, [value, isFileField]);
  var errors = check.array(error) ? error : [error];
  return /*#__PURE__*/React.createElement(FlexBox, {
    flexDirection: "column",
    my: 3
  }, /*#__PURE__*/React.createElement(FlexBox, {
    mb: 2
  }, label && /*#__PURE__*/React.createElement(Label, null, label), required && /*#__PURE__*/React.createElement(Required, {
    as: "span"
  }, "*"), isFileField && includeFileLink && castArray(value).map(function (link, index) {
    return check.string(link) && /*#__PURE__*/React.createElement(FileLink, {
      key: index,
      href: link,
      target: "_blank",
      rel: "noopener"
    }, link);
  })), /*#__PURE__*/React.createElement(FieldComponent, _extends({}, rest, fieldValue, {
    disabled: readOnly || disabled,
    type: type,
    onChange: onChange,
    onBlur: onBlur,
    error: !isEmptyValue(error)
  })), errors.map(function (error, index) {
    return !isEmptyValue(error) && /*#__PURE__*/React.createElement(ErrorMessage, {
      key: index
    }, error);
  }));
};
var Required = styled(Text)(_templateObject());
var FileLink = styled.a(_templateObject2());
Field.defaultProps = {
  includeFileLink: true
};
Field.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  label: PropTypes.string,
  includeFileLink: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
};