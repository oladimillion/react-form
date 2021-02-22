import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../Text';
export var Label = function Label(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Text, _extends({}, rest, {
    as: 'label'
  }), children);
};
Label.propTypes = {
  children: PropTypes.any
};