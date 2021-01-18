function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Radio as SemanticRadio } from 'semantic-ui-react';
import PropTypes from 'prop-types';
export var Radio = styled(SemanticRadio).attrs(function () {
  return {
    className: 'Radio'
  };
})(_templateObject());
Radio.displayName = 'Radio';
Radio.defaultProps = {
  toggle: true
};
Radio.propTypes = {
  toggle: PropTypes.bool
};
hoistNonReactStatics(Radio, SemanticRadio);