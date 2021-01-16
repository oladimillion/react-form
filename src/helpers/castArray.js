import check from 'check-types'

export const castArray = (value) => {
  if (check.array(value)) {
    return value
  } else if (typeof value === 'object') {
    return Array.from(value) 
  } 
  return [value]
}
