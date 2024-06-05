// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "use client"
// import React, { useEffect } from 'react';
// import image1 from "../../../../public/Assets/Images/image1.png";
// // Ensure correct import for Image if you're using it elsewhere
// // import Image from 'next/image';

// function TikTok() {
//   const sectors = [
//     {
//       id:"7268999870491413762",
//       title: "CORPORATES",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7268999870491413762",
//     },
//     {
//       id:"7267681395517033730",
//       title: "DISPUTE RESOLUTIONS",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7267681395517033730",
//     },
//     {
//         id:"7265685919951228162",
//       title: "FINANCIAL SECTOR",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7265685919951228162",
//     },
//     {
//         id:"7264670594921155842",
//       title: "FIN-TECHS & STARTUPS",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7264670594921155842",
//     },
//     {
//         id:"7114065708652252417",
//       title: "REAL ESTATE ORGANIZATIONS",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7114065708652252417",
//     },
//     {
//         id:"7095354314058763522",
//       title: "TECHNOLOGIES",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7095354314058763522",
//     },
//   ];
// // 

// useEffect(() => {
//     // Dynamically load the TikTok embed script on the client side
//     const script = document.createElement('script');
//     script.src = "https://www.tiktok.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
//   return (
//     <div className="px-4 py-8 bg-white ">
//     <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
//     TikTok
//     </h3>
//      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
//       {sectors.map((sector, index) => (
//         <div
//           key={index}
//           className="relative text-white h-full w-full flex transition-transform duration-300 ease-in-out transform bg-white"
//         >
//          <blockquote className="tiktok-embed absolute inset-0 z-0 transition-opacity duration-300 ease-in-out h-full w-full" cite={sector.imageUrl} data-video-id={sector.id}>
//           <section>
//             <a target="_blank" title="@talal.alfi" href={sector.imageUrl}>@talal.alfi</a>
//             <a title="نظام_الشركات_السعودية" target="_blank" href="https://www.tiktok.com/tag/%D9%86%D8%B8%D8%A7%D9%85_%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9?refer=embed">#نظام_الشركات_السعودية</a>
//             <a title="نظام_الشركات_الجديد" target="_blank" href="https://www.tiktok.com/tag/%D9%86%D8%B8%D8%A7%D9%85_%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF?refer=embed">#نظام_الشركات_الجديد</a>
//             <a title="قانون" target="_blank" href="https://www.tiktok.com/tag/%D9%82%D8%A7%D9%86%D9%88%D9%86?refer=embed">#قانون</a>
//             <a title="الاعمال_الريادية" target="_blank" href="https://www.tiktok.com/tag/%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%AF%D9%8A%D8%A9?refer=embed">#الاعمال_الريادية</a>
//             <a title="الشركات_الناشئة" target="_blank" href="https://www.tiktok.com/tag/%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D9%86%D8%A7%D8%B4%D8%A6%D8%A9?refer=embed">#الشركات_الناشئة</a>
//             <a title="startup" target="_blank" href="https://www.tiktok.com/tag/startup?refer=embed">#startup</a>
//             <a target="_blank" title="♬ original sound - المحامي طلال الألفي" href="https://www.tiktok.com/music/original-sound-7268999889961405185?refer=embed">♬ original sound - المحامي طلال الألفي</a>
//           </section>
//         </blockquote>
//         </div>
//       ))}
//     </div> 
//   </div>
//   );
// }

// export default TikTok;


////////////////////////////////////////////////////////////////////////////////
// "use client";
// import React, { useEffect, useState } from 'react';

// function TikTok() {
//   const sectors = [
//     {
//       id: "7268999870491413762",
//       title: "CORPORATES",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7268999870491413762",
//     },
//     {
//       id: "7267681395517033730",
//       title: "DISPUTE RESOLUTIONS",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7267681395517033730",
//     },
//     {
//       id: "7265685919951228162",
//       title: "FINANCIAL SECTOR",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7265685919951228162",
//     },
//     {
//       id: "7264670594921155842",
//       title: "FIN-TECHS & STARTUPS",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7264670594921155842",
//     },
//     {
//       id: "7114065708652252417",
//       title: "REAL ESTATE ORGANIZATIONS",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7114065708652252417",
//     },
//     {
//       id: "7095354314058763522",
//       title: "TECHNOLOGIES",
//       imageUrl: "https://www.tiktok.com/@talal.alfi/video/7095354314058763522",
//     },
//   ];

//   const [loading, setLoading] = useState(sectors.map(() => true));

//   useEffect(() => {
//     // Dynamically load the TikTok embed script on the client side
//     const script = document.createElement('script');
//     script.src = "https://www.tiktok.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       const updateLoadingState = () => {
//         setLoading(loading.map(() => false));
//       };

//       // Add event listeners for all the videos
//       document.querySelectorAll('blockquote.tiktok-embed').forEach((embed) => {
//         embed.addEventListener('load', updateLoadingState);
//       });
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [loading]);

//   return (
//     <div className="px-4 py-8 bg-white">
//       <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
//         TikTok
//       </h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
//         {sectors.map((sector, index) => (
//           <div
//             key={index}
//             className={`relative text-white h-full w-full flex transition-transform duration-300 ease-in-out transform bg-white ${loading[index] === true ? 'animate-pulse ' : ''}`}
//           >
//             <blockquote className="tiktok-embed absolute inset-0 z-0 transition-opacity duration-300 ease-in-out h-full w-full" cite={sector.imageUrl} data-video-id={sector.id}>
//               <section>
//                 <a target="_blank" title="@talal.alfi" href={sector.imageUrl}>@talal.alfi</a>
//                 <a title="نظام_الشركات_السعودية" target="_blank" href="https://www.tiktok.com/tag/%D9%86%D8%B8%D8%A7%D9%85_%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9?refer=embed">#نظام_الشركات_السعودية</a>
//                 <a title="نظام_الشركات_الجديد" target="_blank" href="https://www.tiktok.com/tag/%D9%86%D8%B8%D8%A7%D9%85_%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF?refer=embed">#نظام_الشركات_الجديد</a>
//                 <a title="قانون" target="_blank" href="https://www.tiktok.com/tag/%D9%82%D8%A7%D9%86%D9%88%D9%86?refer=embed">#قانون</a>
//                 <a title="الاعمال_الريادية" target="_blank" href="https://www.tiktok.com/tag/%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%AF%D9%8A%D8%A9?refer=embed">#الاعمال_الريادية</a>
//                 <a title="الشركات_الناشئة" target="_blank" href="https://www.tiktok.com/tag/%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_%D8%A7%D9%84%D9%86%D8%A7%D8%B4%D8%A6%D8%A9?refer=embed">#الشركات_الناشئة</a>
//                 <a title="startup" target="_blank" href="https://www.tiktok.com/tag/startup?refer=embed">#startup</a>
//                 <a target="_blank" title="♬ original sound - المحامي طلال الألفي" href="https://www.tiktok.com/music/original-sound-7268999889961405185?refer=embed">♬ original sound - المحامي طلال الألفي</a>
//               </section>
//             </blockquote>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TikTok;

"use client";
import React, { useEffect, useState } from 'react';

function TikTok() {
  const sectors = [
    {
      id: "7268999870491413762",
      title: "CORPORATES",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7268999870491413762",
    },
    {
      id: "7267681395517033730",
      title: "DISPUTE RESOLUTIONS",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7267681395517033730",
    },
    {
      id: "7265685919951228162",
      title: "FINANCIAL SECTOR",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7265685919951228162",
    },
    {
      id: "7264670594921155842",
      title: "FIN-TECHS & STARTUPS",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7264670594921155842",
    },
    {
      id: "7114065708652252417",
      title: "REAL ESTATE ORGANIZATIONS",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7114065708652252417",
    },
    {
      id: "7095354314058763522",
      title: "TECHNOLOGIES",
      imageUrl: "https://www.tiktok.com/@talal.alfi/video/7095354314058763522",
    },
  ];

  const [loading, setLoading] = useState(sectors.map(() => true));

  useEffect(() => {
    // Dynamically load the TikTok embed script on the client side
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Monitor the load event for each blockquote
      const embeds = document.querySelectorAll('blockquote.tiktok-embed');
      embeds.forEach((embed, index) => {
        // Simulate a delay for the loading state for demo purposes
        setTimeout(() => {
          // After delay, set the loading state for this video to false
          setLoading(prev => {
            const newLoading = [...prev];
            newLoading[index] = false;
            return newLoading;
          });
        }, 9000); // Adjust the delay as needed
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="px-4 py-8 bg-white">
      <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
        TikTok
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className={`relative text-white h-full w-full flex transition-transform duration-300 ease-in-out transform bg-white ${loading[index] ? 'animate-pulse' : ''}`}
          >
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default TikTok;
