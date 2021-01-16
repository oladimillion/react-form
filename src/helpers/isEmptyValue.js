import check from 'check-types'

export const isEmptyValue = (value) => {
  return (
    [
      null, 
      undefined, 
      '', 
      'null', 
      'undefined',
    ].includes(value) ||
    check.emptyObject(value) ||
    check.emptyArray(value)
  )
}
