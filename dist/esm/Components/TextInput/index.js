import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout, space } from 'styled-system';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Input as SemanticInput } from 'semantic-ui-react';
import { disabled } from '../styled';
export var TextInput = styled(SemanticInput).withConfig({
  displayName: "TextInput",
  componentId: "ia1v2o-0"
})(space, layout, disabled);
TextInput.displayName = 'TextInput';
TextInput.defaultProps = {
  width: '100%'
};
TextInput.propTypes = _objectSpread(_objectSpread(_objectSpread({}, space.propTypes), layout.propTypes), {}, {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.any])
});
hoistNonReactStatics(TextInput, SemanticInput);