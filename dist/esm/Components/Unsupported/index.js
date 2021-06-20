import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../Text';
export var Unsupported = function Unsupported(_ref) {
  var type = _ref.type;
  return /*#__PURE__*/React.createElement(Text, {
    mb: 2,
    as: 'div'
  }, "Field Type ", /*#__PURE__*/React.createElement("b", null, type), " not supported");
};
Unsupported.defaultProps = {
  type: 'unknown'
};
Unsupported.propTypes = {
  type: PropTypes.string
};