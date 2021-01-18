"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Radio = require("./Radio");

Object.keys(_Radio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Radio[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Radio[key];
    }
  });
});

var _RadioArray = require("./RadioArray");

Object.keys(_RadioArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RadioArray[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RadioArray[key];
    }
  });
});