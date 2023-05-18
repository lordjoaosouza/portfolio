export default function AboutMe() {
  return (
    <>
      <div className='flex flex-col text-white justify-center items-center lg:flex-row mt-20 my-0 sm:my-40'>
        <div className='w-1/2 flex justify-center items-center'>
          <img
            className='w-8/12 min-w-8/12 sm:8/12 sm:min-w-8/12 hover:scale-105 hover:duration-150'
            src='kart.svg'
            alt='kart'
          />
        </div>
        <div className='flex flex-col text-center sm:text-left w-1/2 max-w-xs sm:max-w-md justify-center items-center sm:items-start mt-10'>
          <h1 className='flex text-xl sm:text-2xl font-bold mb-2'>More about me</h1>
          <p className='text-lg sm:text-xl'>
            I&apos;m a passionate individual with diverse interests like motorsports, coffee,
            gaming, fine wine, and whisky. I&apos;m always eager to learn, spending significant time
            studying programming to broaden my horizons.
          </p>
        </div>
      </div>
    </>
  )
}
