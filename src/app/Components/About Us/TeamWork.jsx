import Image from 'next/image'
import React from 'react'
import Teamwork from '../../../../public/Assets/Images/team-work.png'

function TeamWork() {
  return (
        <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 md:py-24 py-10 mx-auto flex flex-wrap justify-center">
          <div className="lg:w-[445px] sm:w-1/2 lg:h-[360px] w-full mx-auto overflow-hidden mt-6 sm:mt-0">
              <Image className="object-cover object-center w-full h-full" src={Teamwork} alt="statsc"/>
            </div>
            <div className='flex flex-col -mx-4 lg:w-1/2 w-full text-start content-start sm:pr-10'>
                <div className='mt-7 w-full mb-5'>
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
        </>
  )
}

export default TeamWork