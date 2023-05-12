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

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div
        className={`
          flex 
          p-5 
          text-white 
          bg-main
          h-20 
          items-center 
          justify-center
          sm:flex-row 
          sm:justify-between
        `}
      >
        <div className='flex items-center flex-1 justify-between'>
          <a href='#' className='ml-2'>
            <div className='flex font-bold items-center text-xl'>
              <FaCode className='w-6 h-6 mr-1' />
              Joao Souza
            </div>
          </a>
          <button onClick={toggleMenu} className='sm:hidden'>
            {showMenu ? <FaChevronUp className='w-4 h-4' /> : <FaChevronDown className='w-4 h-4' />}
          </button>
        </div>
        <div className='flex space-x-2 hidden sm:flex'>
          <Button icon={<FaRocket />} text='Stacks' link='#' />
          <Button
            icon={<FaGithub />}
            text='Projects'
            link='https://github.com/lordjoaosouza'
            target='_blank'
          />
          <Button icon={<FaAddressBook />} text='Contact' link='#' />
        </div>
      </div>
      {showMenu && (
        <div className='flex p-5 h-30 bg-main sm:hidden flex justify-center items-center space-x-2'>
          <Button icon={<FaRocket />} text='Stacks' link='#' where='1' />
          <Button
            icon={<FaGithub />}
            text='Projects'
            link='https://github.com/lordjoaosouza'
            target='_blank'
            where='1'
          />
          <Button icon={<FaAddressBook />} text='Contact' link='#' where='1' />
        </div>
      )}
    </>
  )
}
