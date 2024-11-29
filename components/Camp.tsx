import { PEOPLE_URL } from '@/constants'
import Image from 'next/image'
import React from 'react'


type CampCardProps ={
  image :string,
  title:string,
  location: string
}


const CampCard = ({image,title,location} : CampCardProps)=>{
  return(
    <div className=' relative bg-[url(/img-1.png)] w-full min-w-[80vw] lg:min-w-[1100px] bg-cover    rounded-5xl '>
          <div className='flex justify-start gap-4 pl-20 pt-12'>
          <div className='w-16 h-16 bg-green-50 rounded-full flex justify-center items-center'>
          <Image
            src={image}
            alt="map"
            width={28}
            height={28}
          />
          </div>
          <div className='text-white leading-7'>
            <p className='font-bold'>{title}</p>
            <p className='text-sm text-gray-200'>{location}</p>
          </div>
          </div>

          <div className="absolute flex -space-x-4 bottom-6 left-16  items-center ">
            {PEOPLE_URL.map((url) => (
                <Image 
                  className="inline-block h-10 w-10 rounded-full relative  "
                  src={url}
                  key={url}
                  alt="person"
                  width={52}
                  height={52}
                />
              ))}
              <p className='font-bold text-white absolute left-36 w-[90px]'>50+ Joined</p>

          </div>
          

      </div>
  )
}
const Camp = () => {
  return (
    <div className=" relative container mx-auto max-w-[1440px] h-[640px]   mt-80 xl:mt-24 ">

      <div className='flex  w-full  gap-5 overflow-x-auto  h-[340px] lg:h-[400px] xl:h-[640px] absolute hide-scrollbar left-6 lg:left-20 2xl:left-24 '>

        <CampCard 
        image="/folded-map.svg"
        title="Putuk Truno Camp"
        location ="Prigen, Pasuruan"
        />
        <CampCard 
        image="/folded-map.svg"
        title="Putuk Truno Camp"
        location ="Prigen, Pasuruan"
        />
      </div>
      <div className="absolute   ml-4   md:right-12 bottom-6 sm:bottom-24 xl:-bottom-60  bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 rounded-3xl">
          <h2 className="regular-24 sm::regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>

      </div>

  )
}

export default Camp

