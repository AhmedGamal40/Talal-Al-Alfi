import Image from 'next/image'
import React from 'react'
import coverImage from "../../../../public/Assets/Images/cover.png";

function AlfiLegal() {
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
    <div className=" w-[758px] z-10 my-10">
      <div className='mt-5'>
        <h1 className="font-[600] text-[55px] text-white leading-[74.71px] uppercase">Alfi legal</h1>
        <div className="border-t-4 border-indigo-500 w-full"></div>
        <h4 className="font-[600] text-[34px] text-white leading-[36.36px] uppercase text-right">Investment Solutions</h4>
      </div>
      <div className='my-5 text-center text-white'>
        <h1 className='font-[400] text-[45px] text-white leading-[63px]'>Lawyers & Investment Advisors</h1>
        <h1 className='font-[500] text-[22.22px] text-white leading-[33.82px]'><span className='text-[#F0AE1F]'>Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do <span className='text-[#F0AE1F]'>eiusmod .</span></h1>
      </div>
    </div>
  </div>
  )  
}

export default AlfiLegal