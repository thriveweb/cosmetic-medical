import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import AnchorLink from './AnchorLink'

export default ({ link, children, className = '', onClick }) => {
  return (
    <AnchorLink
      className={`NavLink ${className}`}
      href={`/#${_kebabCase(link)}`}
      onClick={onClick}
      toleranceElement='.Nav'
    >
      {children || link}
    </AnchorLink>
  )
}
