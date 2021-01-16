import React from 'react'
import styled from 'styled-components'
import { get, set, cloneDeep } from 'lodash'
import check from 'check-types';
import Validator from 'validatorjs';
import PropTypes from 'prop-types'
import { withErrorBoundary } from '../hoc'
import { isEmptyValue } from '../helpers/isEmptyValue'
import { getPath } from '../helpers/getPath'
import { FormContext } from '../Context'
import { buildValidationRules } from '../helpers/buildValidationRules'
import { 
  buildFieldValidationMessages, 
  buildFormValidationMessages, 
} from '../helpers/buildValidationMessages'
import { fieldTypes } from '../helpers/fieldTypes'

const StyledForm = styled.form``

const FormComponent = (props) => {

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

  const [values, setValues] = React.useState(initialValues)
  const [errors, setErrors] = React.useState({})
  const [submitting, setSubmitting] = React.useState(false)

  const setFieldError = (fieldName, fieldError) => {
    const newErrors = set(cloneDeep(errors), fieldName, fieldError)
    setErrors(newErrors)
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
      rules.message, 
    )
    if (rules.validation) {
      const validatorParams = [
        { [fieldName]: fieldValue }, 
        { [fieldName]: composedRules },
        composedMessage, 
      ]
      const validator = new Validator(...validatorParams)
      validator.fails()
      setFieldError(fieldName, validator.errors.get(fieldName))
    }
    const newValues = set(cloneDeep(values), fieldName, fieldValue)
    setValues(newValues)
  }

  const handleSubmit = async (event) => {
    event && event.preventDefault()

    let fails = false

    if (!check.emptyObject(validationRules)) {
      const validatorParams = [
        values,
        composedValidationRules,
        buildFormValidationMessages(validationRules, values),
      ]
      const validator = new Validator(...validatorParams)
      fails = validator.fails();
      setErrors(validator.errors.all())
    }

    if (check.emptyObject(validationRules) || !fails) {
      try {
        setSubmitting(true)
        await onSubmit({ values, errors, submitting, resetForm })
      } finally {
        setSubmitting(false)
      }
    }
  }

  const handleChange = (e, props) => {
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
    values,
    errors,
    handleSubmit,
    handleChange,
    formValidationRules: composedValidationRules,
    readOnly,
  }

  const renderChildren = () => {
    if (check.function(children)) {
      return children(contextValue)
    } else if (check.function(render)) {
      return render(contextValue)
    }
    return children
  }

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

