import styled from 'styled-components'
import { background, layout, space, flexbox } from 'styled-system'

export const FlexBox = styled.div`
  ${space};
  ${layout};
  ${flexbox};
  ${background};
`

FlexBox.displayName = 'FlexBox'

FlexBox.propTypes = {
  ...space.propTypes,
  ...layout.propTypes,
  ...flexbox.propTypes,
  ...background.propTypes,
}

FlexBox.defaultProps = {
  display: 'flex',
}
