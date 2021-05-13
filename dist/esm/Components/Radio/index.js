import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Form, Radio as SemanticRadio } from 'semantic-ui-react';
import PropTypes from 'prop-types';
var RadioContext = /*#__PURE__*/React.createContext({
  value: null,
  onChange: function onChange() {}
});

var RadioComponent = function RadioComponent(props) {
  var children = props.children,
      _onChange = props.onChange,
      name = props.name,
      disabled = props.disabled,
      fieldValue = props.value,
      rest = _objectWithoutProperties(props, ["children", "onChange", "name", "disabled", "value"]);

  var _React$useState = React.useState(fieldValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/React.createElement(RadioContext.Provider, {
    value: {
      value: value,
      name: name,
      disabled: disabled,
      setValue: setValue,
      onChange: function onChange(value) {
        setValue(value);

        _onChange({
          target: {
            name: props.name,
            value: value
          }
        });
      }
    }
  }, /*#__PURE__*/React.createElement(Form, rest, children));
};

RadioComponent.defaultProps = {
  onChange: function onChange() {},
  children: null,
  value: null,
  name: null
};

var RadioComponentItem = function RadioComponentItem(props) {
  var _React$useContext = React.useContext(RadioContext),
      value = _React$useContext.value,
      name = _React$useContext.name,
      _onChange2 = _React$useContext.onChange,
      disabled = _React$useContext.disabled;

  var Component = props.Component,
      fieldValue = props.value,
      text = props.text,
      rest = _objectWithoutProperties(props, ["Component", "value", "text"]);

  var dataProps = {
    checked: fieldValue === value,
    onChange: function onChange() {
      return _onChange2(fieldValue);
    },
    label: text,
    name: name,
    disabled: disabled
  };
  return /*#__PURE__*/React.createElement(Form.Field, rest, Component ? /*#__PURE__*/React.createElement(Component, dataProps) : /*#__PURE__*/React.createElement(SemanticRadio, dataProps));
};

RadioComponentItem.defaultProps = {
  value: null,
  Component: null
};
RadioComponentItem.propTypes = {
  value: PropTypes.any,
  text: PropTypes.string.isRequired,
  Component: PropTypes.any
};
RadioComponent.Item = RadioComponentItem;
export var Radio = styled(RadioComponent).attrs(function () {
  return {
    className: 'Radio'
  };
}).withConfig({
  displayName: "Radio",
  componentId: "vegcz3-0"
})([""]);
Radio.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  children: PropTypes.any
};
Radio.displayName = 'Radio';
hoistNonReactStatics(Radio, RadioComponent);