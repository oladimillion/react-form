"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileLinks = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _checkTypes = _interopRequireDefault(require("check-types"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Components = require("../../Components");

var _helpers = require("../../helpers");

var _styled = require("../styled");

var FileLinks = function FileLinks(_ref) {
  var value = _ref.value;

  var links = _react["default"].useMemo(function () {
    if ((0, _helpers.isEmptyValue)(value)) {
      return [];
    } else if (_checkTypes["default"].array(value)) {
      return value;
    } else if (value !== null && value !== void 0 && value.name) {
      return [value === null || value === void 0 ? void 0 : value.name];
    }

    return (0, _toConsumableArray2["default"])(value).map(function (v) {
      return v === null || v === void 0 ? void 0 : v.name;
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  var renderLinks = function renderLinks() {
    return links.map(function (link, index) {
      var isFileObj = !link.includes('http');
      var props = {
        href: isFileObj ? '#' : link
      };
      return /*#__PURE__*/_react["default"].createElement(_styled.FileLink, (0, _extends2["default"])({
        key: index
      }, props, {
        external: true
      }), link);
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_Components.FlexBox, {
    flexWrap: "wrap"
  }, renderLinks());
};

exports.FileLinks = FileLinks;
FileLinks.propTypes = {
  value: _propTypes["default"].any
};