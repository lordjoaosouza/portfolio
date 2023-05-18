import Button from './Button'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import { SiBuymeacoffee } from 'react-icons/si'

export default function Contact() {
  return (
    <>
      <div
        id='contact'
        className='flex flex-col text-white text-center justify-center items-center lg:flex-row mt-20 my-0 sm:my-40 mb-20 sm:mb-0'
      >
        <div className='flex flex-col w-1/2 max-w-xs sm:max-w-md items-center mb-10'>
          <h1 className='flex text-xl sm:text-2xl font-bold mb-6'>If want to message me</h1>
          <div className='flex space-x-4 text-sm sm:text-sm rounded-xl'>
            <Button
              icon={<FaLinkedin />}
              text='LinkedIn'
              link='https://www.linkedin.com/in/lordjoaosouza/'
              target='_blank'
            />
            <Button icon={<AiFillMail />} text='Email' link='mailto:contact@joaosouza.tech' />
          </div>
          <div className='flex text-center items-center text-sm sm:text-sm rounded-xl mt-4'>
            <h2 className='flex text-xs sm:text-sm font-bold'>You can buy me a</h2>
            <Button
              icon={<SiBuymeacoffee />}
              text='Coffee'
              link='https://www.buymeacoffee.com/lordjoaosouza '
              target='_blank'
              where='1'
            />
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <img
            className='w-8/12 min-w-8/12 sm:8/12 sm:min-w-8/12 hover:scale-105 hover:duration-150'
            src='robot.svg'
            alt='robot'
          />
        </div>
      </div>
    </>
  )
}
