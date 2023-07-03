
import logo from '../assets/Logo.png'
import Card from './card'

function Navbar() {
  

  return (
    <div>
        <ul className='w-4/5 h26 flex inline gap-16 justify-center items-center text-white p-5'>
            <li><img src={logo} alt="" srcSet="" /></li>
            
           <li><Card /> </li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Learn More</li>
        </ul>
    </div>
  )
}

export default Navbar