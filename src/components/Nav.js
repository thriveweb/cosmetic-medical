import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen, navLinks, phone, bookNow }) => (
  <nav className='Nav'>
    <div className='Container'>
      <div className='Flex alignCenter justifyBetween'>
        <Link to='/' aria-label='Home'>
          <Logo />
        </Link>
        <div className='Nav--InnerWrap'>
          <div className='Nav--NavLinksWrap'>
            {navLinks &&
              navLinks
                .filter(navLink => !!navLink)
                .map(link => <NavLink key={link} link={link} />)}
          </div>
          {phone && (
            <a className='Nav--IconLink' href={`tel:${phone}`}>
              <img
                className='Nav--IconLink--Icon'
                src='/images/phone-dark.svg'
                alt='Phone'
              />
              <span>{phone}</span>
            </a>
          )}
          {bookNow && (
            <a className='Nav--BookNow Button Button--tertiary' href={bookNow}>
              Book Now
            </a>
          )}
        </div>
        <button
          className='Nav--MenuButton'
          onClick={handlePopupOpen}
          aria-label='Menu Button'
        >
          <MenuSVG />
        </button>
      </div>
    </div>
  </nav>
)

const MenuSVG = () => (
  <svg
    width='35'
    height='25'
    viewBox='0 0 35 25'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g strokeWidth='3' fill='none' fillRule='evenodd'>
      <path d='M0 2h35M0 13h26M0 23h35' />
    </g>
  </svg>
)
