import Image from "next/image";
import React from "react";
import image1 from "../../../../public/Assets/Images/image1.png";
import image2 from "../../../../public/Assets/Images/image2.png";
import image3 from "../../../../public/Assets/Images/image3.png";
import image4 from "../../../../public/Assets/Images/image4.png";
import image5 from "../../../../public/Assets/Images/image5.png";
import image6 from "../../../../public/Assets/Images/image6.png";
import Link from "next/link";

function AllExpertise() {
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
    <div className="container mx-auto my-20">
      <div className="my-20">
        <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase m-3 md:text-start mb-5">
          EXPERTISE
        </h3>
        <p className="lg:w-2/4 md:w-3/4 w-full p-3 text-start text-[#464649] font-[400] text-[20px] md:leading-[46.75px] leading-[30.75px]">
          Combine extensive knowledge and
          <strong> experience across a range of sectors </strong>, to
          <strong> provide legal insight and guidance</strong> on complex
          matters in areas.
        </p>
      </div>
      <div>
        <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase m-3 text-start mb-5">
          Sectors such as :
        </h3>
      </div>
      <div className="px-4 py-8 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector, index) => (
          <Link href={sector.pathUrl} key={index} className='hover:text-[#2c3e50] text-white group relative'>
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
            <span className="relative font-[700] text-[20px] md:text-[32px] md:leading-[52.44px] leading-[30.44px]  px-2 z-20 my-auto md:w-[300px] w-[100px">
              {sector.title}
              <div className='w-[100px] transition-all duration-300 md:group-hover:w-[250px]  group-hover:w-full mt-3 group-hover:bg-[#1B2745] bg-[#F0AE1FD9] h-[2px] '></div>
            </span>
          </div>
        </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllExpertise;
