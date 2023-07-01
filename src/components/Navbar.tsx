import React from 'react'
import logo from '../assets/Logo.png'
function Navbar() {

  return (
    <div>
        <ul className='w-4/5 h26 flex inline gap-32 justify-center items-center text-white'>
            <li><img src={logo} alt="" srcset="" /></li>
            <li>Home</li>
            <li>Trips</li>
            <li>Contact Us</li>
            <li>Learn More</li>
        </ul>
    </div>
  )
}

export default Navbar