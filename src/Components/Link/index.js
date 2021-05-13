import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as BaseLink, withRouter, BrowserRouter } from 'react-router-dom'
import { Text } from '../Text'

const RouterLink = styled(BaseLink).attrs(props => ({
  className: 'RouterLink',
}))`
  ${Text} {
  } ;
`

RouterLink.displayName = 'RouterLink'

RouterLink.defaultProps = {
  to: '',
}

const StyledLink = styled(Text).attrs(props => ({
  as: 'a',
  className: 'Link',
}))``

StyledLink.displayName = 'Link'

StyledLink.defaultProps = {
  href: null,
}

const LinkComponent = withRouter(props => {
  const { href, to, children, ...rest } = props
  return href ? (
    <StyledLink
      target={'_blank'}
      rel={'noreferrer noopener'}
      {...(href && { href })}
      {...rest}
    >
      {children || href}
    </StyledLink>
  ) : (
    <RouterLink to={to} {...rest}>
      {children}
    </RouterLink>
  )
})

export const Link = props => (
  <BrowserRouter>
    <LinkComponent {...props} />
  </BrowserRouter>
)

Link.defaultProps = {
  href: null,
  to: '',
  children: null,
}

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.any,
}
