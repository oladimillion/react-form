import { get } from 'lodash'
import { isEmptyValue } from '../helpers/isEmptyValue'
import { getParentPath } from '../helpers/getPath'

export const buildFieldValidationMessages = (fieldName, message, values={}) => {
  message = message || {}
  return Object.entries(message)
    .reduce((accum, [validationRule, validationMessage]) => {
      if (!validationRule || !validationMessage) return accum;
      if (!isEmptyValue(values) && fieldName.includes('.*.')) {
        const parentPath = getParentPath(fieldName)
        const parentValue = get(values, parentPath)
        parentValue.forEach((_, index) => {
          accum[`${validationRule}.${fieldName.replace('*', index)}`] = validationMessage
        })
      } else {
        accum[`${validationRule}.${fieldName}`] = validationMessage
      }
      return accum;
    }, {})
}

export const buildFormValidationMessages = (validationRules, values) => {
  return Object.entries(validationRules)
    .reduce((accum, [fieldName, others]) =>{
      const { message } = others;
      if (!message) return accum;
      const composedMessage = buildFieldValidationMessages(fieldName, message, values)
      return { ...accum, ...composedMessage };
    }, {})
}

