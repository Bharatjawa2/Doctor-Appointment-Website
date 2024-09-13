import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt=''/>
        <ul>
        <NavLink>
            <li>HOME</li>
            <hr/>
        </NavLink>
        <NavLink>
            <li>ALL DOCTORS</li>
            <hr/>
        </NavLink>
        <NavLink>
            <li>ABOUT</li>
            <hr/>
        </NavLink>
        <NavLink>
            <li>CONTACT</li>
            <hr/>
        </NavLink>
        </ul>
        <div>Create Account</div>
    </div>
  )
}

export default Navbar