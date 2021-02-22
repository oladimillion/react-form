import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _get from "lodash/get";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import check from 'check-types';
import { isEmptyValue } from './isEmptyValue';
import { getParentPath } from './getPath';

var getDepend = function getDepend() {
  return true;
};

export var getCleanValues = function getCleanValues(values, dependencies) {
  var getValue = function getValue(value, parentPath) {
    if (check.array(value)) {
      return value.map(function (val, idx) {
        if (!check.object(val)) return val;
        return Object.entries(val).reduce(function (accum, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              k = _ref2[0],
              v = _ref2[1];

          if (!k) return accum;
          var path = "".concat(parentPath, ".*.").concat(k);
          var fieldName = "".concat(parentPath, ".").concat(idx, ".").concat(k);

          var depend = _get(dependencies, path, getDepend)(values, fieldName, idx);

          if (depend && !isEmptyValue(v)) {
            return _objectSpread(_objectSpread({}, accum), {}, _defineProperty({}, k, v));
          }

          return accum;
        }, {});
      });
    } else if (check.object(value)) {
      return Object.entries(value).reduce(function (accum, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            k = _ref4[0],
            v = _ref4[1];

        var path = "".concat(parentPath, ".").concat(k);

        var depend = _get(dependencies, path, getDepend)(values, path);

        if (depend && !isEmptyValue(v)) {
          return _objectSpread(_objectSpread({}, accum), {}, _defineProperty({}, k, v));
        }

        return accum;
      }, {});
    }

    var depend = _get(dependencies, parentPath, getDepend)(values);

    if (depend && !isEmptyValue(value)) {
      return value;
    }

    return null;
  };

  return Object.entries(values).reduce(function (accum, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        parentPath = _ref6[0],
        value = _ref6[1];

    var fieldValue = getValue(value, parentPath);
    return _objectSpread(_objectSpread({}, accum), fieldValue && _defineProperty({}, parentPath, fieldValue));
  }, {});
};