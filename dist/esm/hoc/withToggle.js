import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import PropTypes from 'prop-types';
export var withToggle = function withToggle(WrappedComponent) {
  var WithToggle = function WithToggle(props) {
    var value = props.value,
        onChange = props.onChange,
        rest = _objectWithoutProperties(props, ["value", "onChange"]); // casting value to boolean


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

    return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, rest, {
      checked: checked,
      onChange: handleChange
    }));
  };

  WithToggle.defaultProps = {
    value: false
  };
  WithToggle.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func
  };
  WithToggle.displayName = 'WithToggle';
  return hoistNonReactStatics(WithToggle, WrappedComponent);
};