import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _get from "lodash/get";
import check from 'check-types';
export var getComputedDepend = function getComputedDepend(dependencies, path) {
  var defaultEval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var evaluate = _get(dependencies, path, defaultEval);

  return function (values) {
    var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var fieldIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (check["function"](evaluate)) {
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
    } else if (check.string(evaluate)) {
      /*
       *  'fieldName': {
       *    validation: 'required',
       *    message: {
       *      required: 'This field is required',
       *    },
       *    depend: 'anotherFieldName' // fieldName is dependent on anotherFieldName
       *  }
      */
      return _get(values, evaluate, false);
    } else if (check["boolean"](evaluate)) {
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
    } else if (check.object(evaluate)) {
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
        var _ref2 = _slicedToArray(_ref, 2),
            field = _ref2[0],
            evalValue = _ref2[1];

        return _get(values, field) === evalValue;
      });
    }

    return true;
  };
};