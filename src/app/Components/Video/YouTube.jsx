import React from 'react'
function YouTube() {
    const sectors = [
        {
          title: "CORPORATES",
          imageUrl: 'https://www.youtube.com/embed/EaD5d31VnjY',
        },
        {
          title: "DISPUTE RESOLUTIONS",
          imageUrl: 'https://www.youtube.com/embed/cywfu7JNBdM',
        },
        {
          title: "FINANCIAL SECTOR",
          imageUrl: 'https://www.youtube.com/embed/FZZrta4aiQM',
        },
        {
          title: "FIN-TECHS & STARTUPS",
          imageUrl: 'https://www.youtube.com/embed/7KtFp9Y6cZ0',
        },
        {
          title: "REAL ESTATE ORGANIZATIONS",
          imageUrl: 'https://www.youtube.com/embed/eLyYg0RAIMg',
        },
        {
          title: "TECHNOLOGIES",
          imageUrl: 'https://www.youtube.com/embed/FOn1unTY6Nc',
        },
      ];
  return (
    <>
    <div className="px-4 py-8 bg-white ">
      <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase mb-5">
      YouTube
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="relative text-white h-60 flex transition-transform duration-300 ease-in-out transform bg-white"
          >
            {/* <video className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out w-full" controls>
              <source src={sector.imageUrl} type="video/mp4" />
            </video> */}
            {/* <video width="500" controls>
                <source src='https://www.youtube.com/watch?v=EaD5d31VnjY' type="video/mp4"/>
                <source src='https://www.youtube.com/watch?v=EaD5d31VnjY' type="video/ogg"/>
                Your browser does not support HTML video.
            </video> */}
            <iframe
                className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out w-full h-full"
                // src="https://www.youtube.com/embed/EaD5d31VnjY"
                src={sector.imageUrl}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
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
    </>
  )
}

export default YouTube