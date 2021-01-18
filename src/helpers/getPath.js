import { isNumber } from './isNumber'

export const getPath = (fieldName, hasRuleInName = false) => {
  const fieldNames = fieldName.split('.')
  if (hasRuleInName) {
    fieldNames.shift()
  }
  return fieldNames
    .map(part => {
      if (isNumber(part)) return '*'
      return part
    })
    .join('.')
}

export const getParentPath = fieldName => {
  if (fieldName.includes('.*.')) {
    return fieldName.split('.*.')[0]
  }
  return fieldName
}

export { getPath as default }
