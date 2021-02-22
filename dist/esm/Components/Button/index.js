import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import styled from 'styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { layout, space } from 'styled-system';
import { Button as SemanticButton } from 'semantic-ui-react';
import PropTypes from 'prop-types';

var ButtonComponent = function ButtonComponent(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React.createElement(SemanticButton, rest, children);
};

export var Button = styled(ButtonComponent).withConfig({
  displayName: "Button",
  componentId: "sc-19mvw3p-0"
})(space, layout);
Button.displayName = 'Button';
Button.defaultProps = {
  type: 'button'
};
Button.propTypes = _objectSpread(_objectSpread(_objectSpread({}, space.propTypes), layout.propTypes), {}, {
  children: PropTypes.any
});
hoistNonReactStatics(Button, SemanticButton);