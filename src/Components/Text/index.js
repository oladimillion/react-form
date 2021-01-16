import styled from 'styled-components'
import { shadow, layout, space, typography, color } from 'styled-system'

export const Text = styled.div.attrs((props) => ({
  className: 'Text',
  as: props.as
}))`
  ${space};
  ${layout};
  ${color};
  ${typography};
  ${shadow};
`

Text.displayName = 'Text'

Text.propTypes = { 
  ...space.propTypes,
  ...layout.propTypes,
  ...color.propTypes,
  ...typography.propTypes,
  ...shadow.propTypes,
}

Text.defaultProps = {
  as: 'p'
}

