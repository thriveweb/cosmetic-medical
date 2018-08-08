import React from 'react'

import BackgroundImage from './BackgroundImage'
import Content from './Content'
import './BenefitsSection.css'

export default ({ image, title, content, benefits }) => (
  <section className='Section BenefitsSection dark relative'>
    {image && <BackgroundImage src={image} opacity='0.1' />}
    <div className='Container relative'>
      <h2 className='H2'>{title}</h2>
      <div className='BenefitsSection--ContentWrap'>
        {content && <Content source={content} />}
      </div>
      <div className='BenefitsSection--BenefitsWrap'>
        {benefits && (
          <ul>
            {benefits
              .split('\n')
              .map((benefit, index) => (
                <li key={benefit + index}>{benefit}</li>
              ))}
          </ul>
        )}
      </div>
    </div>
  </section>
)
