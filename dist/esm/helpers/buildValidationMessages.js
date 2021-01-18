function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { get } from 'lodash';
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
      var parentValue = get(values, parentPath);
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