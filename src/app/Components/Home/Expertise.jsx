import Image from 'next/image'
import React from 'react'
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
      title: "CORPORATES",
      imageUrl: image1,
      pathUrl:'/expertise/expertise1'
    },
    {
      title: "DISPUTE RESOLUTIONS",
      imageUrl: image2,
      pathUrl:'/expertise/expertise2'
    },
    {
      title: "FINANCIAL SECTOR",
      imageUrl: image3,
      pathUrl:'/expertise/expertise3'
    },
    {
      title: "FIN-TECHS & STARTUPS",
      imageUrl: image4,
      pathUrl:'/expertise/expertise4' 
    },
    {
      title: "REAL ESTATE ORGANIZATIONS",
      imageUrl: image5,
      pathUrl:'/expertise/expertise5'
    },
    {
      title: "TECHNOLOGIES",
      imageUrl: image6,
      pathUrl:'/expertise/expertise6'
    },
  ];
  return (
    <>
      {/* <div className="relative mt-20">
        <div className=' text-center '>
          <h3 className="font-[600] text-[29.61px] text-white leading-[47.38px] uppercase py-5">Expertise</h3>
          <p className=' font-[500] text-[19px] text-white leading-[23.69px] py-5 px-96'>Applying best international standards, while providing innovative
          legal solutions in areas such as:</p>
        </div>
       </div>
      <div className="px-4 py-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector, index) => (
            <Link href="/about-us" key={index}>
              <div
                key={index}
                className="relative  text-white hover:text-[#1B2745] h-48 flex items-center justify-center text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src={sector.imageUrl}
                  alt={sector.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-[#F0AE1FD9] opacity-0 hover:opacity-[90%] z-10 transition-opacity duration-300 ease-in-out"></div>
                <span className="relative z-20  underline  underline-offset-[16px]">
                  {sector.title}
                </span> */}
                {/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 h-1 w-32 hover:bg-[#2c3e50] z-20 bg-white"></div> */}
              {/* </div>
            </Link>
          ))}
        </div>
      </div> */}

<div className="container mx-auto my-20">
      <div className="my-20 ">
        <h3 className="text-white font-[600] text-[15.14px] md:text-[29.61px] leading-[47.38px] uppercase md:text-center m-3 text-start mb-5">
          EXPERTISE
        </h3>
        <p className=" md:px-60 m-3 md:text-center text-start  text-white font-[400] md:text-[25px] text-[20px] leading-[46.75px]">
        Applying best international standards, while providing innovative legal solutions in areas such as:.
        </p>
      </div>
      <div>
      </div>
      <div className="px-4 py-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector, index) => (
            <Link href={sector.pathUrl} key={index}>
              <div
                key={index}
                className="relative hover:text-[#2c3e50] text-white h-48 flex items-start justify-start text-start  text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src={sector.imageUrl}
                  alt={sector.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-[#F0AE1FD9] opacity-0 hover:opacity-[90%] z-10 transition-opacity duration-300 ease-in-out"></div>
                <span className="relative px-5 z-20 underline top-1/2  underline-offset-[16px]">
                  {sector.title}
                </span>
                {/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 h-1 w-32 hover:bg-[#2c3e50] z-20 bg-white"></div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Expertise