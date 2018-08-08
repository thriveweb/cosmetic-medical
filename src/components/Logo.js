import React from 'react'
import './Logo.css'

export default ({ inverted }) => (
  <div
    className='Logo'
    style={{
      backgroundImage: inverted
        ? 'url(/images/teeth-on-ferry-logo-inverted@2x.png)'
        : 'url(/images/teeth-on-ferry-logo@2x.png)'
    }}
  />
)
