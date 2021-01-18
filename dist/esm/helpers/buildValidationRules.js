import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
export var buildValidationRules = function buildValidationRules(validationRules) {
  return Object.entries(validationRules).reduce(function (accum, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        field = _ref2[0],
        rule = _ref2[1];

    accum[field] = rule.validation;
    return accum;
  }, {});
};