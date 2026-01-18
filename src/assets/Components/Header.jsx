import React from 'react'

const Header = () => {
  return (
    <div className='head'>
    <div className='left'>
    <h1>Horizon Court</h1>
    </div>
    <div className='mid'>
        <i>About Us</i>
        <i>Services</i>
        <i>Coaches</i>
        <i>Events</i>
        <i>Contact</i>
    </div>
    <div className="right">
        <button>Book now</button>
    </div>
    </div>
  )
}

export default Header