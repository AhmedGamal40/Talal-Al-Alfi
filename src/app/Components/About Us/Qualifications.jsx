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
      <div className='mt-7 text-center'>
        <h1 className="font-[600] text-[29.61px] text-white leading-[47.38px] uppercase ">Qualifications</h1>
        <h4 className="font-[500] text-[19px] text-[#C8C8C8] leading-[23.69px]  lg:px-80 px-20 mt-5">Our leader’s mixed experience as in-house counsel and external lawyer, along with their extensive education and history, has enabled them to stand out among the best lawyers.</h4>
      </div>
      {/* Logos */}
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:divide-x divide-gray-500 space-y-5 my-40">
      <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={Newyork} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16px] leading-[22.04px] mt-16 ">Certified Master in Financial Derivatives</h2>
          <p className="text-[#F0AE1F] text-center mt-6">New York Institute of Finance</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={DAMA} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px] mt-16 ">Certified Privacy Law Professional</h2>
          <p className="text-[#F0AE1F] text-center mt-6">New York Institute of Finance</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={USC} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px] mt-16 ">Master of Business Law</h2>
          <p className="text-[#F0AE1F] text-center mt-6">University of Southern California</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={SBA} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px] mt-0 ">Certified Capital Market Lawyer</h2>
          <p className="text-[#F0AE1F] text-center mt-6">Saudi Bar Association</p>
      </div>
    </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:divide-x divide-gray-500 ">
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={TFA} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px] mt-16 ">Corporate Governance Expert</h2>
          <p className="text-[#F0AE1F] text-center mt-6">The Financial Academy</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={TFA} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px] mt-16 ">Compliance Manager for Financial Institutions</h2>
          <p className="text-[#F0AE1F] text-center mt-6">The Financial Academy</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center  h-full">
        <div className="flex flex-col items-center">
          <Image src={TFA} alt="New york logo" />
          <h2 className="text-white font-[500] text-[16.53px] leading-[22.04px] mt-16 ">Corporate Governance Expert</h2>
          <p className="text-[#F0AE1F] text-center mt-6">The Financial Academy</p>
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