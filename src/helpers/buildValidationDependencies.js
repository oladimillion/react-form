export const buildValidationDependencies = validationRules => {
  return Object.entries(validationRules).reduce((accum, [field, rule]) => {
    accum[field] = rule.depend
    return accum
  }, {})
}
