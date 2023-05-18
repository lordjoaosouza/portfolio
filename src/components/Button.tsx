import React from 'react'

interface ButtonProps {
  icon: React.ReactElement
  text: string
  link?: string
  target?: string
  where?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ icon, text, link, target, where, onClick }) => {
  const commonClasses = `
    flex
    items-center
    justify-center
    font-bold
    text-xs
    sm:text-sm
    rounded-md
    w-32
    h-10
    hover:scale-105
    hover:duration-150
  `

  const linkClasses = where
    ? `
      ${commonClasses}
      text-white
      hover:text-nav_btn_hov
    `
    : `
      ${commonClasses}
      text-black
      bg-nav_btn
      hover:bg-nav_btn_hov
    `

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <a href={link} target={target} className={linkClasses} onClick={handleClick}>
      {React.cloneElement(icon, { className: 'w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2' })}
      <span>{text}</span>
    </a>
  )
}

export default Button
