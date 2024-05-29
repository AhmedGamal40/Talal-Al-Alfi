import React from 'react'
import { MdOutlinePhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

function TopHeader() {
  return (
    <div className='bg-[rgba(27,39,69,1)]'>
        <div className="container mx-auto">
            <div className='flex space-x-4 justify-end text-white py-4'>
                <div className='flex space-x-2'>
                    <MdOutlinePhone className='my-auto'/> 
                    <span> +966 544 405 158 </span>
                </div>
                <span className=''> . </span>
                <div className='flex space-x-2'>
                    <MdMailOutline className='my-auto'/> 
                    <span> tlal@alfilegal.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopHeader