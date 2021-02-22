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
    // parentPath for field array
    return fieldName.split('.*.')[0]
  } else if (fieldName.includes('.')) {
    // parentPath for object
    return fieldName.split('.')[0]
  }
  return fieldName
}

export { getPath as default }
