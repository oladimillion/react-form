import { isNumber } from './isNumber';
export var getPath = function getPath(fieldName) {
  var hasRuleInName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var fieldNames = fieldName.split('.');

  if (hasRuleInName) {
    fieldNames.shift();
  }

  return fieldNames.map(function (part) {
    if (isNumber(part)) return '*';
    return part;
  }).join('.');
};
export var getParentPath = function getParentPath(fieldName) {
  if (fieldName.includes('.*.')) {
    return fieldName.split('.*.')[0];
  }

  return fieldName;
};
export { getPath as default };