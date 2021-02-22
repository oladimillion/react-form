import { get } from 'lodash'
import check from 'check-types'
import { isEmptyValue } from './isEmptyValue'
import { getParentPath } from './getPath'

const getDepend = () => true

export const getCleanValues = (values, dependencies) => {
  const getValue = (value, parentPath) => {
    if (check.array(value)) {
      return value.map((val, idx) => {
        if (!check.object(val)) return val
        return Object.entries(val).reduce((accum, [k, v]) => {
          if (!k) return accum
          const path = `${parentPath}.*.${k}`
          const fieldName = `${parentPath}.${idx}.${k}`
          const depend = get(dependencies, path, getDepend)(
            values,
            fieldName,
            idx
          )
          if (depend && !isEmptyValue(v)) {
            return { ...accum, [k]: v }
          }
          return accum
        }, {})
      })
    } else if (check.object(value)) {
      return Object.entries(value).reduce((accum, [k, v]) => {
        const path = `${parentPath}.${k}`
        const depend = get(dependencies, path, getDepend)(values, path)
        if (depend && !isEmptyValue(v)) {
          return { ...accum, [k]: v }
        }
        return accum
      }, {})
    }

    const depend = get(dependencies, parentPath, getDepend)(values)
    if (depend && !isEmptyValue(value)) {
      return value
    }
    return null
  }

  return Object.entries(values).reduce((accum, [parentPath, value]) => {
    const fieldValue = getValue(value, parentPath)
    return {
      ...accum,
      ...(fieldValue && { [parentPath]: fieldValue }),
    }
  }, {})
}
