// import Image from "next/image";
// import React from "react";
// import Image1 from "../.../../../../../public/Assets/Images/image1.png";
// function AllExpertise() {
//     const sectors = [
//       {
//         title: "CORPORATES",
//         imageUrl: "../.../../../../../public/Assets/Images/image1.png",
//       },
//       {
//         title: "DISPUTE RESOLUTIONS",
//         imageUrl: "../.../../../../../public/Assets/Images/image1.png",
//       },
//       {
//         title: "FINANCIAL SECTOR",
//         imageUrl: "../.../../../../../public/Assets/Images/image1.png",
//       },
//       {
//         title: "FIN-TECHS & STARTUPS",
//         imageUrl: "../.../../../../../public/Assets/Images/image1.png",
//       },
//       {
//         title: "REAL ESTATE ORGANIZATIONS",
//         imageUrl: "../.../../../../../public/Assets/Images/image1.png",
//       },
//       {
//         title: "TECHNOLOGIES",
//         imageUrl: "../.../../../../../public/Assets/Images/image1.png",
//       },
//     ];
//   return (
//     <>
//       <div className="container mx-auto my-20">
//         <div className="my-20">
//           <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
//             {" "}
//             EXPERTISE{" "}
//           </h3>
//           <p className="w-2/4 text-[#464649] font-[400] text-[32px] leading-[46.75px]">
//             Combine extensive knowledge and{" "}
//             <strong> experience across a range of sectors </strong> , to
//             <strong> provide legal insight and guidance</strong> on complex
//             matters in areas.
//           </p>
//         </div>
//         <div>
//           <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
//             Sectors such as :
//           </h3>
//         </div>
//         {/* <div className="grid grid-cols-3 gap-3">
//           <div className="w-full m-1 ">
//             <Image src={Image1} alt="image1" className="w-full bg-red-600" />
//           </div>
//           <div className="w-full m-1">
//             <Image src={Image1} alt="image1" className="w-full" />
//           </div>
//           <div className="w-full m-1">
//             <Image src={Image1} alt="image1" className="w-full" />
//           </div>
//           <div className="w-full m-1">
//             <Image src={Image1} alt="image1" className="w-full" />
//           </div>
//           <div className="w-full m-1">
//             <Image src={Image1} alt="image1" className="w-full" />
//           </div>
//           <div className="w-full m-1">
//             <Image src={Image1} alt="image1" className="w-full" />
//           </div>
//         </div> */}
//         <div className="px-4 py-8 bg-white">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {sectors.map((sector, index) => (
//               <div
//                 key={index}
//                 className="relative h-48 flex items-center justify-center bg-cover bg-center text-white text-2xl font-bold hover:bg-yellow-500 hover:opacity-25"
//                 style={{ backgroundImage: `url(${sector.imageUrl})` }}
//               >
//                 <div className="absolute inset-0 bg-black opacity-50"></div>
//                 <span className="relative z-10">{sector.title}</span>
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-yellow-400"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AllExpertise;





// import Image from "next/image";
// import React from "react";
// import image1 from "../../../../public/Assets/Images/image1.png";

// function AllExpertise() {
//   const sectors = [
//     {
//       title: "CORPORATES",
//       imageUrl: image1,
//     },
//     {
//       title: "DISPUTE RESOLUTIONS",
//       imageUrl: image1,
//     },
//     {
//       title: "FINANCIAL SECTOR",
//       imageUrl: image1,
//     },
//     {
//       title: "FIN-TECHS & STARTUPS",
//       imageUrl: image1,
//     },
//     {
//       title: "REAL ESTATE ORGANIZATIONS",
//       imageUrl: image1,
//     },
//     {
//       title: "TECHNOLOGIES",
//       imageUrl: image1,
//     },
//   ];

//   return (
//     <div className="container mx-auto my-20">
//       <div className="my-20">
//         <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
//           EXPERTISE
//         </h3>
//         <p className="w-2/4 text-[#464649] font-[400] text-[32px] leading-[46.75px]">
//           Combine extensive knowledge and
//           <strong> experience across a range of sectors </strong>, to
//           <strong> provide legal insight and guidance</strong> on complex
//           matters in areas.
//         </p>
//       </div>
//       <div>
//         <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
//           Sectors such as :
//         </h3>
//       </div>
//       <div className="px-4 py-8 bg-white">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {sectors.map((sector, index) => (
//             <div
//               key={index}
//               className="relative h-48 flex items-center justify-center text-white text-2xl font-bold hover:bg-yellow-500"
//             >
//               <Image
//                 src={sector.imageUrl}
//                 alt={sector.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute inset-0 z-0"
//               />
//               <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
//               <span className="relative z-20">{sector.title}</span>
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-yellow-400 z-20"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllExpertise;



import Image from "next/image";
import React from "react";
import image1 from "../../../../public/Assets/Images/image1.png";
import Link from "next/link";

function AllExpertise() {
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
    <div className="container mx-auto my-20">
      <div className="my-20">
        <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
          EXPERTISE
        </h3>
        <p className="w-2/4 text-[#464649] font-[400] text-[32px] leading-[46.75px]">
          Combine extensive knowledge and
          <strong> experience across a range of sectors </strong>, to
          <strong> provide legal insight and guidance</strong> on complex
          matters in areas.
        </p>
      </div>
      <div>
        <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
          Sectors such as :
        </h3>
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
    </div>
  );
}

export default AllExpertise;
