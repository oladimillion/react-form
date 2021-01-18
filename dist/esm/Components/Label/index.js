import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../Text';
export var Label = function Label(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(StyledText, _extends({}, rest, {
    as: "label"
  }), children);
};
var StyledText = styled(Text).withConfig({
  displayName: "Label__StyledText",
  componentId: "pbegrj-0"
})(["font-weight:bold;font-size:1.1rem;"]);
Label.propTypes = {
  children: PropTypes.any
};