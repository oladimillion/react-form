"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParentPath = exports["default"] = exports.getPath = void 0;

var _isNumber = require("./isNumber");

var getPath = function getPath(fieldName) {
  var hasRuleInName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var fieldNames = fieldName.split('.');

  if (hasRuleInName) {
    fieldNames.shift();
  }

  return fieldNames.map(function (part) {
    if ((0, _isNumber.isNumber)(part)) return '*';
    return part;
  }).join('.');
};

exports["default"] = exports.getPath = getPath;

var getParentPath = function getParentPath(fieldName) {
  if (fieldName.includes('.*.')) {
    // parentPath for field array
    return fieldName.split('.*.')[0];
  } else if (fieldName.includes('.')) {
    // parentPath for object
    return fieldName.split('.')[0];
  }

  return fieldName;
};

exports.getParentPath = getParentPath;