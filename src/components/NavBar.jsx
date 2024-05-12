import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <NavLink to={'/'} className='nav-link'>Home</NavLink>
        <NavLink to={'/about'} className='nav-link'>About</NavLink>
        <NavLink to={'/services'} className='nav-link'>Services</NavLink>
        <NavLink to={'/registor'} className='nav-link'>Registor</NavLink>
    </nav>
  )
}

export default NavBar