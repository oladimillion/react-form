import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout, space } from 'styled-system';
import { TextArea as SemanticTextArea } from 'semantic-ui-react';
import { disabled } from '../styled';
var StyledTextArea = styled(SemanticTextArea).withConfig({
  displayName: "TextArea__StyledTextArea",
  componentId: "sc-5y0yh4-0"
})({
  resize: 'none',
  border: '1px solid rgba(34,36,38,.15)',
  'font-family': "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  'border-radius': '5px'
}, space, layout, function (props) {
  return "\n    &:focus {\n      border-color: #85b7d9;\n      background: #fff;\n      color: rgba(0,0,0,.8);\n      box-shadow: none;\n      outline: none;\n    }\n  ";
});
var TextAreaWrapper = styled.div.withConfig({
  displayName: "TextArea__TextAreaWrapper",
  componentId: "sc-5y0yh4-1"
})(["textarea{", " ", " &:focus{border-color:#85b7d9;}}"], function (_ref) {
  var error = _ref.error;
  return error && "\n      background-color: #fff6f6;\n      border-color: #e0b4b4;\n      color: #9f3a38;\n      box-shadow: none;\n    ";
}, disabled);
export var TextArea = function TextArea(props) {
  var error = props.error,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["error", "disabled"]);

  return /*#__PURE__*/React.createElement(TextAreaWrapper, {
    error: error,
    disabled: disabled
  }, /*#__PURE__*/React.createElement(StyledTextArea, _extends({}, rest, {
    disabled: disabled
  })));
};
TextArea.displayName = 'TextArea';
TextArea.defaultProps = {
  p: 3,
  width: '100%',
  error: false
};
TextArea.propTypes = _objectSpread(_objectSpread(_objectSpread({}, space.propTypes), layout.propTypes), {}, {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.any])
});