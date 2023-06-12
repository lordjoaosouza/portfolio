import { BsArrowDownUp } from 'react-icons/bs'
import { useState } from 'react'

export default function Scroll() {
  const [scrollToTop, setScrollToTop] = useState(false)

  const handleScroll = () => {
    if (scrollToTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    setScrollToTop(!scrollToTop)
  }

  return (
    <div>
      <a className='fixed bottom-5 right-5 z-50 cursor-pointer' onClick={handleScroll}>
        <BsArrowDownUp className='w-7 h-7 text-white animate-bounce hover:text-navBtnHov hover:scale-105 hover:duration-hover:scale-105 hover:duration-200' />
      </a>
    </div>
  )
}
