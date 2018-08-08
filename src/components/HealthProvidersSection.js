import React from 'react'

import LazyImage from './LazyImage'
import './HealthProvidersSection.css'

export default ({ healthProviders }) => (
  <section className='Section light'>
    <div className='Container'>
      <h2 className='H2 taCenter'>Health Providers</h2>
      <div className='HealthProviders'>
        {healthProviders &&
          healthProviders.map(provider => (
            <div className='HealthProviders--Item' key={provider.title}>
              <LazyImage
                src={provider.image}
                alt={provider.title}
                sizes='100px'
              />
            </div>
          ))}
      </div>
    </div>
  </section>
)
