import styled from 'styled-components'
import { border, background, layout } from 'styled-system'
import { Image as SemanticImage } from 'semantic-ui-react'

export const Image = styled(SemanticImage).attrs((props) => ({
  className: 'Image',
  as: props.as,
}))`
  ${border};
  ${layout};
  ${background};
`

Image.displayName = 'Image'

Image.propTypes = { 
  ...border.propTypes,
  ...layout.propTypes,
  ...background.propTypes,
}

Image.defaultProps = {
  as: 'img'
}
