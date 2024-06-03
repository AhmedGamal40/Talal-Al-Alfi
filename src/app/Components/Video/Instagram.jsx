"use client";
import React, { useEffect } from "react";
import image1 from "../../../../public/Assets/Images/image1.png";

function Instagram() {
  const sectors = [
    {
      title: "CORPORATES",
      imageUrl: 'https://www.instagram.com/p/CwYyhkRIhN6/embed/',
    },
    {
      title: "DISPUTE RESOLUTIONS",
      imageUrl: 'https://www.instagram.com/p/CwyNXRkoJuX/embed/',
    },
    {
      title: "FINANCIAL SECTOR",
      imageUrl: 'https://www.instagram.com/p/Cwsm6NWo3zC/embed/',
    },
    {
      title: "FIN-TECHS & STARTUPS",
      imageUrl: 'https://www.instagram.com/p/CczE04Mof4y/embed/',
    },
    {
      title: "REAL ESTATE ORGANIZATIONS",
      imageUrl: 'https://www.instagram.com/p/CNPXw08HjOe/embed/',
    },
    {
      title: "TECHNOLOGIES",
      imageUrl: 'https://www.instagram.com/p/Cct3ujzoL89/embed/',
    },
  ];

  //
  useEffect(() => {
    // Dynamically load the TikTok embed script on the client side
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className="px-4 py-8 bg-white ">
        <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
          Instagram
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="relative text-white h-[500px] w-full flex transition-transform duration-300 ease-in-out transform bg-white"
            >
            <iframe
                className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out w-full h-full"
                src={sector.imageUrl}
                frameborder="0"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Instagram;
