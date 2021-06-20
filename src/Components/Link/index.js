import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as BaseLink } from 'react-router-dom'
import { Text } from '../Text'

const RouterLink = styled(BaseLink)`
  ${Text} {
  } ;
`

RouterLink.displayName = 'RouterLink'

RouterLink.defaultProps = {
  to: '',
}

const ExternalLink = styled(Text)``

ExternalLink.displayName = 'ExternalLink'

ExternalLink.defaultProps = {
  href: null,
  as: 'a',
  target: '_blank',
  rel: 'noreferrer noopener',
}

export const Link = props => {
  const { to, children, external, ...rest } = props
  return external ? (
    <ExternalLink {...rest}>{children || href}</ExternalLink>
  ) : (
    <RouterLink to={to} {...rest}>
      {children || to}
    </RouterLink>
  )
}

Link.defaultProps = {
  href: null,
  to: '',
  children: null,
  external: false,
}

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.any,
  external: PropTypes.bool,
}
