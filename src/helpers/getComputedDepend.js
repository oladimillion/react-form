import { get } from 'lodash'
import check from 'check-types'

export const getComputedDepend = (dependencies, path, defaultEval = true) => {
  const evaluate = get(dependencies, path, defaultEval)

  return (values, fieldName = null, fieldIndex = null) => {
    if (check.function(evaluate)) {
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
      return evaluate(values, fieldName, fieldIndex)
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
      return get(values, evaluate, false)
    } else if (check.boolean(evaluate)) {
      /*
       *  'fieldName': {
       *    validation: 'required',
       *    message: {
       *      required: 'This field is required',
       *    },
       *    depend: false // depend of `false` will hide fieldName
       *  }
       */
      return evaluate
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
      return Object.entries(evaluate).every(([field, evalValue]) => {
        return get(values, field) === evalValue
      })
    }
    return true
  }
}
