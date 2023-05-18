export default function Hero() {
  return (
    <>
      <div className='flex flex-col text-white justify-center items-center lg:flex-row mt-20 my-0 sm:my-40'>
        <div className='text-center sm:text-left w-1/2 max-w-xs sm:max-w-md justify-center items-center mr-0 sm:mr-10 mb-10'>
          <h1 className='flex text-3xl font-bold mb-2'>Full Stack Developer</h1>
          <p className='text-lg'>
            I&apos;m a passionate full-stack developer pursuing a Computer Science degree. Thriving on
            challenges and emerging technologies, I constantly seek to expand my knowledge. I love
            my work and embrace every chance to learn and grow.
          </p>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <img
            className='w-8/12 min-w-8/12 sm:8/12 sm:min-w-8/12 hover:scale-105 hover:duration-150'
            src='illustration.svg'
            alt='illustration'
          />
        </div>
      </div>
    </>
  )
}
