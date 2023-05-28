import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='headerContainer'>
      <div className='headerTitle'>
        Section
      </div>
      <div className='headerRightSection'>
        <i className="fa-solid fa-wallet"></i>  0.2 $xyz
        <div className="tier">Tier 1</div>
      </div>
    </div>
  )
}

export default Header
