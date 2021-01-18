"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldArray = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

var FieldArray = function FieldArray(props) {
  var name = props.name,
      children = props.children,
      render = props.render,
      label = props.label,
      rest = (0, _objectWithoutProperties2["default"])(props, ["name", "children", "render", "label"]);

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

    setValue([].concat((0, _toConsumableArray2["default"])(value), [defaultValue || {}]));
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
  return /*#__PURE__*/_react["default"].createElement(_FlexBox.FlexBox, (0, _extends2["default"])({
    flexDirection: "column"
  }, rest), label && /*#__PURE__*/_react["default"].createElement(_Label.Label, null, label), /*#__PURE__*/_react["default"].createElement(Wrapper, null, children && children(args), render && render(args)));
};

exports.FieldArray = FieldArray;
var Wrapper = (0, _styledComponents["default"])(_semanticUiReact.Segment).withConfig({
  displayName: "FieldArray__Wrapper",
  componentId: "sc-1nvc2w6-0"
})(["&&{padding:1rem;padding-top:0;margin:0.5rem 0;}"]);
var Item = (0, _styledComponents["default"])(_FlexBox.FlexBox).attrs(function () {
  return {
    flexDirection: 'column'
  };
}).withConfig({
  displayName: "FieldArray__Item",
  componentId: "sc-1nvc2w6-1"
})(["position:relative;"]);
var RemoveButton = (0, _styledComponents["default"])(function (props) {
  var _useFormContext = (0, _useFormContext3.useFormContext)(),
      submitting = _useFormContext.submitting,
      readOnly = _useFormContext.readOnly;

  var disabled = submitting || readOnly;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, (0, _extends2["default"])({}, props, {
    name: "cancel",
    disabled: disabled
  }));
}).withConfig({
  displayName: "FieldArray__RemoveButton",
  componentId: "sc-1nvc2w6-2"
})(["position:absolute;top:9px;right:0;color:#9f3a38;cursor:pointer;scale:1.5;"]);
var AddButton = (0, _styledComponents["default"])(function (props) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children"]);

  var _useFormContext2 = (0, _useFormContext3.useFormContext)(),
      submitting = _useFormContext2.submitting,
      readOnly = _useFormContext2.readOnly;

  var disabled = submitting || readOnly;
  return /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({}, rest, {
    disabled: disabled,
    type: "button"
  }), children);
}).withConfig({
  displayName: "FieldArray__AddButton",
  componentId: "sc-1nvc2w6-3"
})(["&&{margin:0;margin-top:0.3rem;}"]);
AddButton.defaultProps = {
  children: 'Add'
};
var StyledDivider = (0, _styledComponents["default"])(_semanticUiReact.Divider).withConfig({
  displayName: "FieldArray__StyledDivider",
  componentId: "sc-1nvc2w6-4"
})(["&&{margin:0;}"]);
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