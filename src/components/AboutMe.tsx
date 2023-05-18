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
        <div className='text-center sm:text-left w-1/2 max-w-xs sm:max-w-md justify-center items-center ml-0 sm:ml-10 mt-10'>
          <h1 className='flex text-3xl font-bold mb-2'>A little about me</h1>
          <p className='text-lg'>
            I'm a passionate individual with diverse interests like motorsports, coffee, gaming,
            fine wine, and whisky. I'm always eager to learn, spending significant time studying
            programming to broaden my horizons.
          </p>
        </div>
      </div>
    </>
  )
}
