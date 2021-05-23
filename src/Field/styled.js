import styled from 'styled-components'
import { Text, FlexBox, Link } from '../Components'

export const FieldWrapper = styled(FlexBox)`
  ${({ isBooleanField }) =>
    isBooleanField &&
    `
      flex-direction: row-reverse;
      width: fit-content;

      div:nth-child(2) {
        margin-right: 1rem;
      }
  `}
`

export const Required = styled(Text)`
  font-size: 1.3rem;
  color: #9f3a38;
`

export const FileLink = styled(Link)`
  margin-left: 8px;
`
