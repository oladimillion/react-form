import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import styled from 'styled-components';
import { shadow, layout, space, typography, color } from 'styled-system';
export var Text = styled.div.withConfig({
  displayName: "Text",
  componentId: "sc-1lncnwv-0"
})(["", ";", ";", ";", ";", ";"], space, layout, color, typography, shadow);
Text.displayName = 'Text';
Text.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, space.propTypes), layout.propTypes), color.propTypes), typography.propTypes), shadow.propTypes);
Text.defaultProps = {
  as: 'p'
};