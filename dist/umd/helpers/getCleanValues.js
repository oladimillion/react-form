"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCleanValues = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _checkTypes = _interopRequireDefault(require("check-types"));

var _isEmptyValue = require("./isEmptyValue");

var _getPath = require("./getPath");

var _getComputedDepend = require("./getComputedDepend");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getCleanValues = function getCleanValues(values, dependencies) {
  var getValue = function getValue(value, parentPath) {
    if (_checkTypes["default"].array(value)) {
      return value.map(function (val, idx) {
        if (!_checkTypes["default"].object(val)) return val;
        return Object.entries(val).reduce(function (accum, _ref) {
          var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
              k = _ref2[0],
              v = _ref2[1];

          if (!k) return accum;
          var path = "".concat(parentPath, ".*.").concat(k);
          var fieldName = "".concat(parentPath, ".").concat(idx, ".").concat(k);
          var depend = (0, _getComputedDepend.getComputedDepend)(dependencies, path)(values, fieldName, idx);

          if (depend && !(0, _isEmptyValue.isEmptyValue)(v)) {
            return _objectSpread(_objectSpread({}, accum), {}, (0, _defineProperty2["default"])({}, k, v));
          }

          return accum;
        }, {});
      });
    } else if (_checkTypes["default"].object(value)) {
      return Object.entries(value).reduce(function (accum, _ref3) {
        var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
            k = _ref4[0],
            v = _ref4[1];

        var path = "".concat(parentPath, ".").concat(k);
        var depend = (0, _getComputedDepend.getComputedDepend)(dependencies, path)(values, path);

        if (depend && !(0, _isEmptyValue.isEmptyValue)(v)) {
          return _objectSpread(_objectSpread({}, accum), {}, (0, _defineProperty2["default"])({}, k, v));
        }

        return accum;
      }, {});
    }

    var depend = (0, _getComputedDepend.getComputedDepend)(dependencies, parentPath)(values);

    if (depend && !(0, _isEmptyValue.isEmptyValue)(value)) {
      return value;
    }

    return null;
  };

  return Object.entries(values).reduce(function (accum, _ref5) {
    var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
        parentPath = _ref6[0],
        value = _ref6[1];

    var fieldValue = getValue(value, parentPath);
    return _objectSpread(_objectSpread({}, accum), !(0, _isEmptyValue.isEmptyValue)(fieldValue) && (0, _defineProperty2["default"])({}, parentPath, fieldValue));
  }, {});
};

exports.getCleanValues = getCleanValues;