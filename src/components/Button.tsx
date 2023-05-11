import React, { ReactElement } from 'react'

interface ButtonProps {
  icon: ReactElement
  text: string
  link: string
  target?: string
}

export default function Button({ icon, text, link, target }: ButtonProps) {
  return (
    <a
      href={link}
      target={target}
      className='
        flex
        items-center
        justify-center
        text-black
        bg-nav_btn
        hover:bg-nav_btn_hov
        font-bold
        text-sm
        rounded-md
        w-32
        h-10
      '
    >
      {React.cloneElement(icon, { className: 'w-4 h-4 mr-2' })}
      <span>{text}</span>
    </a>
  )
}
