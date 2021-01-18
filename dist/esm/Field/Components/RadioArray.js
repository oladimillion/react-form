function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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