import React from 'react'
import {Link} from 'react-router-dom'
//import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
   <nav>
    <div classname='navbar'>
        {/* <Link to='/' className='nav-item nav-btn'>
            <img src={logo} alt="logo" />
        </Link> */}     
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
            <input type="text" placeholder='Search...' />

        </form>
    </div>
   </nav>
  )
}

export default Navbar