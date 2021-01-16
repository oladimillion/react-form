import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'
import { Text } from '../Text'

export const Link = styled(BaseLink).attrs((props) => ({
  className: 'Link',
}))`
  ${Text} {};
`

Link.displayName = 'Link'

Link.defaultProps = {
  to: ''
}
