import _typeof from "@babel/runtime/helpers/typeof";
import check from 'check-types';
export var castArray = function castArray(value) {
  if (check.array(value)) {
    return value;
  } else if (_typeof(value) === 'object') {
    return Array.from(value);
  }

  return [value];
};