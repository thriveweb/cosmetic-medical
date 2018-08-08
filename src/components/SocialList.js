import React from 'react'
import Facebook from 'react-feather/dist/icons/facebook'
import Instagram from 'react-feather/dist/icons/instagram'

import './SocialList.css'

const Link = ({ Icon, href }) => (
  <a className='SocialList--Link' target='_blank' rel='noopener' href={href}>
    <Icon />
  </a>
)

const SocialList = ({ facebook, instagram }) => (
  <div className='SocialList'>
    {facebook && <Link aria-label='Facebook' href={facebook} Icon={Facebook} />}
    {instagram && (
      <Link aria-label='Instagram' href={instagram} Icon={Instagram} />
    )}
  </div>
)

export default SocialList
