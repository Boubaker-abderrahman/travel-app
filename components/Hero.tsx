import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <div className="relative container  hide-scrollbar max-w-[1440px] w-full flex justify-between items-center py-5 mx-auto px-6 lg:px-20 3xl:px-0 h-full">
      <div className='sm:w-full  xl:w-[45%] flex flex-col gap-5 '>
        <Image
        src="/camp.svg"
        width={48}
        height={48}
        alt="camp"
        className='relative top-7 right-2 lg:right-0 lg:top-10'
        />
        <h1 className='font-bold text-5xl lg:text-[86px] leading-[1.25] '>Putuk Truno  Camp Area</h1>
        <p className='text-gray-500 font-'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
        <div className="flex gap-2 relative top-4">
        {Array(5).fill(1).map((_,index)=><Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />)}
          <div className={"w-3"}/>
          <p className='text-xl'> <span className='font-bold'>198k</span>{" "} Excellent Reviews</p>
        </div>
        <div className={"h-6"}/>
        <div className='flex gap-12 flex-col sm:flex-row'>
          <button   className=" flex rounded-full bg-green-50 w-full h-16 sm:w-48 text-white font-bold  gap-3 justify-center items-center  hover:scale-105 duration-500 ">
            Download App
          </button>
          <button   className="flex  rounded-full bg-transparent  w-full h-16 sm:w-48 text-black font-bold  gap-3 justify-center items-center hover:shadow-xl hover:scale-105 transition duration-500 ">
            <Image width={24} alt="login" src="/play.svg" height={24} />
            How we work?
          </button>
          </div>
            <div className="absolute xl:left-12 xl:bottom-24 z-[-5] h-screen w-screen bg-[url('/pattern-bg.png')] bg-cover bg-center md:-right-28 xl:-top-60">
            </div>
            <div className=' absolute flex -bottom-[280px]  xl:right-[390px] xl:top-[75px] z-[10] text-lg w-[260px] h-[200px] bg-gray-90  rounded-3xl px-6 py-8  text-white  flex-col gap-6'>
              <div className="flex  flex-col">
                <p className='text-gray-30  '>Location</p>
                <p className='font-bold'>Aguas Calientes</p>
                <Image src="/close.svg" alt="close" width={24} height={24} className='absolute right-8 top-8 ' />

              </div>
                <div className='flex gap-6'>
                <div className="">
                  <p className='text-gray-30'>Distance</p>
                  <p className='font-bold'>173.28 mi</p>
                </div>
                <div className="">
                  <p className='text-gray-30'>Elevation</p>
                  <p className='font-bold'>2.040 km</p>
                </div>
              </div>
            </div>

      </div>
      </div>
  )
}

export default Hero