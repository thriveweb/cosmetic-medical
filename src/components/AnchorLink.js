import React from 'react'
import MoveTo from 'moveto'

const AnchorLink = ({
  options,
  href,
  className = '',
  children,
  onClick = () => {},
  toleranceElement
}) => {
  const defaultOptions = {
    tolerance: 50,
    duration: 800,
    easing: 'easeOutQuart'
  }

  const target = href.replace(/^\//, '')

  const handleClick = e => {
    e.preventDefault()
    if (toleranceElement) {
      defaultOptions.tolerance =
        document.querySelector(toleranceElement).offsetHeight - 1
      console.log(defaultOptions.tolerance)
    }
    const moveTo = new MoveTo(Object.assign(defaultOptions, options))
    moveTo.move(document.querySelector(target))
    if (onClick) onClick(e)
  }

  return (
    <a href={href} className={`AnchorLink ${className}`} onClick={handleClick}>
      {children}
    </a>
  )
}

export default AnchorLink
