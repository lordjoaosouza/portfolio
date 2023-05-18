import { BsArrowDownUp } from 'react-icons/bs'

export default function Scroll() {
  return (
    <div>
      <a className='fixed bottom-5 right-5 z-50 cursor-default'>
        <BsArrowDownUp className='w-7 h-7 text-white animate-bounce' />
      </a>
    </div>
  )
}
