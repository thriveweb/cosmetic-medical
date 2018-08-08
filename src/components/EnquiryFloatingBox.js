import React from 'react'
import './EnquiryFloatingBox.css'

export default ({ children, className, id }) => (
  <div id={id} className='EnquiryFloatingBox--Background'>
    <div className='EnquiryFloatingBox'>
      <div className='EnquiryFloatingBox--Row'>{children}</div>
    </div>
  </div>
)
