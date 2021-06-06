"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayName = void 0;

var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name;
};

exports.getDisplayName = getDisplayName;