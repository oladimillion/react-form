"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileLink = exports.Required = exports.FieldWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Components = require("../Components");

var FieldWrapper = (0, _styledComponents["default"])(_Components.FlexBox).withConfig({
  displayName: "styled__FieldWrapper",
  componentId: "sc-3wn4y9-0"
})(["", ""], function (_ref) {
  var isBooleanField = _ref.isBooleanField;
  return isBooleanField && "\n      flex-direction: row-reverse;\n      width: fit-content;\n\n      div:nth-child(2) {\n        margin-right: 1rem;\n      }\n  ";
});
exports.FieldWrapper = FieldWrapper;
var Required = (0, _styledComponents["default"])(_Components.Text).withConfig({
  displayName: "styled__Required",
  componentId: "sc-3wn4y9-1"
})(["font-size:1.3rem;color:#9f3a38;"]);
exports.Required = Required;
var FileLink = (0, _styledComponents["default"])(_Components.Link).withConfig({
  displayName: "styled__FileLink",
  componentId: "sc-3wn4y9-2"
})(["margin-left:8px;"]);
exports.FileLink = FileLink;