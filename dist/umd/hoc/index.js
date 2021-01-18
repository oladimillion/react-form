"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withErrorBoundary = require("./withErrorBoundary");

Object.keys(_withErrorBoundary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _withErrorBoundary[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _withErrorBoundary[key];
    }
  });
});