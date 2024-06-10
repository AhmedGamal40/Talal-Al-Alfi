import Image from 'next/image'
import React from 'react'
import coverImage from '../../../../public/Assets/Images/cover.png'
import Newyork from '../../../../public/Assets/Images/new-york.png'
import DAMA from '../../../../public/Assets/Images/DAMA.png'
import USC from '../../../../public/Assets/Images/usc.png'
import SBA from '../../../../public/Assets/Images/sba.png'
import TFA from '../../../../public/Assets/Images/TFA.png'

function Qualifications() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
    <Image
      src={coverImage}
      alt="Cover Image"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="z-0"
    />
    <div className="  z-10 my-10">
      {/* Text */}
      <div className='mt-7 text-start'>
        <h1 className="font-[600] text-[29.61px] text-white leading-[47.38px] md:text-center text-start  uppercase m-3">Qualifications</h1>
        <h4 className="font-[500] text-[19px] text-[#C8C8C8] leading-[23.69px]  lg:px-80 md:px-10 px-3 mt-5">Our leader’s mixed experience as in-house counsel and external lawyer, along with their extensive education and history, has enabled them to stand out among the best lawyers.</h4>
      </div>
      {/* Logos */}
<section class="text-gray-600 body-font">
  <div class="container px-5 lg:py-4 py-15 mx-auto">

    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:space-y-0 space-y-10 lg:divide-x divide-gray-500  md:my-40 mt-20">
      <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center ">
          <Image src={Newyork} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16px] leading-[22.04px] md:mt-16 mt-6 ">Certified Master in Financial Derivatives</h2>
          <p className="text-[#F0AE1F] text-center md:mt-6 mt-3">New York Institute of Finance</p>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center ">
          <Image src={DAMA} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px] md:mt-16 mt-6 ">Certified Privacy Law Professional</h2>
          <p className="text-[#F0AE1F] text-center md:mt-6 mt-3">New York Institute of Finance</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={USC} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px] md:mt-16 mt-6 ">Master of Business Law</h2>
          <p className="text-[#F0AE1F] text-center md:mt-6 mt-3">University of Southern California</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={SBA} alt="New york logo" className='w-36'/>
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px]  ">Certified Capital Market Lawyer</h2>
          <p className="text-[#F0AE1F] text-center md:mt-6 mt-3">Saudi Bar Association</p>
      </div>
    </div>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:space-y-0 space-y-10 lg:divide-x divide-gray-500 mt-20 mb-20">
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={TFA} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px] md:mt-16 mt-6">Corporate Governance Expert</h2>
          <p className="text-[#F0AE1F] text-center md:mt-6 mt-3">The Financial Academy</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={TFA} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] text-center leading-[22.04px] md:mt-16 mt-6">Compliance Manager for Financial Institutions</h2>
          <p className="text-[#F0AE1F] text-center md:mt-6 mt-3">The Financial Academy</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={TFA} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px] md:mt-16 mt-6 ">Corporate Governance Expert</h2>
          <p className="text-[#F0AE1F] text-center md:mt-6 mt-3">The Financial Academy</p>
      </div>
    </div>
    </div>
    
  </div>
</section>
    </div>
  </div>
  )
}

export default Qualifications