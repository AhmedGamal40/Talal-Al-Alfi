"use client";
import React, { useState } from 'react';
import { MdOutlineArrowBack ,MdOutlineArrowForward } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";



import Image from 'next/image';
import Link from 'next/link';

function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    'https://www.youtube.com/embed/EaD5d31VnjY',
    'https://www.youtube.com/embed/FZZrta4aiQM',
    'https://www.youtube.com/embed/cywfu7JNBdM',
    'https://www.youtube.com/embed/eLyYg0RAIMg',
    'https://www.youtube.com/embed/FOn1unTY6Nc',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <>
     <div className="md:my-40 my-20">
        <h3 className="text-white font-[600] text-[15.14px] md:text-[29.61px] leading-[47.38px] uppercase md:text-center m-3 text-start mb-5">
        Video Gallery
        </h3>
        <p className=" md:px-60 m-3 md:text-center text-start  text-white font-[400] md:text-[25px] text-[20px] leading-[46.75px] ">
        Some of the legal videos I publish on my YouTube channel. You can watch it or watch more on my channel.
        </p>
        <div className=' mt-10'>
        <div className="relative w-5/6 md:w-[696px] md:h-[435px] h-full max-w-4xl mx-auto overflow-hidden">
          <div className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {videos.map((video, index) => (
              <div key={index} className="min-w-full">
                <iframe
                  className="w-full h-64 md:h-96"
                  src={video}
                  title={`Video ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 mx-3 rounded-full bg-white text-black w-7 h-7 flex items-center justify-center"
            onClick={prevSlide}
          >
           <MdOutlineArrowBack  />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 mx-3 rounded-full bg-white text-black w-7 h-7 flex items-center justify-center"
            onClick={nextSlide}
          >
            <MdOutlineArrowForward />
          </button>

        </div>
        <div className="flex justify-center md:mt-8 mt-5">
          <Link href="/video-gallery" >
            <button
              className="bg-[#343D48] text-white  px-4 py-2 rounded transition duration-300"
            >
              <span className='mx-3 flex justify-between'>
                View More
                <FaArrowRightLong className='my-auto mx-2'/>
              </span>
            </button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default VideoGallery;
