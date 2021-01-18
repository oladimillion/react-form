"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildValidationRules = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var buildValidationRules = function buildValidationRules(validationRules) {
  return Object.entries(validationRules).reduce(function (accum, _ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        field = _ref2[0],
        rule = _ref2[1];

    accum[field] = rule.validation;
    return accum;
  }, {});
};

exports.buildValidationRules = buildValidationRules;