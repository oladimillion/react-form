"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComputedDepend = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _checkTypes = _interopRequireDefault(require("check-types"));

var getComputedDepend = function getComputedDepend(dependencies, path) {
  var defaultEval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var evaluate = (0, _get2["default"])(dependencies, path, defaultEval);
  return function (values) {
    var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var fieldIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (_checkTypes["default"]["function"](evaluate)) {
      /*
       *  'fieldName': {
       *    validation: 'required',
       *    message: {
       *      required: 'This field is required',
       *    },
       *    depend: (values, fieldName, index) => {
       *      const { number } = values.fieldArray[index]
       *      return number === '2'
       *    }
       *  }
       */
      return evaluate(values, fieldName, fieldIndex);
    } else if (_checkTypes["default"].string(evaluate)) {
      /*
       *  'fieldName': {
       *    validation: 'required',
       *    message: {
       *      required: 'This field is required',
       *    },
       *    depend: 'anotherFieldName' // fieldName is dependent on anotherFieldName
       *  }
       */
      return (0, _get2["default"])(values, evaluate, false);
    } else if (_checkTypes["default"]["boolean"](evaluate)) {
      /*
       *  'fieldName': {
       *    validation: 'required',
       *    message: {
       *      required: 'This field is required',
       *    },
       *    depend: false // depend of `false` will hide fieldName
       *  }
       */
      return evaluate;
    } else if (_checkTypes["default"].object(evaluate)) {
      /*
       *  'fieldName': {
       *    validation: 'required',
       *    message: {
       *      required: 'This field is required',
       *    },
       *    depend: { field1: 'value1', field2: 'value2' } // fieldName is dependent on field1 and field2
       *  }
       */
      return Object.entries(evaluate).every(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            field = _ref2[0],
            evalValue = _ref2[1];

        return (0, _get2["default"])(values, field) === evalValue;
      });
    }

    return true;
  };
};

exports.getComputedDepend = getComputedDepend;