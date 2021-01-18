function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import check from 'check-types';
export var castArray = function castArray(value) {
  if (check.array(value)) {
    return value;
  } else if (_typeof(value) === 'object') {
    return Array.from(value);
  }

  return [value];
};