"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildFormValidationMessages = exports.buildFieldValidationMessages = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmptyValue = require("../helpers/isEmptyValue");

var _getPath = require("../helpers/getPath");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var buildFieldValidationMessages = function buildFieldValidationMessages(fieldName, message) {
  var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  message = message || {};
  return Object.entries(message).reduce(function (accum, _ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        validationRule = _ref2[0],
        validationMessage = _ref2[1];

    if (!validationRule || !validationMessage) return accum;

    if (!(0, _isEmptyValue.isEmptyValue)(values) && fieldName.includes('.*.')) {
      var parentPath = (0, _getPath.getParentPath)(fieldName);
      var parentValue = (0, _get2["default"])(values, parentPath);
      parentValue.forEach(function (_, index) {
        accum["".concat(validationRule, ".").concat(fieldName.replace('*', index))] = validationMessage;
      });
    } else {
      accum["".concat(validationRule, ".").concat(fieldName)] = validationMessage;
    }

    return accum;
  }, {});
};

exports.buildFieldValidationMessages = buildFieldValidationMessages;

var buildFormValidationMessages = function buildFormValidationMessages(validationRules, values) {
  return Object.entries(validationRules).reduce(function (accum, _ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        fieldName = _ref4[0],
        others = _ref4[1];

    var message = others.message;
    if (!message) return accum;
    var composedMessage = buildFieldValidationMessages(fieldName, message, values);
    return _objectSpread(_objectSpread({}, accum), composedMessage);
  }, {});
};

exports.buildFormValidationMessages = buildFormValidationMessages;