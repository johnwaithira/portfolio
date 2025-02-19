import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <div className='w-full nav flex justify-between items-center py-[2px] px-[40px]'>
      <NavLinks />
    </div>
  )
}

export default Navbar