import React from 'react'
import YouTube from './YouTube'
import Instagram from './Instagram'
import TikTok from './TikTok'
import Footer from '../Layout/Footer'

function VideoPage() {
  return (
    <>
    <div className='container mx-auto my-20'>
      <div className="my-20">
        <h3 className="text-[#838386] font-[500] text-[15.14px] leading-[15.14px] uppercase m-8 text-start mb-5">
        Video Gallery
        </h3>
        <p className="lg:w-4/6 md:w-full m-8 text-start text-[#464649] font-[400] md:text-[32px] text-[20px] md:leading-[46.75px] leading-[27.75px]">
          Explore
          <strong> insightful discussions, legal insights</strong>, and
          <strong> expert advice</strong> in our
          <strong> YouTube, Instagram </strong>, and
          <strong> TikTok </strong>video galleries. From informative topics to crucial updates, our videos offer valuable resources to empower and
          <strong> keep you up-to-date </strong>on all topics legal.
        </p>
      </div>
        <YouTube />
        <Instagram />
        <TikTok />
    </div>
        {/* <Footer /> */}
    </>
  )
}

export default VideoPage