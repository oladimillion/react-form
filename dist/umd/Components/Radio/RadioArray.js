"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioArray = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RadioContext = /*#__PURE__*/_react["default"].createContext({
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

  var _React$useState = _react["default"].useState(fieldValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
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
            name: props.name,
            value: value
          }
        });
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form, rest, children));
};

RadioComponent.defaultProps = {
  onChange: function onChange() {},
  children: null,
  value: null,
  name: null
};

var RadioComponentItem = function RadioComponentItem(props) {
  var _React$useContext = _react["default"].useContext(RadioContext),
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
RadioComponent.Item = RadioComponentItem;
var RadioArray = (0, _styledComponents["default"])(RadioComponent).attrs(function () {
  return {
    className: 'RadioArray'
  };
})(_templateObject());
exports.RadioArray = RadioArray;
RadioArray.propTypes = {
  value: _propTypes["default"].any,
  onChange: _propTypes["default"].func,
  name: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].any
};
RadioArray.displayName = 'RadioArray';
(0, _hoistNonReactStatics["default"])(RadioArray, RadioComponent);