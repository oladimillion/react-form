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

import React from 'react';
import styled from 'styled-components';
import check from 'check-types';
import PropTypes from 'prop-types';
import { Icon, Divider, Segment } from 'semantic-ui-react';
import { FlexBox } from '../FlexBox';
import { Button } from '../Button';
import { Label } from '../Label';
import { useField } from '../../hooks/useField';
import { useFormContext } from '../../hooks/useFormContext';
import { isEmptyValue } from '../../helpers/isEmptyValue';
export var FieldArray = function FieldArray(props) {
  var name = props.name,
      children = props.children,
      render = props.render,
      label = props.label,
      rest = _objectWithoutProperties(props, ["name", "children", "render", "label"]);

  var _useField = useField(name),
      value = _useField.value,
      setValue = _useField.setValue,
      readOnly = _useField.readOnly,
      submitting = _useField.submitting;

  var disabled = readOnly || submitting || rest.disabled;
  check.assert.string(name, 'name is required');
  check.assert["function"](children, 'children must be a function');
  check.assert["function"](render, 'render must be a function');
  React.useEffect(function () {
    if (isEmptyValue(value)) setValue([{}]);
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
  return /*#__PURE__*/React.createElement(FlexBox, _extends({
    flexDirection: "column"
  }, rest), label && /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement(Wrapper, null, children && children(args), render && render(args)));
};
var Wrapper = styled(Segment)(_templateObject());
var Item = styled(FlexBox).attrs(function () {
  return {
    flexDirection: 'column'
  };
})(_templateObject2());
var RemoveButton = styled(function (props) {
  var _useFormContext = useFormContext(),
      submitting = _useFormContext.submitting,
      readOnly = _useFormContext.readOnly;

  var disabled = submitting || readOnly;
  return /*#__PURE__*/React.createElement(Icon, _extends({}, props, {
    name: "cancel",
    disabled: disabled
  }));
})(_templateObject3());
var AddButton = styled(function (props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  var _useFormContext2 = useFormContext(),
      submitting = _useFormContext2.submitting,
      readOnly = _useFormContext2.readOnly;

  var disabled = submitting || readOnly;
  return /*#__PURE__*/React.createElement(Button, _extends({}, rest, {
    disabled: disabled,
    type: "button"
  }), children);
})(_templateObject4());
AddButton.defaultProps = {
  children: 'Add'
};
var StyledDivider = styled(Divider)(_templateObject5());
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
  name: PropTypes.string.isRequired,
  lable: PropTypes.string,
  children: PropTypes.func,
  render: PropTypes.func
};