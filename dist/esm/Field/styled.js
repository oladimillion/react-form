import styled from 'styled-components';
import { Text, FlexBox, Link } from '../Components';
export var FieldWrapper = styled(FlexBox).withConfig({
  displayName: "styled__FieldWrapper",
  componentId: "sc-3wn4y9-0"
})(["", ""], function (_ref) {
  var isBooleanField = _ref.isBooleanField;
  return isBooleanField && "\n      flex-direction: row-reverse;\n      width: fit-content;\n\n      div:nth-child(2) {\n        margin-right: 1rem;\n      }\n  ";
});
export var Required = styled(Text).withConfig({
  displayName: "styled__Required",
  componentId: "sc-3wn4y9-1"
})(["font-size:1.3rem;color:#9f3a38;"]);
export var FileLink = styled(Link).withConfig({
  displayName: "styled__FileLink",
  componentId: "sc-3wn4y9-2"
})(["margin-left:8px;"]);