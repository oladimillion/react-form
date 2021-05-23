import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { Radio as BaseRadio } from '../../Components/Radio';
export var Radio = function Radio(_ref) {
  var options = _ref.options,
      rest = _objectWithoutProperties(_ref, ["options"]);

  return /*#__PURE__*/React.createElement(BaseRadio, rest, options.map(function (_ref2, index) {
    var text = _ref2.text,
        value = _ref2.value;
    return /*#__PURE__*/React.createElement(BaseRadio.Item, {
      key: index,
      text: text,
      value: value
    });
  }));
};
Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string
  })).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any
};