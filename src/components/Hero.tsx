export default function Hero() {
  return (
    <>
      <div className='flex flex-col text-white justify-between items-center sm:flex-row m-20'>
        <div className='w-1/2 justify-center items-center'>
          <h1 className='flex text-3xl font-bold'>Full Stack Developer</h1>
          <p className='text-lg'>
            I am a passionate full-stack developer getting a degree in Computer Science. I thrive on
            challenges presented by emerging technologies and constantly strive to expand my
            knowledge. I love what I do and embrace every opportunity to learn and grow.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <img src='illustration.svg' alt='illustration' />
        </div>
      </div>
    </>
  )
}
