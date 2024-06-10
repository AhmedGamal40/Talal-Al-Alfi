import React from 'react'
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import Icone1 from "../../../../public/Assets/Images/money-back-policyicone1.svg"
import Icone2 from "../../../../public/Assets/Images/icon2.svg";
import Icone3 from "../../../../public/Assets/Images/icon3.svg";
import Icone4 from "../../../../public/Assets/Images/icon4.svg";
import Image from 'next/image';

function Clients() {
  return (
    <>
      <div className="lg:m-40 m-10">
        <div>
          <h1 className="font-[600] md:text-[29.61px] text-[25.61px] text-[#2B2D33] leading-[47.38px] uppercase">
            Clients & Partners
          </h1>
          <p className="font-[500] text-[19px] text-[#838386] leading-[23.69px] lg:pr-96  mt-5">
            Combine extensive knowledge and experience across a range of
            sectors, to provide legal insight and guidance on complex matters in
            areas such as:{" "}
          </p>
        </div>
        {/* =================================== */}
        <section className="bg-white">
          <div className="container  py-6 mx-auto">
            <div className="grid grid-cols-1 gap-8 xl:gap-4 md:grid-cols-2 xl:grid-cols-3 md:mt-20 mt-10">

              {/* <div className="flex flex-col items-center space-y-3 text-center rounded-xl ">
                <span className="inline-block p-3 text-gray-200 bg-[#F0AE1F] rounded-full ">
                  <Image src={Icone1} alt="Icone1" />
                </span>
                <h1 className="text-xl font-bold text-gray-700 ">
                  {" "}
                  Capital Market Institutions
                </h1>
                <p className="text-gray-600 ">
                  {" "}
                  Advising Al-Khair Capital on setting up REITs amounting to SR.
                  1 Billion in value.{" "}
                </p>
              </div> */}

              <div className="flex flex-col items-center space-y-3 text-center rounded-xl ">
                <span className="inline-block p-3 text-gray-200 bg-[#F0AE1F] rounded-full ">
                  <Image src={Icone1} alt="Icone1" />
                </span>
                <h1 className="text-xl font-bold text-gray-700 ">
                  {" "}
                  Capital Market Institutions
                </h1>
                <p className="text-gray-600  md:w-[340px] w-[266px]">
                {" "}
                  Advising Al-Khair Capital on setting up REITs amounting to SR.
                  1 Billion in value.{" "}
                </p>
              </div>

              {/* Repeat for other items... */}
              <div className="flex flex-col items-center space-y-3 text-center rounded-xl ">
                <span className="inline-block p-3 text-gray-200 bg-[#F0AE1F] rounded-full ">
                  <Image src={Icone2} alt="Icone1" />
                </span>
                <h1 className="text-xl font-bold text-gray-700 ">
                  {" "}
                  Insurance Companies
                </h1>
                <p className="text-gray-600  md:w-[340px] w-[266px]">
                  {" "}
                  Advising Al-Tawauniya Cooperative Insurance on its acquisition
                  of a financing Company
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3 text-center rounded-xl ">
                <span className="inline-block p-3 text-gray-200 bg-[#F0AE1F] rounded-full ">
                  <Image src={Icone1} alt="Icone1" />
                </span>
                <h1 className="text-xl font-bold text-gray-700 ">
                  {" "}
                  Capital Market Institutions
                </h1>
                <p className="text-gray-600 w-[266.24px]">
                  Advising UBS on its securities dealing activities in KSA
                </p>
              </div>
            </div>
            {/* -------------------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-4 md:mt-20 mt-10 ">
              <div className="flex flex-col items-center space-y-3 text-center rounded-xl ">
                <span className="inline-block p-3 text-gray-200 bg-[#F0AE1F] rounded-full ">
                  <Image src={Icone3} alt="Icone1" />
                </span>
                <h1 className="text-xl font-bold text-gray-700 ">
                  {" "}
                  Real Estate Developers
                </h1>
                <p className="text-gray-600  md:w-[320px] w-[266px]">
                  {" "}
                  Consulting leading real estate developers on their landmark
                  projects, including Rafal.{" "}
                </p>
              </div>

              {/* Repeat for other items... */}
              <div className="flex flex-col items-center space-y-3 text-center rounded-xl ">
                <span className="inline-block p-3 text-gray-200 bg-[#F0AE1F] rounded-full ">
                  {/* <LiaHandHoldingUsdSolid className="w-8 h-8 text-[#1B2745]" /> */}
                  {/* <Icone1 className="w-8 h-8 text-[#1B2745]"/> */}
                  <Image src={Icone4} alt="Icone1" />
                </span>
                <h1 className="text-xl font-bold text-gray-700 ">
                  Government Agencies
                </h1>
                <p className="text-gray-600 md:w-[320px] w-[266px]">
                  {" "}
                  Representing the government of Saudi Arabia in its real estate
                  privatization contract.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Clients 