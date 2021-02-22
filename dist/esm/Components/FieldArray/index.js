import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
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
    flexDirection: 'column'
  }, rest), label && /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement(Wrapper, null, children && children(args), render && render(args)));
};
var Wrapper = styled(Segment).withConfig({
  displayName: "FieldArray__Wrapper",
  componentId: "sc-1nvc2w6-0"
})(["&&{padding:1rem;padding-top:0;margin:0.5rem 0;}"]);
var Item = styled(FlexBox).attrs(function () {
  return {
    flexDirection: 'column'
  };
}).withConfig({
  displayName: "FieldArray__Item",
  componentId: "sc-1nvc2w6-1"
})(["position:relative;"]);
var RemoveButton = styled(function (props) {
  var _useFormContext = useFormContext(),
      submitting = _useFormContext.submitting,
      readOnly = _useFormContext.readOnly;

  var disabled = submitting || readOnly;
  return /*#__PURE__*/React.createElement(Icon, _extends({}, props, {
    name: 'cancel',
    disabled: disabled
  }));
}).withConfig({
  displayName: "FieldArray__RemoveButton",
  componentId: "sc-1nvc2w6-2"
})(["position:absolute;top:9px;right:0;color:#9f3a38;cursor:pointer;scale:1.5;"]);
var AddButton = styled(function (props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  var _useFormContext2 = useFormContext(),
      submitting = _useFormContext2.submitting,
      readOnly = _useFormContext2.readOnly;

  var disabled = submitting || readOnly;
  return /*#__PURE__*/React.createElement(Button, _extends({}, rest, {
    disabled: disabled,
    type: 'button'
  }), children);
}).withConfig({
  displayName: "FieldArray__AddButton",
  componentId: "sc-1nvc2w6-3"
})(["&&{margin:0;margin-top:0.3rem;}"]);
AddButton.defaultProps = {
  children: 'Add'
};
var StyledDivider = styled(Divider).withConfig({
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
  name: PropTypes.string.isRequired,
  lable: PropTypes.string,
  children: PropTypes.func,
  render: PropTypes.func
};