import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const navlinks = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/signin'>Sign In</NavLink></li>
      <li><NavLink to='/signup'>Sign Up</NavLink></li>
      <li><NavLink to='/users'>Users</NavLink></li>
  </>

  return (
    <div>
      <div className='flex border items-center justify-center bg-amber-950 py-5'>
        <img className='h-24' src="https://i.ibb.co.com/fGggN7r/logo1.png" alt="" />
        <h2 className='font-rancho font-normal text-3xl md:text-5xl lg:text-6xl  text-white'>Espresso Emporium</h2>
      </div>
      <div className='flex  items-center justify-center bg-orange-200'>
        <ul className='flex font-semibold gap-5 '>
        {navlinks}
        </ul>
      </div>
    </div>
  )
}

export default Header