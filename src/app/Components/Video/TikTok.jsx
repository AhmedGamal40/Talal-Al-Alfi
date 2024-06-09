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

// // 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
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




// 444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// "use client"
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

//   const [loadingStates, setLoadingStates] = useState(Array(sectors.length).fill(true));

//   useEffect(() => {
//     // Dynamically load the TikTok embed script on the client side
//     const script = document.createElement('script');
//     script.src = "https://www.tiktok.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handleVideoLoad = (index) => {
//     setLoadingStates((prev) => {
//       const newState = [...prev];
//       newState[index] = false;
//       return newState;
//     });
//   };

//   return (
//     <div className="px-4 py-8 bg-white">
//       <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
//         TikTok
//       </h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
//         {sectors.map((sector, index) => (
//           <div
//             key={index}
//             className="relative text-white h-full w-full flex transition-transform duration-300 ease-in-out transform bg-white"
//           >
//             {loadingStates[index] && (
//               <div role="status" className="flex items-center justify-center h-2/3 w-full bg-gray-300 rounded-lg animate-pulse ">
//                 <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
//                   <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
//                   <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
//                 </svg>
//                 <span className="sr-only">Loading...</span>
//               </div>
//             )}
//             <blockquote
//               className={`tiktok-embed absolute inset-0 z-0 transition-opacity duration-300 ease-in-out h-full w-full ${loadingStates[index] ? 'opacity-0' : 'opacity-100'}`}
//               cite={sector.imageUrl}
//               data-video-id={sector.id}
//               onLoad={() => handleVideoLoad(index)}
//             >
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


