import React from 'react'
import styled from 'styled-components'
import check from 'check-types'
import PropTypes from 'prop-types'
import { Icon, Divider, Segment } from 'semantic-ui-react'
import { FlexBox } from '../FlexBox'
import { Button } from '../Button'
import { Label } from '../Label'
import { useField } from '../../hooks/useField'
import { useFormContext } from '../../hooks/useFormContext'
import { isEmptyValue } from  '../../helpers/isEmptyValue'

export const FieldArray = (props) => {
  const { name, children, render, label, ...rest } = props
  const { value, setValue, readOnly, submitting } = useField(name) 
  const disabled = readOnly || submitting || rest.disabled

  check.assert.string(name, 'name is required')
  check.assert.function(children, 'children must be a function')
  check.assert.function(render, 'render must be a function')

  React.useEffect(() => {
    if (isEmptyValue(value)) setValue([{}])
    return () => null

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const add = (defaultValue) => {

    if (disabled) return

    // ensuring defaultValue is serializable
    try {
      JSON.stringify(defaultValue)
    } catch(e) {
      defaultValue = null
    }
    setValue([...value, defaultValue || {}])
  }
  const remove = (index) => {
    if (disabled) return
    if (value?.length > 1) {
      setValue(value.filter((_, i) => i !== index))
    }
  }
  const args = { values: value || [], add, remove }

  return (
    <FlexBox flexDirection='column' {...rest}>
      {label && <Label>{label}</Label>}
      <Wrapper>
        {children && children(args)}
        {render && render(args)}
      </Wrapper>
    </FlexBox>
  )
}

const Wrapper = styled(Segment)`
  && {
    padding: 1rem;
    padding-top: 0;
    margin: 0.5rem 0;
  }
`

const Item = styled(FlexBox).attrs(() => ({
  flexDirection: 'column'
}))`
  position: relative;
`

const RemoveButton = styled((props) => {
  const { submitting, readOnly } = useFormContext()
  const disabled = submitting || readOnly
  return <Icon {...props} name='cancel' disabled={disabled}/>
})`
  position: absolute;
  top: 9px;
  right: 0;
  color: #9f3a38;
  cursor: pointer;
  scale: 1.5;
`

const AddButton = styled((props) => {
  const { children, ...rest } = props
  const { submitting, readOnly } = useFormContext()
  const disabled = submitting || readOnly
  return (
    <Button 
      {...rest} 
      disabled={disabled} 
      type='button'
    >
      {children}
    </Button>
  )
})`
  && {
    margin: 0;
    margin-top: 0.3rem;
  }
`

AddButton.defaultProps = {
  children: 'Add'
}

const StyledDivider = styled(Divider)`
  && {
    margin: 0;
  }
`

FieldArray.Item = Item
FieldArray.RemoveButton = RemoveButton
FieldArray.AddButton = AddButton
FieldArray.Divider = StyledDivider

FieldArray.defaultProps = {
  render: () => null,
  children: () => null,
}

FieldArray.propTypes = {
  name: PropTypes.string.isRequired,
  lable: PropTypes.string,
  children: PropTypes.func,
  render: PropTypes.func,
}

