import Image from 'next/image'
import React from 'react'
import image1 from "../../../../public/Assets/Images/image1.png";
import Link from "next/link";

function Expertise() {
  const sectors = [
    {
      title: "CORPORATES",
      imageUrl: image1,
    },
    {
      title: "DISPUTE RESOLUTIONS",
      imageUrl: image1,
    },
    {
      title: "FINANCIAL SECTOR",
      imageUrl: image1,
    },
    {
      title: "FIN-TECHS & STARTUPS",
      imageUrl: image1,
    },
    {
      title: "REAL ESTATE ORGANIZATIONS",
      imageUrl: image1,
    },
    {
      title: "TECHNOLOGIES",
      imageUrl: image1,
    },
  ];
  return (
      <>
      <div className='bg-black text-center'>
        <h3 className="font-[600] text-[29.61px] text-white leading-[47.38px] uppercase py-5">Expertise</h3>
        <p className=' font-[500] text-[19px] text-white leading-[23.69px] py-5'>Applying best international standards, while providing innovative
        legal solutions in areas such as:</p>
      </div>
      <div className="px-4 py-8 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector, index) => (
              <Link href="/about-us" key={index}>
                <div
                  key={index}
                  className="relative hover:text-[#2c3e50] text-white h-48 flex items-center justify-center text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
                >
                  <Image
                    src={sector.imageUrl}
                    alt={sector.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-[#F0AE1FD9] opacity-0 hover:opacity-[90%] z-10 transition-opacity duration-300 ease-in-out"></div>
                  <span className="relative z-20 underline  underline-offset-[16px]">
                    {sector.title}
                  </span>
                  {/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 h-1 w-32 hover:bg-[#2c3e50] z-20 bg-white"></div> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      
      </>
  )
}

export default Expertise