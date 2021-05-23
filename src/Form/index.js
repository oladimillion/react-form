import React from 'react'
import styled from 'styled-components'
import { get, set, cloneDeep } from 'lodash'
import check from 'check-types'
import Validator from 'validatorjs'
import PropTypes from 'prop-types'
import { withErrorBoundary } from '../hoc'
import { isEmptyValue } from '../helpers/isEmptyValue'
import { getPath } from '../helpers/getPath'
import { getCleanValues } from '../helpers/getCleanValues'
import { FormContext } from '../Context'
import { buildValidationRules } from '../helpers/buildValidationRules'
import { buildValidationDependencies } from '../helpers/buildValidationDependencies'
import {
  buildFieldValidationMessages,
  buildFormValidationMessages,
} from '../helpers/buildValidationMessages'
import { fieldTypes } from '../helpers/fieldTypes'

const StyledForm = styled.form``

const FormComponent = props => {
  const {
    children,
    initialValues,
    validationRules,
    render,
    onSubmit,
    readOnly,
    ...rest
  } = props

  const composedValidationRules = React.useMemo(() => {
    return buildValidationRules(validationRules)
  }, [validationRules])

  const composedValidationDependencies = React.useMemo(() => {
    return buildValidationDependencies(validationRules)
  }, [validationRules])

  const [values, setValues] = React.useState({ ...initialValues })
  const [errors, setErrors] = React.useState({})
  const [submitting, setSubmitting] = React.useState(false)

  // removing fields whose depend rule returns false
  const cleanValues = getCleanValues(values, composedValidationDependencies)

  const setFormValue = (newValues = {}, useInitialValues = true) => {
    setValues(state => ({ ...(useInitialValues && state), ...newValues }))
  }

  const setFormError = (newErrors = {}, useInitialErrors = true) => {
    setErrors(state => ({ ...(useInitialErrors && state), ...newErrors }))
  }

  const setFieldError = (fieldName, fieldError) => {
    setFormError(set(cloneDeep(errors), fieldName, fieldError))
  }

  const resetForm = () => {
    setValues({})
    setErrors({})
    setSubmitting(false)
  }

  const setFieldValue = (fieldName, fieldValue) => {
    const path = getPath(fieldName)
    const rules = get(validationRules, path, {})
    const composedRules = get(composedValidationRules, path, '')
    const composedMessage = buildFieldValidationMessages(
      fieldName,
      rules.message
    )
    if (rules.validation) {
      const validatorParams = [
        { ...cleanValues, [fieldName]: fieldValue },
        { [fieldName]: composedRules },
        composedMessage,
      ]
      const validator = new Validator(...validatorParams)
      validator.fails()
      setFieldError(fieldName, validator.errors.get(fieldName))
    }
    setFormValue(set(cloneDeep(values), fieldName, fieldValue))
  }

  const handleSubmit = async event => {
    event && event.preventDefault()

    let fails = false

    if (!check.emptyObject(validationRules)) {
      const validatorParams = [
        cleanValues,
        composedValidationRules,
        buildFormValidationMessages(validationRules, cleanValues),
      ]
      const validator = new Validator(...validatorParams)
      fails = validator.fails()
      setFormError(validator.errors.all())
    }

    if (check.emptyObject(validationRules) || !fails) {
      try {
        setSubmitting(true)
        await onSubmit({
          values: cleanValues,
          errors,
          submitting,
          resetForm,
          setFormError,
          setFormValue,
        })
      } finally {
        setSubmitting(false)
      }
    }
  }

  const handleChange = (e, props = {}) => {
    const { files, name: targetName, value: targetValue } = e.target
    const { name: propsName, value: propsValue, type, multiple } = props
    const name = !isEmptyValue(targetName) ? targetName : propsName
    const value = !isEmptyValue(targetValue) ? targetValue : propsValue

    if (type === fieldTypes.FILE && multiple) {
      setFieldValue(name, files)
    } else if (type === fieldTypes.FILE) {
      setFieldValue(name, files[0])
    } else {
      setFieldValue(name, value)
    }
  }

  const contextValue = {
    setFieldValue,
    setFieldError,
    setSubmitting,
    resetForm,
    submitting,
    dirty: !isEmptyValue(errors),
    values: cleanValues,
    errors,
    handleSubmit,
    handleChange,
    formValidationRules: composedValidationRules,
    formValidationDependencies: composedValidationDependencies,
    readOnly,
    setFormValue,
  }

  const renderChildren = React.useCallback(() => {
    if (check.function(children)) {
      return children(contextValue)
    } else if (check.function(render)) {
      return render(contextValue)
    }
    return children

    // eslint-disble-next-line
  }, [])

  return (
    <FormContext.Provider value={contextValue}>
      <StyledForm {...rest} onSubmit={handleSubmit}>
        {renderChildren()}
      </StyledForm>
    </FormContext.Provider>
  )
}

FormComponent.defaultProps = {
  validationRules: {},
  initialValues: {},
  readOnly: false,
}

FormComponent.propTypes = {
  validationRules: PropTypes.shape({}),
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  render: PropTypes.func,
}

export const Form = withErrorBoundary(FormComponent)
