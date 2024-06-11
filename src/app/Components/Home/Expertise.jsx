import Image from 'next/image';
import React from 'react';
import image1 from "../../../../public/Assets/Images/image1.png";
import image2 from "../../../../public/Assets/Images/image2.png";
import image3 from "../../../../public/Assets/Images/image3.png";
import image4 from "../../../../public/Assets/Images/image4.png";
import image5 from "../../../../public/Assets/Images/image5.png";
import image6 from "../../../../public/Assets/Images/image6.png";
import Link from "next/link";

function Expertise() {
  const sectors = [
    {
      id:1,
      title: "CORPORATES",
      imageUrl: image1,
    },
    {
      id:2,
      title: "DISPUTE RESOLUTIONS",
      imageUrl: image2,
    },
    {
      id:3,
      title: "FINANCIAL SECTOR",
      imageUrl: image3,
    },
    {
      id:4,
      title: "FIN-TECHS & STARTUPS",
      imageUrl: image4,
    },
    {
      id:5,
      title: "REAL ESTATE ORGANIZATIONS",
      imageUrl: image5,
    },
    {
      id:6,
      title: "TECHNOLOGIES",
      imageUrl: image6,
    },
  ];
  return (
    <>
      <div className="container mx-auto my-20">
        <div className="my-20 ">
          <h3 className="text-white font-[600] text-[15.14px] md:text-[29.61px] leading-[47.38px] uppercase md:text-center m-3 text-start mb-5">
            EXPERTISE
          </h3>
          <p className=" md:px-60 m-3 md:text-center text-start  text-white font-[400] md:text-[25px] text-[20px] leading-[46.75px]">
            Applying best international standards, while providing innovative legal solutions in areas such as:.
          </p>
        </div>
        <div className="px-4 py-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector, index) => (
          <Link href={`expertise/${sector.id}`} key={index} className='hover:text-[#2c3e50] text-white group relative'>
          <div
            key={index}
            className="relative h-48 flex items-start justify-start text-start text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <Image
              src={sector.imageUrl}
              alt={sector.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-[#F0AE1FD9] opacity-0  group-hover:opacity-[85%] transition duration-300"></div>
            <span className="relative font-[700] text-[20px] md:text-[32px] md:leading-[30.44px] leading-[20.44px]  px-2 z-20 my-auto md:w-[300px] w-[100px">
              {sector.title}
             
              <div className='w-[100px] transition-all duration-300 md:group-hover:w-[250px]  group-hover:w-full mt-3 group-hover:bg-[#1B2745] bg-[#F0AE1FD9] h-[2px] '></div>
            </span>
          </div>
        </Link>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertise;
