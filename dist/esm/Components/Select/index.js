import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout, space } from 'styled-system';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Select as UISelect } from 'semantic-ui-react';
import { disabled } from '../styled';
export var Select = styled(UISelect).withConfig({
  displayName: "Select",
  componentId: "sc-1v2b2it-0"
})({
  width: '100%'
}, space, layout, disabled);
Select.displayName = 'Select';
Select.defaultProps = {
  search: true
};
Select.propTypes = _objectSpread(_objectSpread(_objectSpread({}, space.propTypes), layout.propTypes), {}, {
  search: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string
  })).isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.any])
});
hoistNonReactStatics(Select, UISelect);