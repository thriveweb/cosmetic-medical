import React from 'react'
import PropTypes from 'prop-types'
import './PageHeader.css'

import BackgroundImage from '../components/BackgroundImage'

const PageHeader = ({
  title,
  subtitle,
  content,
  backgroundImage,
  className
}) => (
  <section className='PageHeader section thick relative'>
    {backgroundImage && <BackgroundImage src={backgroundImage} lazy={false} />}
    <div className='PageHeader--Overlay' />
    <div className='Container relative'>
      <div className='PageHeader--InnerWrap'>
        <h1 className='PageHeader--Title'>{title}</h1>
        {subtitle ? <h2 className='PageHeader--Subtitle'>{subtitle}</h2> : ''}
        {content ? <div>{content}</div> : ''}
      </div>
    </div>
  </section>
)

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
