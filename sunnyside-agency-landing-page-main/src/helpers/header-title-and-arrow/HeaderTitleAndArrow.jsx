import React from 'react'
import './HeaderTitleAndArrow.scss'

function HeaderTitleAndArrow() {
  return (
    <div className='header__title-and-arrow'>

    <h1 className='header__title'>We are creatives</h1>
    
    <svg className='header__arrow-down_img' width="36" height="114" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g>
    </svg>

    </div>
  )
}

export default HeaderTitleAndArrow
