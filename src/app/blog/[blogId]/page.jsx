"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { LuClock10 } from "react-icons/lu";
import { FaChartSimple } from "react-icons/fa6";
import { BiSolidQuoteRight } from "react-icons/bi";

import blog1 from "../../../../public/Assets/Images/blog1.png";
import blog2 from "../../../../public/Assets/Images/blog2.png";
import blog3 from "../../../../public/Assets/Images/blog3.png";
import blog4 from "../../../../public/Assets/Images/blog4.png";
import blog5 from "../../../../public/Assets/Images/blog5.png";
import blog6 from "../../../../public/Assets/Images/blog6.png";
import blog7 from "../../../../public/Assets/Images/blog7.png";
import blog8 from "../../../../public/Assets/Images/blog8.png";
import blog9 from "../../../../public/Assets/Images/blog9.png";
import Link from "next/link";

const data = [
  {
    id: 1,
    image: blog1,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 2,
    image: blog2,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 3,
    image: blog3,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 4,
    image: blog4,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 5,
    image: blog5,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 6,
    image: blog6,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 7,
    image: blog7,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 8,
    image: blog8,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 9,
    image: blog9,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
];

function shareOnFacebook() {
  // Construct the URL to be shared
  const urlToShare = encodeURIComponent(`http://localhost:3000/blog/${blogId}`); // Replace 'https://example.com' with your actual blog URL

  // Open the Facebook Share Dialog
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`, 'facebook-share-dialog', 'width=626,height=436');
}



const getRandomPosts = (posts, count) => {
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
  };
  
  const Page = () => {
    const { blogId } = useParams();
    const blog = data.find((item) => item.id === parseInt(blogId, 10));
    const randomPosts = useMemo(() => getRandomPosts(data, 3), []);
    
    
    function shareOnTwitter() {
     // Ensure data.blogId is defined before constructing the URL
     const blogId = data.blogId; // Replace '' with a default value if data.blogId is undefined
    
     // Construct the URL to be shared
     const urlToShare = encodeURIComponent(`http://localhost:3000/blog/${blogId}`);
     console.log(urlToShare)
      // Open the Twitter Share Dialog
      window.open(`https://twitter.com/intent/tweet?url=${urlToShare}`, 'twitter-share-dialog', 'width=626,height=436');
    }
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
               <span className="my-auto text-[20px] font-[400] leading-[40px] ">
                 by {blog.name}
               </span>
               <div className="w-[15px] h-[0.5px] bg-white my-auto"></div>
               <p className="my-auto flex text-[12.62px] font-[400] leading-[40px] ">
               <LuClock10 className="my-auto mr-1"/>
               2 minute read
               </p>
               <div className="w-[15px] h-[0.5px] bg-white my-auto"></div>
               <p className="my-auto flex text-[12.62px] font-[400] leading-[40px] ">
               <FaChartSimple className="my-auto mr-1"/>
               1.6K views
               </p>
             </div>
        </div>
      </div>

      {/* blog content */}
      <div className="container mx-auto md:px-20 px-5 ">
        <div className="text-start text-lg font-medium leading-relaxed mt-16">
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="flex space-x-5">
          <BiSolidQuoteRight className="text-gray-400" size={60}/>
          <p className="uppercase text-gray-800 md:text-4xl text-2xl leading-tight tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
          </p>
        </div>
        <div className="text-start text-lg font-medium leading-relaxed mt-16">
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="mt-16">
          <h1 className="md:text-[40px] text-[19px] font-[400] md:leading-[40px] leading-[22px] tracking-[0.5px] mb-10 uppercase">Lorem ipsum dolor sit amet</h1>
          <p className="mb-10 text-lg font-medium leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ad minim veniam, quis nostrud exercitation ullamco labori</p>
          <ul className="list-disc md:mx-20 mx-10 my-10 text-lg font-medium leading-relaxed">
            <li>Crisp fresh iconic elegant timeless clean perfume</li>
            <li>Neck straight sharp silhouette and dart detail</li>
            <li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li>
          </ul>
        </div>
        <div className="text-start text-lg font-medium leading-relaxed mt-16">
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
        {/* shared */}
      <div className="container mx-auto my-20">
         <div className="grid grid-cols-4">
             <div className=" text-center">
               <span>964</span>
               <span className="text-[#757575] text-[18] font-[600] leading-[30px] mx-1">Shares</span>
               <div className="w-full h-[0.5px] bg-gray-200 mt-5"></div>
             </div>
             <div className=" text-center">
               <div className="flex justify-center " onClick={shareOnFacebook}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48" className="my-auto">
                  <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                  </svg>
                  <span className="text-[#3B5998] text-[18] font-[600] leading-[30px] mx-1 my-auto">Share</span>
               </div>
               <div className="w-full h-[0.5px] bg-[#3B5998] mt-5"></div>
             </div>
             <div className=" text-center">
             <div className="flex justify-center" onClick={shareOnTwitter}>
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
               <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
               </svg>
                 <span className="text-[#00ACED] text-[18] font-[600] leading-[30px] mx-1">Share</span>
             </div>
               <div className="w-full h-[0.5px] bg-[#00ACED] mt-5"></div>
             </div>
             <div className=" text-center">
             <div className="flex justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
               <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
               </svg>
                 <span className=" text-[background: #2D4FA2;] text-[18] font-[600] leading-[30px] mx-1">Share</span>
             </div>
               <div className="w-full h-[0.5px] bg-[#2D4FA2] mt-5"></div>
             </div>
         </div>       
        </div>

        {/* some blogs */}
        <div className="container mx-auto my-20">
            <h1 className="text-[30px] leading-[30px] font-[600] tracking-[0.5px] uppercase my-10 m-5">You May Also Like</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
            {randomPosts.map((item, index) => (
            <div
              className="sm:p-0 p-5   rounded-lg hover:-translate-y-2 transition-all relative"
              key={index}
            >
              <div className="  rounded text-white cursor-pointer absolute top-5 left-5 backdrop-blur-xl bg-[#FFFFFF33] py-1 px-2">
                7 June
              </div>
              <div className=" h-[288.75px] overflow-hidden ">
                <Image
                  src={item.image}
                  alt="Product 1"
                  className="h-full w-full "
                />
              </div>
              <div className="py-6 bg-white">
                <h3 className="text-[21.04px] font-[400] leading-[28.05px] text-[#121416] my-5">
                  {item.title}
                </h3>
                <div className="flex space-x-2 my-5">
                  <div className="w-7 h-7">
                    <Image
                      src={blog1}
                      alt="Product 1"
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <span className="my-auto text-[21.04px] font-[400] leading-[28.05px] text-[#121416]">
                    {item.name}
                  </span>
                  <div className="w-[25.25px] h-[0.5px] bg-[#6C757D66] my-auto"></div>
                  <p className="my-auto text-[12.62px] font-[400] leading-[28.05px] text-[#6C757D]">
                    June 4, 2024
                  </p>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>
                <div className="my-5">
                  <Link
                    href={`/blog/${item.id}`}
                    alt=""
                    className="text-[21.04px] font-[400] leading-[28.05px] text-[#121416] underline underline-offset-[14px]"
                  >
                    View Post
                  </Link>
                </div>
              </div>
            </div>
          ))}
            </div>
        </div>
    </>
  );
};

export default Page;
