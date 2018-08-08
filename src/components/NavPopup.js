import React from 'react'

import './NavPopup.css'
import NavLink from './NavLink'

export default class Popup extends React.Component {
  componentDidMount = () => {
    // document.body.classList.add('stuck')
  }

  componentWillUnmount = () => {
    // document.body.classList.remove('stuck')
  }

  render () {
    const { active, navLinks, bookNow, phone, handleClose } = this.props
    return (
      <div className={`NavPopup ${active && 'active'}`}>
        <button className='NavPopup--CloseButton' onClick={handleClose}>
          <CloseSVG />
        </button>
        <div>
          {navLinks &&
            navLinks
              .filter(navLink => !!navLink)
              .map(link => (
                <NavLink key={link} link={link} onClick={handleClose} />
              ))}
        </div>
        <div>
          {phone && (
            <a className='NavPopup--IconLink' href={`tel:${phone}`}>
              <img
                className='NavPopup--IconLink--Icon'
                src='/images/phone.svg'
                alt='Phone'
              />{' '}
              <span>{phone}</span>
            </a>
          )}
          {bookNow && (
            <a
              className='Button Button--inverted NavPopup--BookNow'
              href={bookNow}
            >
              Book Now
            </a>
          )}
        </div>
      </div>
    )
  }
}

const CloseSVG = () => (
  <svg
    width='28'
    height='27'
    viewBox='0 0 28 27'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g stroke='#AE8B77' strokeWidth='3' fill='none' fillRule='evenodd'>
      <path d='M2 26L27 1M2 1l25 25' />
    </g>
  </svg>
)
