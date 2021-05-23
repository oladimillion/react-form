import check from 'check-types'
import { isEmptyValue } from './isEmptyValue'
import { getParentPath } from './getPath'
import { getComputedDepend } from './getComputedDepend'

export const getCleanValues = (values, dependencies) => {
  const getValue = (value, parentPath) => {
    if (check.array(value)) {
      return value.map((val, idx) => {
        if (!check.object(val)) return val
        return Object.entries(val).reduce((accum, [k, v]) => {
          if (!k) return accum
          let path = `${parentPath}.*.${k}`
          let fieldName = `${parentPath}.${idx}.${k}`
          let depend = getComputedDepend(dependencies, path)(
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
        let path = `${parentPath}.${k}`
        let depend = getComputedDepend(dependencies, path)(values, path)
        if (depend && !isEmptyValue(v)) {
          return { ...accum, [k]: v }
        }
        return accum
      }, {})
    }

    const depend = getComputedDepend(dependencies, parentPath)(values)
    if (depend && !isEmptyValue(value)) {
      return value
    }
    return null
  }

  return Object.entries(values).reduce((accum, [parentPath, value]) => {
    let fieldValue = getValue(value, parentPath)
    return {
      ...accum,
      ...(!isEmptyValue(fieldValue) && { [parentPath]: fieldValue }),
    }
  }, {})
}
