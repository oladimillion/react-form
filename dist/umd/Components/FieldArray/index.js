"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldArray = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _checkTypes = _interopRequireDefault(require("check-types"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _FlexBox = require("../FlexBox");

var _Button = require("../Button");

var _Label = require("../Label");

var _useField2 = require("../../hooks/useField");

var _useFormContext3 = require("../../hooks/useFormContext");

var _isEmptyValue = require("../../helpers/isEmptyValue");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  && {\n    margin: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  && {\n    margin: 0;\n    margin-top: 0.3rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 9px;\n  right: 0;\n  color: #9f3a38;\n  cursor: pointer;\n  scale: 1.5;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  && {\n    padding: 1rem;\n    padding-top: 0;\n    margin: 0.5rem 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FieldArray = function FieldArray(props) {
  var name = props.name,
      children = props.children,
      render = props.render,
      label = props.label,
      rest = _objectWithoutProperties(props, ["name", "children", "render", "label"]);

  var _useField = (0, _useField2.useField)(name),
      value = _useField.value,
      setValue = _useField.setValue,
      readOnly = _useField.readOnly,
      submitting = _useField.submitting;

  var disabled = readOnly || submitting || rest.disabled;

  _checkTypes["default"].assert.string(name, 'name is required');

  _checkTypes["default"].assert["function"](children, 'children must be a function');

  _checkTypes["default"].assert["function"](render, 'render must be a function');

  _react["default"].useEffect(function () {
    if ((0, _isEmptyValue.isEmptyValue)(value)) setValue([{}]);
    return function () {
      return null;
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var add = function add(defaultValue) {
    if (disabled) return; // ensuring defaultValue is serializable

    try {
      JSON.stringify(defaultValue);
    } catch (e) {
      defaultValue = null;
    }

    setValue([].concat(_toConsumableArray(value), [defaultValue || {}]));
  };

  var remove = function remove(index) {
    if (disabled) return;

    if ((value === null || value === void 0 ? void 0 : value.length) > 1) {
      setValue(value.filter(function (_, i) {
        return i !== index;
      }));
    }
  };

  var args = {
    values: value || [],
    add: add,
    remove: remove
  };
  return /*#__PURE__*/_react["default"].createElement(_FlexBox.FlexBox, _extends({
    flexDirection: "column"
  }, rest), label && /*#__PURE__*/_react["default"].createElement(_Label.Label, null, label), /*#__PURE__*/_react["default"].createElement(Wrapper, null, children && children(args), render && render(args)));
};

exports.FieldArray = FieldArray;
var Wrapper = (0, _styledComponents["default"])(_semanticUiReact.Segment)(_templateObject());
var Item = (0, _styledComponents["default"])(_FlexBox.FlexBox).attrs(function () {
  return {
    flexDirection: 'column'
  };
})(_templateObject2());
var RemoveButton = (0, _styledComponents["default"])(function (props) {
  var _useFormContext = (0, _useFormContext3.useFormContext)(),
      submitting = _useFormContext.submitting,
      readOnly = _useFormContext.readOnly;

  var disabled = submitting || readOnly;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, _extends({}, props, {
    name: "cancel",
    disabled: disabled
  }));
})(_templateObject3());
var AddButton = (0, _styledComponents["default"])(function (props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  var _useFormContext2 = (0, _useFormContext3.useFormContext)(),
      submitting = _useFormContext2.submitting,
      readOnly = _useFormContext2.readOnly;

  var disabled = submitting || readOnly;
  return /*#__PURE__*/_react["default"].createElement(_Button.Button, _extends({}, rest, {
    disabled: disabled,
    type: "button"
  }), children);
})(_templateObject4());
AddButton.defaultProps = {
  children: 'Add'
};
var StyledDivider = (0, _styledComponents["default"])(_semanticUiReact.Divider)(_templateObject5());
FieldArray.Item = Item;
FieldArray.RemoveButton = RemoveButton;
FieldArray.AddButton = AddButton;
FieldArray.Divider = StyledDivider;
FieldArray.defaultProps = {
  render: function render() {
    return null;
  },
  children: function children() {
    return null;
  }
};
FieldArray.propTypes = {
  name: _propTypes["default"].string.isRequired,
  lable: _propTypes["default"].string,
  children: _propTypes["default"].func,
  render: _propTypes["default"].func
};