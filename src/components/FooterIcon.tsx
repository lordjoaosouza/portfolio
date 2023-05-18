import React from 'react'

interface FooterIconProps {
  icon: React.ReactElement
  href: string
  target: string
}

const FooterIcon: React.FC<FooterIconProps> = ({ icon, target, href }) => {
  return (
    <a href={href} target={target}>
      {React.cloneElement(icon, { className: 'w-4 h-4 sm:w-5 sm:h-5' })}
    </a>
  )
}

export default FooterIcon
