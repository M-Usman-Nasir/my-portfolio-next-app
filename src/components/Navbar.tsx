import React from 'react'
import { TiThMenu } from "react-icons/ti";


const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>
                Usman Nasir
            </div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
              <li><a href="#hero" className='menuLink'>Home</a></li>
              <li><a href="#about" className='menuLink'>About</a></li>
              <li><a href="#projects" className='menuLink'>Projects</a></li>
              <li><a href="#skills" className='menuLink'>Skills</a></li>
              <li><a href="#contact" className='menuLink'></a>Contact</li>
            </ul>
            <TiThMenu className='md:hidden' size={30} />

        </div>
    </div>
  )
}
export default Navbar