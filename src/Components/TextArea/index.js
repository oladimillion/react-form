import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import { TextArea as SemanticTextArea } from 'semantic-ui-react'
import { disabled } from '../styled'


const StyledTextArea = styled(SemanticTextArea)(
  {
    resize: 'none',
    border: '1px solid rgba(34,36,38,.15)',
    'font-family': "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
    'border-radius': '5px',
  },
  space,
  layout,
  (props) => `
    &:focus {
      border-color: #85b7d9;
      background: #fff;
      color: rgba(0,0,0,.8);
      box-shadow: none;
    }
  `
)

const TextAreaWrapper = styled.div`
  textarea {
    ${({ error }) => error && `
      background-color: #fff6f6;
      border-color: #e0b4b4;
      color: #9f3a38;
      box-shadow: none;
    `}
    ${disabled}
    &:focus {
      border-color: #85b7d9;
    }
  }
`

export const TextArea = (props) => {
  const { error, disabled, ...rest } = props
  return (
    <TextAreaWrapper error={error} disabled={disabled}>
      <StyledTextArea {...rest} disabled={disabled} />
    </TextAreaWrapper>
  )
}

TextArea.displayName = 'TextArea'

TextArea.defaultProps = {
  p: 3,
  width: '100%',
  error: false,
}

TextArea.propTypes = { 
  ...space.propTypes,
  ...layout.propTypes,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
}

