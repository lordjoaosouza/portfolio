import React, { useState } from 'react'
import {
  FaCode,
  FaAddressBook,
  FaRocket,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa'
import Button from './Button'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className='flex p-5 text-white bg-main h-20 items-center justify-center sm:flex-row sm:justify-between'>
        <div className='flex items-center flex-1 justify-between'>
          <a href='#'>
            <div className='flex font-bold items-center text-lg sm:text-xl'>
              <FaCode className='w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2' />
              Joao Souza
            </div>
          </a>
          <button onClick={toggleMenu} className='sm:hidden'>
            {showMenu ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
          </button>
        </div>
        <div className='flex space-x-4 hidden sm:flex '>
          <div className='relative'>
            <Button
              icon={<FaGithub />}
              text='Projects'
              link='https://github.com/lordjoaosouza'
              target='_blank'
            />
            <span className='absolute top-[10%] right-[3.5%] flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-100'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-hover'></span>
            </span>
          </div>
          <Button icon={<FaRocket />} text='Stacks' link='/#stacks' />
          <Button icon={<FaAddressBook />} text='Contact' link='#' />
        </div>
      </div>
      {showMenu && (
        <div className='flex p-5 h-30 bg-main sm:hidden flex justify-center items-center space-x-2'>
          <Button
            icon={<FaGithub />}
            text='Projects'
            link='https://github.com/lordjoaosouza'
            target='_blank'
            where='1'
          />
          <Button icon={<FaRocket />} text='Stacks' link='#' where='1' />
          <Button icon={<FaAddressBook />} text='Contact' link='#' where='1' />
        </div>
      )}
    </>
  )
}

export default Navbar
