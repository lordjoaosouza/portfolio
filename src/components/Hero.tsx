export default function Hero() {
  return (
    <>
      <div className='flex flex-col text-white justify-center items-center lg:flex-row mt-10 sm:m-20 my-0 sm:my-40'>
        <div className='w-1/2 max-w-xs sm:max-w-md justify-center items-center mr-0 sm:mr-10 mb-10'>
          <h1 className='flex text-3xl font-bold hover:scale-105 hover:duration-150 origin-left'>
            Full Stack Developer
          </h1>
          <p className='text-lg'>
            I am a passionate full-stack developer getting a degree in Computer Science. I thrive on
            challenges presented by emerging technologies and constantly strive to expand my
            knowledge. I love what I do and embrace every opportunity to learn and grow.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <img
            className='w-3/4 min-w-3/4 sm:9/12 sm:min-w-9/12 hover:scale-105 hover:duration-150'
            src='illustration.svg'
            alt='illustration'
          />
        </div>
      </div>
    </>
  )
}
