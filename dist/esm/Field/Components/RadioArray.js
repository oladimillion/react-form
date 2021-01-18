import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { RadioArray as BaseRadioArray } from '../../Components';
export var RadioArray = function RadioArray(_ref) {
  var name = _ref.name,
      value = _ref.value,
      options = _ref.options,
      rest = _objectWithoutProperties(_ref, ["name", "value", "options"]);

  return /*#__PURE__*/React.createElement(BaseRadioArray, _extends({
    name: name,
    value: value
  }, rest), options.map(function (_ref2, index) {
    var text = _ref2.text,
        value = _ref2.value;
    return /*#__PURE__*/React.createElement(BaseRadioArray.Item, {
      key: index,
      text: text,
      value: value
    });
  }));
};
RadioArray.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string
  })).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any
};