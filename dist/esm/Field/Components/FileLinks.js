import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React from 'react';
import check from 'check-types';
import PropTypes from 'prop-types';
import { FlexBox } from '../../Components';
import { isEmptyValue } from '../../helpers';
import { FileLink } from '../styled';
export var FileLinks = function FileLinks(_ref) {
  var value = _ref.value;
  var links = React.useMemo(function () {
    if (isEmptyValue(value)) {
      return [];
    } else if (check.array(value)) {
      return value;
    } else if (value !== null && value !== void 0 && value.name) {
      return [value === null || value === void 0 ? void 0 : value.name];
    }

    return _toConsumableArray(value).map(function (v) {
      return v === null || v === void 0 ? void 0 : v.name;
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  var renderLinks = function renderLinks() {
    return links.map(function (link, index) {
      var isFileObj = !link.includes('http');
      var props = {
        href: isFileObj ? '#' : link
      };
      return /*#__PURE__*/React.createElement(FileLink, _extends({
        key: index
      }, props, {
        external: true
      }), link);
    });
  };

  return /*#__PURE__*/React.createElement(FlexBox, {
    flexWrap: "wrap"
  }, renderLinks());
};
FileLinks.propTypes = {
  value: PropTypes.any
};