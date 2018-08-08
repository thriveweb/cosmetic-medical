import React from 'react'

import './Footer.css'
import NavLink from './NavLink'
import Logo from './Logo'
import SocialList from './SocialList'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className='Footer'>
    <div className='Container Footer--Container'>
      <div className='Footer--Col'>
        {globalSettings.phone && (
          <div className='Footer--IconLink--Wrap'>
            <img className='Footer--Icon' src='/images/phone.svg' alt='Phone' />
            <a
              className='Footer--IconLink'
              href={`tel:${globalSettings.phone}`}
            >
              {globalSettings.phone}
            </a>
          </div>
        )}
        {globalSettings.email && (
          <div className='Footer--IconLink--Wrap'>
            <img className='Footer--Icon' src='/images/email.svg' alt='Email' />
            <a
              className='Footer--IconLink'
              href={`mailto:${globalSettings.email}`}
            >
              {globalSettings.email}
            </a>
          </div>
        )}
        {globalSettings.address && (
          <div className='Footer--IconLink--Wrap'>
            <img
              className='Footer--Icon'
              src='/images/location.svg'
              alt='Address'
            />
            <a
              className='Footer--IconLink'
              href={`https://maps.google.com.au/?q=${globalSettings.address}`}
            >
              <address>{globalSettings.address}</address>
            </a>
          </div>
        )}
      </div>
      <div className='Footer--Col'>
        <Logo inverted />
        <SocialList {...socialSettings} />
      </div>
      <div className='Footer--Col'>
        {navLinks && (
          <nav className='Footer--Nav'>
            {navLinks.map(link => <NavLink key={link} link={link} />)}
          </nav>
        )}
      </div>
    </div>
    <div className='Footer--Lower'>
      <div className='Container taCenter'>
        © 2017 Teeth on Ferry. All rights reserved.{' '}
        <a
          href='https://thriveweb.com.au/'
          rel='nofollow'
          title='website design'
        >
          Website Design
        </a>{' '}
        by Thrive.
      </div>
    </div>
  </footer>
)
