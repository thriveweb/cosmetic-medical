import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import './BookBanner.css'

export default ({ title, content, buttonLinkTo, buttonLinkTitle }) => (
  <section className='Section relative BookBanner'>
    <BackgroundImage src='/images/appointment-background.svg' />
    <div className='BookBanner--Box'>
      <h2 className='BookBanner--Title'>{title}</h2>
      <p>{content}</p>
      <a className='Button BookBanner--Box--Button' href={buttonLinkTo}>
        {buttonLinkTitle}
      </a>
    </div>
  </section>
)
