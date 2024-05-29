import Image from 'next/image'
import React from 'react'
import Teamwork from '../../../../public/Assets/Images/team-work.png'

function TeamWork() {
  return (
<section className="text-gray-600 body-font mb-20">
  <div className="container mx-auto flex justify-center">
    <div className="lg:w-[445px] sm:w-1/2 lg:h-[360px] w-full overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center w-full h-full" src={Teamwork} alt="statsc"/>
    </div>
    <div className='flex mx-7 lg:w-1/2 sm:w-2/3 content-end sm:pr-10'>
        <div className=' w-full'>
            <p className='font-[400] text-[20.05px] leading-[35px]'>
            Our team has consulted 
                <strong> numerous public and private entities</strong> on major
                investment projects throughout their collective careers,
                <strong>enabling informed decision-making and managing legal risks and compliance</strong>
                In line with that, We have incorporated and managed many Fin-Tech businesses’ legal affairs that completed several investment rounds and evolved to lead the sector. We have also resolved contractual and commercial disputes,
                <strong> utilizing our team’s distinct litigation skills to represent major companies in court adequately.</strong>
            </p>
        </div>
    </div>
  </div>
</section>
  )
}

export default TeamWork