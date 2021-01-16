import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../Components'

const Info = styled.i`
  text-decoration: underline;
`

export class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {    
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {    
    this.setState({ error, errorInfo })
  }

  isDev = process.env.NODE_ENV === 'development'

  render() {
    const { hasError, error, errorInfo } = this.state
    const { isDev } = this

    if (hasError) {      
      return (
        <FlexBox flexDirection='column'>
          <h3>Something went wrong: {isDev && <Info>{error?.message}</Info>}</h3>
          <pre>{isDev && errorInfo?.componentStack}</pre>
        </FlexBox>
      )
    }
    return this.props.children 
  }
}

export const withErrorBoundary = (WrappedComponet) => (props) => {
  return (
    <ErrorBoundary>
      <WrappedComponet {...props} /> 
    </ErrorBoundary>
  )
}

