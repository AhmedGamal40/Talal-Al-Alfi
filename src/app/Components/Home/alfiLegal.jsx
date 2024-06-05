import Image from 'next/image'
import React from 'react'
import coverImage from "../../../../public/Assets/Images/cover.png";

function AlfiLegal() {
  return (
    
    <div className="relative w-full h-full flex items-center justify-center">
    {/* <Image
      src={coverImage}
      alt="Cover Image"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="z-0"
    /> */}
    <div className=" w-[758px] z-10 my-10">
      <div className='md:mt-5 m-5 sm:w-3/4 md:w-full  sm:mx-auto'>
        <h1 className="font-[600] md:text-[55px] text-[30px] text-white md:leading-[74.71px] leading-[50.71px] uppercase">Alfi legal</h1>
        <div className="border-t-2 border-indigo-500 w-full"></div>
        <h4 className="font-[600]  md:text-[34px] text-[16px] text-white leading-[36.36px] uppercase text-right md:mt-4 mt-2">Investment Solutions</h4>
      </div>
      <div className='my-5 text-start m-3 text-white'>
        <h1 className='font-[400] md:text-[45px] text-[25px] text-white leading-[63px] font-[Marcellus] text-center'>Lawyers & Investment Advisors</h1>
        <h1 className='font-[500] md:text-[22.22px] text-white leading-[33.82px] text-center'><span className='text-[#F0AE1F] md:p-0 p-1'>Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do <span className='text-[#F0AE1F]'>eiusmod .</span></h1>
      </div>
    </div>
  </div>
  )  
}

export default AlfiLegal