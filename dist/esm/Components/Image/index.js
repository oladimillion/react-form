import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import styled from 'styled-components';
import { border, background, layout } from 'styled-system';
import { Image as SemanticImage } from 'semantic-ui-react';
export var Image = styled(SemanticImage).attrs(function (props) {
  return {
    className: 'Image',
    as: props.as
  };
}).withConfig({
  displayName: "Image",
  componentId: "sc-1ei3pgu-0"
})(["", ";", ";", ";"], border, layout, background);
Image.displayName = 'Image';
Image.propTypes = _objectSpread(_objectSpread(_objectSpread({}, border.propTypes), layout.propTypes), background.propTypes);
Image.defaultProps = {
  as: 'img'
};