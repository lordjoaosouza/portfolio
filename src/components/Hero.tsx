export default function Hero() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col text-white justify-between items-center sm:flex-row sm:mt-10 lg:mt-20 m-10 mx-0 sm:mx-10 md:mx-32 lg:mx-72'>
          <div className='w-1/2 sm:w-1/2 justify-center items-center'>
            <h1 className='flex text-lg md:text-3xl font-bold'>Full Stack Developer</h1>
            <p className='text-sm md:text-lg'>
              I am a passionate full-stack developer getting a degree in Computer Science. I thrive
              on challenges presented by emerging technologies and constantly strive to expand my
              knowledge. I love what I do and embrace every opportunity to learn and grow.
            </p>
          </div>
          <div className='flex mt-10 sm:mt-0 ml-0 sm:ml-10 max-w-xs md:max-w-lg sm:max-w-xs w-4/5 sm:w-1/2 justify-center items-center'>
            <img src='illustration.svg' alt='illustration' />
          </div>
        </div>
      </div>
    </>
  )
}
