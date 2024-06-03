import React from 'react'
import { FaLinkedin , FaInstagram} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    

 <footer className="bg-[rgba(27,39,69,1)] mb-20">
    <div className=" mx-auto p-6 flex md:flex-row flex-col-reverse justify-center md:justify-around" >
        <span className=" text-sm text-white text-center md:mt-0 mt-5">© 2024 Alfi . All Rights Reserved.</span>
        <div>
        <ul className="flex justify-center  space-x-6 items-center text-sm font-medium text-gray-500 sm:mb-0 ">
                <li>
                    <a href="#" ><FaLinkedin className='text-white' size={20}/></a>
                </li>
                <li>
                    <a href="#" ><IoLogoYoutube className='text-white' size={20}/></a>
                </li>
                <li>
                    <a href="#" ><FaInstagram className='text-white' size={20}/></a>
                </li>
                <li>
                    <a href="#" ><IoMail className='text-white' size={20}/></a>
                </li>
            </ul>
        </div>
    </div>
</footer> 



  )
}

export default Footer