import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../Components';
var Info = styled.i.withConfig({
  displayName: "withErrorBoundary__Info",
  componentId: "sc-1s4yr21-0"
})(["text-decoration:underline;"]);
export var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false
    });

    _defineProperty(_assertThisInitialized(_this), "isDev", process.env.NODE_ENV === 'development');

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hasError = _this$state.hasError,
          error = _this$state.error,
          errorInfo = _this$state.errorInfo;
      var isDev = this.isDev;

      if (hasError) {
        return /*#__PURE__*/React.createElement(FlexBox, {
          flexDirection: 'column',
          p: 1
        }, /*#__PURE__*/React.createElement("h3", null, "Something went wrong: ", isDev && /*#__PURE__*/React.createElement(Info, null, error === null || error === void 0 ? void 0 : error.message)), /*#__PURE__*/React.createElement("pre", null, isDev && (errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack)));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(React.Component);
export var withErrorBoundary = function withErrorBoundary(WrappedComponet) {
  return function (props) {
    return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(WrappedComponet, props));
  };
};