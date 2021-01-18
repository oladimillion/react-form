"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _Text = require("../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", " {};\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Link = (0, _styledComponents["default"])(_reactRouterDom.Link).attrs(function (props) {
  return {
    className: 'Link'
  };
})(_templateObject(), _Text.Text);
exports.Link = Link;
Link.displayName = 'Link';
Link.defaultProps = {
  to: ''
};