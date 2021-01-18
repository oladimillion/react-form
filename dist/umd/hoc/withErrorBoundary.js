"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withErrorBoundary = exports.ErrorBoundary = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Components = require("../Components");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Info = _styledComponents["default"].i.withConfig({
  displayName: "withErrorBoundary__Info",
  componentId: "sc-1s4yr21-0"
})(["text-decoration:underline;"]);

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    (0, _classCallCheck2["default"])(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      hasError: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isDev", process.env.NODE_ENV === 'development');
    return _this;
  }

  (0, _createClass2["default"])(ErrorBoundary, [{
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
        return /*#__PURE__*/_react["default"].createElement(_Components.FlexBox, {
          flexDirection: "column"
        }, /*#__PURE__*/_react["default"].createElement("h3", null, "Something went wrong: ", isDev && /*#__PURE__*/_react["default"].createElement(Info, null, error === null || error === void 0 ? void 0 : error.message)), /*#__PURE__*/_react["default"].createElement("pre", null, isDev && (errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack)));
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
}(_react["default"].Component);

exports.ErrorBoundary = ErrorBoundary;

var withErrorBoundary = function withErrorBoundary(WrappedComponet) {
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(ErrorBoundary, null, /*#__PURE__*/_react["default"].createElement(WrappedComponet, props));
  };
};

exports.withErrorBoundary = withErrorBoundary;