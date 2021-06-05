"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withToggle = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var withToggle = function withToggle(WrappedComponent) {
  var WithToggle = function WithToggle(props) {
    var value = props.value,
        onChange = props.onChange,
        rest = (0, _objectWithoutProperties2["default"])(props, ["value", "onChange"]); // casting value to boolean

    var checked = Boolean(value);

    var handleChange = function handleChange(_, _ref) {
      var checked = _ref.checked,
          name = _ref.name;
      return onChange({
        target: {
          name: name,
          value: checked
        }
      });
    };

    return /*#__PURE__*/_react["default"].createElement(WrappedComponent, (0, _extends2["default"])({}, rest, {
      checked: checked,
      onChange: handleChange
    }));
  };

  WithToggle.defaultProps = {
    value: false
  };
  WithToggle.propTypes = {
    value: _propTypes["default"].bool,
    onChange: _propTypes["default"].func
  };
  WithToggle.displayName = 'WithToggle';
  return (0, _hoistNonReactStatics["default"])(WithToggle, WrappedComponent);
};

exports.withToggle = withToggle;