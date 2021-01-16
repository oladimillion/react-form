import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Select as UISelect } from 'semantic-ui-react'
import { disabled } from '../styled'

export const Select = styled(UISelect)(
  {
    width: '100%',
  },
  space,
  layout,
  disabled,
)

Select.displayName = 'Select'

Select.defaultProps = {
  search: true,
}

Select.propTypes = { 
  ...space.propTypes,
  ...layout.propTypes,
  search: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
}

hoistNonReactStatics(Select, UISelect)
