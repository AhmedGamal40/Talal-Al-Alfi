import React from 'react'
import { MdOutlinePhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

function TopHeader() {
  return (
    <div className='bg-[rgba(27,39,69,1)]'>
        <div className="container mx-auto">
            <div className='flex space-x-4 md:justify-end justify-center text-white py-4'>
                <a href="tel:+966544405158" target="blank">
                <div className='flex space-x-2'>
                    <MdOutlinePhone className='my-auto'/> 
                    <span> +966 544 405 158 </span>
                </div>
                </a>
                <span className=''> . </span>
                <a href="mailto:tlal@alfilegal.com" target="blank">
                    <div className='flex space-x-2'>
                        <MdMailOutline className='my-auto'/> 
                        <span> tlal@alfilegal.com</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default TopHeader