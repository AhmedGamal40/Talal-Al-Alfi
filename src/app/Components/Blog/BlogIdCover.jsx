import Image from 'next/image'
import React from 'react'
import { FaChartSimple } from 'react-icons/fa6'
import { LuClock10 } from 'react-icons/lu'

function BlogIdCover({blog}) {
  return (
    <>
     <div className="relative lg:h-[415px] h-full bg-cover">
        <Image
          src={blog.image}
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute w-[100%] h-[100%]"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative top-1/3 z-10 text-white text-start container mx-auto p-4">
          <h1 className="lg:text-[40.52px] text-[30.52px] lg:leading-[41.89px] leading-[26.89px] md:block hidden lg:font-[400] font-[300] lg:tracking-[0.45px] uppercase mt-5 lg:mt-0 mb-5">
            {blog.title}
          </h1>
          <p className="md:text-[36.01px] text-[25.01px] md:leading-[48px] leading-[40px] font-[400] lg:w-[921.08px] w-full tracking-[-2.5%] mt-5 md:mb-0 mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          </p>
          <div className=" md:flex space-x-2 mt-10 text-white hidden">
            <span className="my-auto text-[20px] font-[400] leading-[40px]">
              by {blog.name}
            </span>
            <div className="w-[15px] h-[0.5px] bg-white my-auto"></div>
            <p className="my-auto flex text-[12.62px] font-[400] leading-[40px]">
              <LuClock10 className="my-auto mr-1"/>
              2 minute read
            </p>
            <div className="w-[15px] h-[0.5px] bg-white my-auto"></div>
            <p className="my-auto flex text-[12.62px] font-[400] leading-[40px]">
              <FaChartSimple className="my-auto mr-1"/>
              1.6K views
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogIdCover