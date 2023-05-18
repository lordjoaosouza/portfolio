import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import { SiBuymeacoffee } from 'react-icons/si'
import FooterIcon from './FooterIcon'

export default function Footer() {
  return (
    <div className='flex flex-col sm:flex-row p-5 text-white bg-main h-16 justify-center items-center text-center space-x-0 sm:space-x-10'>
      <p className='text-xs sm:text-sm'>
        © 2023 Copyright:{' '}
        <a className='font-bold' target='_blank' href='https://joaosouza.tech' rel='noreferrer'>
          joaosouza.tech
        </a>
      </p>
      <div className='mt-2 sm:mt-0 flex'>
        <FooterIcon icon={<FaGithub />} href='https://github.com/lordjoaosouza' target='_blank' />
        <FooterIcon
          icon={<FaLinkedin />}
          href='https://www.linkedin.com/in/lordjoaosouza'
          target='_blank'
        />
        <FooterIcon icon={<AiFillMail />} href='mailto:contact@joaosouza.tech' target='_blank' />
        <FooterIcon
          icon={<SiBuymeacoffee />}
          href='https://www.buymeacoffee.com/lordjoaosouza'
          target='_blank'
        />
      </div>
    </div>
  )
}
