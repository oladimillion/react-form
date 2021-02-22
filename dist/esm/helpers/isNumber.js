import check from 'check-types';
export var isNumber = function isNumber(value) {
  return check.number(Number(value));
};