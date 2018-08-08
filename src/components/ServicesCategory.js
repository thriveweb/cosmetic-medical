import React from 'react'

import LazyImage from './LazyImage'
import './ServicesCategory.css'

export default ({ servicesCategory }) => (
  <div className='ServicesCategory'>
    <LazyImage
      className='ServicesCategory--MainImage'
      src={servicesCategory.image}
      alt={servicesCategory.title}
    />
    {servicesCategory.services && (
      <div className='ServicesWrap'>
        <h3 className='ServicesWrap--Title'>{servicesCategory.title}</h3>
        <div className='ServicesWrap--Grid'>
          {servicesCategory.services.map(service => (
            <div className='ServicesWrap--Service' key={service.title}>
              {service.icon && (
                <img
                  className='ServicesWrap--Service--Icon'
                  src={service.icon}
                  alt={service.title}
                />
              )}
              <div>
                {service.title && (
                  <h4 className='ServicesWrap--Service--Title'>
                    {service.title}
                  </h4>
                )}
                {service.description && <p>{service.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
)
