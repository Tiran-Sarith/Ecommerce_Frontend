import React from 'react'
import headerLogo from '../assets/images/header-logo.svg'
import { navLinks } from '../constants'
import humburger from '../assets/icons/hamburger.svg'


function Nav() {
  return (
    <header className='px-4 py-4 absolute w-full z-10'>
    <nav className='flex justify-between items-center max-w-7xl mx-auto'>
        <a href="#"> <img src={headerLogo}
        width={130}
        /></a>
        <ul className='flex flex-1 justify-center gap-15 max-lg:hidden'>
            {navLinks.map((item) => (
            <li key={item.label}>
                <a href={item.href} className='text-gray-800 leading-normal text-lg font-bold'>
                    {item.label}
                </a>
            </li>
                ))}
        
      </ul>
      <div className='hidden max-lg:block'>
        <img src={humburger} 
        alt="Humburger"
        width={25}
        />
      </div>
      
    </nav>
    </header>
  )
}

export default Nav