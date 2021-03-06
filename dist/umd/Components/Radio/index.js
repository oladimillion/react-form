"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var RadioContext = /*#__PURE__*/_react["default"].createContext({
  value: null,
  onChange: function onChange() {}
});

var Radio = function Radio(props) {
  var children = props.children,
      _onChange = props.onChange,
      name = props.name,
      disabled = props.disabled,
      fieldValue = props.value,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children", "onChange", "name", "disabled", "value"]);

  var _React$useState = _react["default"].useState(fieldValue),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(RadioContext.Provider, {
    value: {
      value: value,
      name: name,
      disabled: disabled,
      setValue: setValue,
      onChange: function onChange(value) {
        setValue(value);

        _onChange({
          target: {
            name: name,
            value: value
          }
        });
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(RadioWrapper, rest, children));
};

exports.Radio = Radio;
Radio.defaultProps = {
  onChange: function onChange() {},
  children: null,
  value: null,
  name: null
};
Radio.propTypes = {
  value: _propTypes["default"].any,
  onChange: _propTypes["default"].func,
  name: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].any
};
Radio.displayName = 'Radio';

var RadioComponentItem = function RadioComponentItem(props) {
  var _React$useContext = _react["default"].useContext(RadioContext),
      value = _React$useContext.value,
      name = _React$useContext.name,
      _onChange2 = _React$useContext.onChange,
      disabled = _React$useContext.disabled;

  var Component = props.Component,
      fieldValue = props.value,
      text = props.text,
      rest = (0, _objectWithoutProperties2["default"])(props, ["Component", "value", "text"]);
  var dataProps = {
    checked: fieldValue === value,
    onChange: function onChange() {
      return _onChange2(fieldValue);
    },
    label: text,
    name: name,
    disabled: disabled
  };
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, rest, Component ? /*#__PURE__*/_react["default"].createElement(Component, dataProps) : /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Radio, dataProps));
};

RadioComponentItem.defaultProps = {
  value: null,
  Component: null
};
RadioComponentItem.propTypes = {
  value: _propTypes["default"].any,
  text: _propTypes["default"].string.isRequired,
  Component: _propTypes["default"].any
};

var RadioWrapper = _styledComponents["default"].div.attrs(function () {
  return {
    className: 'ui form'
  };
}).withConfig({
  displayName: "Radio__RadioWrapper",
  componentId: "vegcz3-0"
})(["position:relative;max-width:100%;font-size:1rem;"]);

Radio.Item = RadioComponentItem;