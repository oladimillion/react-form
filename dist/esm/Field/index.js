import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _get from "lodash/get";

var _InputComponentTypes;

import React from 'react';
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

  var Component = CustomField || _get(InputComponentTypes, type, Unsupported);

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
    my: 3,
    width: "100%"
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
var Required = styled(Text).withConfig({
  displayName: "Field__Required",
  componentId: "blzmvn-0"
})(["font-size:1.3rem;color:#9f3a38;"]);
var FileLink = styled.a.withConfig({
  displayName: "Field__FileLink",
  componentId: "blzmvn-1"
})(["margin-left:8px;"]);
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