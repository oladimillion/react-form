import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Components/Button';
import { useFormContext } from '../../hooks';
export var SubmitButton = function SubmitButton(props) {
  var children = props.children,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["children", "disabled"]);

  var _useFormContext = useFormContext(),
      submitting = _useFormContext.submitting,
      readOnly = _useFormContext.readOnly;

  return /*#__PURE__*/React.createElement(Button, _extends({
    loading: submitting,
    disabled: submitting || readOnly || disabled
  }, rest), children);
};
SubmitButton.defaultProps = {
  type: 'submit',
  primary: true
};
SubmitButton.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string
};