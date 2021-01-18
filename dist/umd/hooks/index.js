"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useField = require("./useField");

Object.keys(_useField).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useField[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useField[key];
    }
  });
});

var _useFormContext = require("./useFormContext");

Object.keys(_useFormContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useFormContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useFormContext[key];
    }
  });
});