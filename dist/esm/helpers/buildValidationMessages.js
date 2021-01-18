import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _get from "lodash/get";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { isEmptyValue } from '../helpers/isEmptyValue';
import { getParentPath } from '../helpers/getPath';
export var buildFieldValidationMessages = function buildFieldValidationMessages(fieldName, message) {
  var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  message = message || {};
  return Object.entries(message).reduce(function (accum, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        validationRule = _ref2[0],
        validationMessage = _ref2[1];

    if (!validationRule || !validationMessage) return accum;

    if (!isEmptyValue(values) && fieldName.includes('.*.')) {
      var parentPath = getParentPath(fieldName);

      var parentValue = _get(values, parentPath);

      parentValue.forEach(function (_, index) {
        accum["".concat(validationRule, ".").concat(fieldName.replace('*', index))] = validationMessage;
      });
    } else {
      accum["".concat(validationRule, ".").concat(fieldName)] = validationMessage;
    }

    return accum;
  }, {});
};
export var buildFormValidationMessages = function buildFormValidationMessages(validationRules, values) {
  return Object.entries(validationRules).reduce(function (accum, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        fieldName = _ref4[0],
        others = _ref4[1];

    var message = others.message;
    if (!message) return accum;
    var composedMessage = buildFieldValidationMessages(fieldName, message, values);
    return _objectSpread(_objectSpread({}, accum), composedMessage);
  }, {});
};