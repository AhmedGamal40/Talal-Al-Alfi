import React from 'react'
import Blography from '../../../../public/Assets/Images/blography.png'
import Image from 'next/image'
function Blograbhy() {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
    <div className='flex flex-col -mx-4 lg:w-1/2 sm:w-2/3 content-start sm:pr-10'>
        <h3 className='uppercase font-[500] text-[12.6px] leading-[12.6px]'>Biography</h3>
        <div className='mt-7 w-full'>
            <p className='font-[400] text-[20.05px] leading-[35px]'>
                Al Alfi Legal Firm 
                <strong>advises business endeavors on transactional matters, commercial contracts</strong> , and 
                <strong>disputes</strong> . As part of our team’s
                social responsibilities, they have concluded a 
                <strong> partnership with Inspire-U incubator</strong>, playing a large role in 
                <strong>developing the legal ecosystem</strong>  of small and medium enterprises. We are now
                <strong>well-known in the startup, Fin-Tech, and SME sectors</strong> . We have also
                <strong> represented clients</strong> in landmark contracts and drafting major commercial regulations.
            </p>
        </div>
    </div>
    <div className="lg:w-[445px] sm:w-1/2 lg:h-[360px] w-full overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center w-full h-full" src={Blography} alt="statsc"/>
    </div>
  </div>
</section>
  )
}

export default Blograbhy