import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../Text';
export var ErrorMessage = function ErrorMessage(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Text, _extends({
    as: 'small',
    color: '#9f3a38'
  }, rest), children);
};
ErrorMessage.propTypes = {
  children: PropTypes.any
};