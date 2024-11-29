import React from 'react'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <button
              className="flexCenter gap-3 rounded-full border w-full btn_white"
              >
                <Image src="/apple.svg" alt="App Store" width={24} height={24} />
                <label className="bold-16 whitespace-nowrap cursor-pointer">App Store</label>
            </button>
              <button
              className="flexCenter gap-3 rounded-full border w-full btn_dark_green_outline"
              >
                <Image src="/android.svg" alt="Play Store" width={24} height={24} />
                <label className="bold-16 whitespace-nowrap cursor-pointer">Play Store</label>
              </button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end ">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp