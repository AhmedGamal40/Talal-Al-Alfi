 "use client";
 import coverImage from "../../../../public/Assets/Images/cover.png";
import Image from 'next/image';



function VideoGallery() {

  return (
    <>
    <div className="relative mt-20">
      <div className='text-center'>
        <h3 className="font-[600] text-[29.61px] text-white leading-[47.38px] uppercase py-5">Video Gallery</h3>
        <p className='font-[500] text-[19px] text-white leading-[23.69px] py-5 px-96'>Some of the legal videos I publish on my YouTube channel. You can watch it or watch more on my channel.</p>
      </div>
    </div>
    <div id="controls-carousel" className="relative w-full bg-black" data-carousel="static" >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image src={coverImage} layout="fill" className="absolute block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="..." />
        </div>
        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
          <Image src={coverImage} layout="fill" className="absolute block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="..." />
        </div>
        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image src={coverImage} layout="fill" className="absolute block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="..." />
        </div>
        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image src="/docs/images/carousel/carousel-4.svg" layout="fill" className="absolute block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="..." />
        </div>
        {/* Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image src={coverImage} layout="fill" className="absolute block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="..." />
        </div>
      </div>
      {/* Slider controls */}
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>

  </>
  )
}

export default VideoGallery