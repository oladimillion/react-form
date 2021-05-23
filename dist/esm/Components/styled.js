var commonStyle = "\n  border: 1px solid transparent !important;\n  color: rgba(0,0,0,.87);\n  opacity: 1 !important;\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n\n  &:-internal-autofill-selected {\n    background-color: inherit;\n  }\n\n  &:-webkit-autofill {\n    background-color: inherit;\n  }\n";
export var disabled = function disabled(_ref) {
  var disabled = _ref.disabled;
  return disabled && "\n  && input {\n    ".concat(commonStyle, ";\n  }\n  ").concat(commonStyle, ";\n");
};