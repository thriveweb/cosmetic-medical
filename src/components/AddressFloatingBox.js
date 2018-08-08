import React from 'react'

import './AddressFloatingBox.css'
import Content from './Content'

export default ({
  children,
  address,
  phone,
  email,
  openingHours,
  buttonLinkTo,
  className
}) => (
  <div className='AddressFloatingBox'>
    {address && (
      <div className='AddressFloatingBox--Row'>
        <h3>Address</h3>
        <address>
          <Content source={address} />
        </address>
      </div>
    )}
    <hr className='AddressFloatingBox--hr' />
    {(phone || email) && (
      <div className='AddressFloatingBox--Row'>
        <h3>Contact</h3>
        <div>
          {phone && <a href={`tel:${phone}`}>{phone}</a>}
          <br />
          {email && <a href={`mailto:${email}`}>{email}</a>}
        </div>
      </div>
    )}
    <hr className='AddressFloatingBox--hr' />
    {openingHours && (
      <div className='AddressFloatingBox--Row'>
        <h3>Opening Hours</h3>
        <Content source={openingHours} />
      </div>
    )}
    <div className='AddressFloatingBox--Row AddressFloatingBox--Row-dark'>
      <p>Request an appointment</p>
      <a className='Button Button--inverted' href={buttonLinkTo}>
        Book Now
      </a>
    </div>
  </div>
)
