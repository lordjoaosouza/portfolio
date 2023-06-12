export default function Hero() {
  return (
    <>
      <div className='flex flex-col text-white justify-center items-center lg:flex-row mt-20 my-0 sm:my-40'>
        <div className='flex flex-col text-center sm:text-left w-1/2 max-w-xs sm:max-w-md justify-center items-center sm:items-start mr-0 sm:mr-10 mb-10'>
          <h1 className='flex text-xl sm:text-2xl font-bold mb-2 hover:scale-105 hover:duration-hover:scale-105 hover:duration-200'>
            Full Stack Developer
          </h1>
          <p className='text-lg sm:text-xl'>
            As a developer, I constantly seek challenges and stay updated with emerging
            technologies. With an insatiable thirst for knowledge, I believe there&pos;s always room
            to grow. I also love my work and eagerly embrace every opportunity to learn and expand
            my skills.
          </p>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <img
            className='w-8/12 min-w-8/12 sm:8/12 sm:min-w-8/12 hover:scale-105 hover:duration-hover:scale-105 hover:duration-200'
            src='illustration.svg'
            alt='illustration'
          />
        </div>
      </div>
    </>
  )
}
