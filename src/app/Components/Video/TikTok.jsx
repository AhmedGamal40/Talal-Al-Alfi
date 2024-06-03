// import Image from 'next/image';
// import React from 'react'
// import image1 from "../../../../public/Assets/Images/image1.png";

// function TikTok() {const sectors = [
//     {
//       title: "CORPORATES",
//       imageUrl: 'https://www.youtube.com/watch?v=EaD5d31VnjY',
//     },
//     {
//       title: "DISPUTE RESOLUTIONS",
//       imageUrl: 'https://www.youtube.com/watch?v=EaD5d31VnjY',
//     },
//     {
//       title: "FINANCIAL SECTOR",
//       imageUrl: 'https://www.youtube.com/watch?v=EaD5d31VnjY',
//     },
//     {
//       title: "FIN-TECHS & STARTUPS",
//       imageUrl: 'https://www.youtube.com/watch?v=EaD5d31VnjY',
//     },
//     {
//       title: "REAL ESTATE ORGANIZATIONS",
//       imageUrl: 'https://www.youtube.com/watch?v=EaD5d31VnjY',
//     },
//     {
//       title: "TECHNOLOGIES",
//       imageUrl: 'https://www.youtube.com/watch?v=EaD5d31VnjY',
//     },
//   ];
//   return (
//     <>
//     <div className="px-4 py-8 bg-white">
//       <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
//       TikTok
//       </h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {sectors.map((sector, index) => (
//             <div
//               key={index}
//               className="relative text-white h-60 flex   transition-transform duration-300 ease-in-out transform "
//             >
//               {/* <Image
//               key={index}
//                 src={sector.imageUrl}
//                 alt={sector.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
//               /> */}
//               <video className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out w-full" autoplay loop muted>
//                     <source
//                     src={sector.imageUrl}
//                     type="video/mp4" />
//                 </video>
//               {/* <div className="absolute inset-0 bg-[#F0AE1FD9] opacity-0 hover:opacity-[90%] z-10 transition-opacity duration-300 ease-in-out"></div> */}
//               {/* <span className="relative z-20 left-0">
//                 {sector.title}
//               </span> */}
//               <div
//                 class="absolute inset-x-[10%] bottom-0 hidden py-5  text-white md:block">
//                 <h5 class="text-xl">Third slide label</h5>
//                 <p>
//                 Some representative placeholder content for the third slide.
//                 </p>
//             </div>
//               {/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 h-1 w-32 hover:bg-[#2c3e50] z-20 bg-white"></div> */}
//             </div>
//         ))}
//       </div>
//     </div>
//   </>
//   )
// }

// export default TikTok

"use client"
import React, { useEffect } from 'react';
import image1 from "../../../../public/Assets/Images/image1.png";
// Ensure correct import for Image if you're using it elsewhere
// import Image from 'next/image';

function TikTok() {
  const sectors = [
    {
      id:"7268999870491413762",
      title: "CORPORATES",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7268999870491413762",
    },
    {
      id:"7267681395517033730",
      title: "DISPUTE RESOLUTIONS",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7267681395517033730",
    },
    {
        id:"7265685919951228162",
      title: "FINANCIAL SECTOR",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7265685919951228162",
    },
    {
        id:"7264670594921155842",
      title: "FIN-TECHS & STARTUPS",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7264670594921155842",
    },
    {
        id:"7114065708652252417",
      title: "REAL ESTATE ORGANIZATIONS",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7114065708652252417",
    },
    {
        id:"7095354314058763522",
      title: "TECHNOLOGIES",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7095354314058763522",
    },
  ];
// 

useEffect(() => {
    // Dynamically load the TikTok embed script on the client side
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="px-4 py-8 bg-white ">
    <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
    TikTok
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
      {sectors.map((sector, index) => (
        <div
          key={index}
          className="relative text-white h-full w-full flex transition-transform duration-300 ease-in-out transform bg-white"
        >
          {/* <video className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out w-full" controls>
          <source src="https://www.tiktok.com/@talal.alfi/video/7268999870491413762?is_from_webapp=1&sender_device=pc&web_id=7375871136678856198" type="video/mp4" />
        </video> */}
         <blockquote className="tiktok-embed absolute inset-0 z-0 transition-opacity duration-300 ease-in-out h-full w-full" cite={sector.imageUrl} data-video-id={sector.id}>
  <section>
    <a target="_blank" title="@talal.alfi" href={sector.imageUrl}>@talal.alfi</a>
    <a title="نظام_الشركات_السعودية" target="_blank" href="https://www.tiktok.com/tag/%D9%86%D8%B8%D8%A7%D9%85_%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9?refer=embed">#نظام_الشركات_السعودية</a>
    <a title="نظام_الشركات_الجديد" target="_blank" href="https://www.tiktok.com/tag/%D9%86%D8%B8%D8%A7%D9%85_%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF?refer=embed">#نظام_الشركات_الجديد</a>
    <a title="قانون" target="_blank" href="https://www.tiktok.com/tag/%D9%82%D8%A7%D9%86%D9%88%D9%86?refer=embed">#قانون</a>
    <a title="الاعمال_الريادية" target="_blank" href="https://www.tiktok.com/tag/%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%AF%D9%8A%D8%A9?refer=embed">#الاعمال_الريادية</a>
    <a title="الشركات_الناشئة" target="_blank" href="https://www.tiktok.com/tag/%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D9%86%D8%A7%D8%B4%D8%A6%D8%A9?refer=embed">#الشركات_الناشئة</a>
    <a title="startup" target="_blank" href="https://www.tiktok.com/tag/startup?refer=embed">#startup</a>
    <a target="_blank" title="♬ original sound - المحامي طلال الألفي" href="https://www.tiktok.com/music/original-sound-7268999889961405185?refer=embed">♬ original sound - المحامي طلال الألفي</a>
  </section>
</blockquote>
          {/* <script async src="https://www.tiktok.com/embed.js"></script> */}
          {/* <blockquote className="tiktok-embed w-full" cite="https://www.tiktok.com/@talal.alfi/video/7268999870491413762" data-video-id="7268999870491413762">
    <section>
      <a target="_blank" title="@talal.alfi" href="https://www.tiktok.com/@talal.alfi?refer=embed">@talal.alfi</a>
      <a title="نظام_الشركات_السعودية" target="_blank" href="https://www.tiktok.com/tag/%D9%86%D8%B8%D8%A7%D9%85_%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9?refer=embed">#نظام_الشركات_السعودية</a>
      <a title="نظام_الشركات_الجديد" target="_blank" href="https://www.tiktok.com/tag/%D9%86%D8%B8%D8%A7%D9%85_%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF?refer=embed">#نظام_الشركات_الجديد</a>
      <a title="قانون" target="_blank" href="https://www.tiktok.com/tag/%D9%82%D8%A7%D9%86%D9%88%D9%86?refer=embed">#قانون</a>
      <a title="الاعمال_الريادية" target="_blank" href="https://www.tiktok.com/tag/%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%AF%D9%8A%D8%A9?refer=embed">#الاعمال_الريادية</a>
      <a title="الشركات_الناشئة" target="_blank" href="https://www.tiktok.com/tag/%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D9%86%D8%A7%D8%B4%D8%A6%D8%A9?refer=embed">#الشركات_الناشئة</a>
      <a title="startup" target="_blank" href="https://www.tiktok.com/tag/startup?refer=embed">#startup</a>
      <a target="_blank" title="♬ original sound - المحامي طلال الألفي" href="https://www.tiktok.com/music/original-sound-7268999889961405185?refer=embed">♬ original sound - المحامي طلال الألفي</a>
    </section>
  </blockquote>
  <script async src="https://www.tiktok.com/embed.js"></script> */}
          {/* <div className="absolute inset-x-[10%] bottom-0 hidden py-5 text-white md:block">
          <h5 className="text-xl">{sector.title}</h5>
          <p>
            Some representative placeholder content for the third slide.
          </p>
        </div> */}
        </div>
      ))}
    </div>
  </div>
  );
}

export default TikTok;
