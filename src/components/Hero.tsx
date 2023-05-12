export default function Hero() {
  return (
    <>
      <div className='flex flex-col text-white justify-center items-center m-10 sm:space-x-20 sm:flex-row md:space-y-0 space-y-6'>
        <div className='sm:w-1/2 justify-center items-center'>
          <h1 className='flex text-lg md:text-3xl font-bold'>Full Stack developer</h1>
          <p className='text-sm md:text-lg'>
            I am a passionate full-stack developer getting a degree in Computer Science. I thrive on
            challenges presented by emerging technologies and constantly strive to expand my
            knowledge. I love what I do and embrace every opportunity to learn and grow.
          </p>
        </div>
        <div className='flex sm:w-1/2 justify-center items-center'>
          <img className='max-h-72 w-52 md:w-72' src='illustration.svg' alt='illustration' />
        </div>
      </div>
    </>
  )
}
