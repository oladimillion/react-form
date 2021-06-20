import React from 'react'
import check from 'check-types'
import PropTypes from 'prop-types'
import { FlexBox } from '../../Components'
import { isEmptyValue } from '../../helpers'
import { FileLink } from '../styled'

export const FileLinks = ({ value }) => {
  const links = React.useMemo(() => {
    if (isEmptyValue(value)) {
      return []
    } else if (check.array(value)) {
      return value
    } else if (value?.name) {
      return [value?.name]
    }
    return [...value].map(v => v?.name)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const renderLinks = () => {
    return links.map((link, index) => {
      const isFileObj = !link.includes('http')
      const props = {
        href: isFileObj ? '#' : link,
      }
      return (
        <FileLink key={index} {...props} external>
          {link}
        </FileLink>
      )
    })
  }

  return <FlexBox flexWrap="wrap">{renderLinks()}</FlexBox>
}

FileLinks.propTypes = {
  value: PropTypes.any,
}
