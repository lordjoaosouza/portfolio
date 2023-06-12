import Image from 'next/image'

export default function AboutMe() {
  return (
    <>
      <div className='flex flex-col text-white justify-center items-center lg:flex-row mt-20 my-0 sm:my-40'>
        <div className='w-1/2 flex justify-center items-center'>
          <Image
            className='w-8/12 min-w-8/12 sm:8/12 sm:min-w-8/12 hover:scale-105 hover:duration-200'
            src='kart.svg'
            alt='kart'
            width={500}
            height={500}
          />
        </div>
        <div className='flex flex-col text-center sm:text-left w-1/2 max-w-xs sm:max-w-md justify-center items-center sm:items-start mt-10'>
          <h1 className='flex text-xl sm:text-2xl font-bold mb-2 hover:scale-105 hover:duration-200'>
            More about me
          </h1>
          <p className='text-lg sm:text-xl'>
            I&apos;m an individual with diverse interests, including motorsports, coffee, and a love
            for fine wine, classic whisky and gaming. I&apos;m also dedicated to continuously
            learning and expanding my horizons, with a particular focus on programming.
          </p>
        </div>
      </div>
    </>
  )
}
