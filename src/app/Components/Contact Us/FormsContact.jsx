import React from 'react'
import Logo from "../../../../public/Assets/Images/logo2.png"
import Image from 'next/image';
function FormsContact() {
  return (
    <>
      <div className="flex md:justify-around justify-center md:flex-row flex-col mt-20 mb-24">
        {/* Contact form */}
        <div className="md:w-1/2 my-10 lg:px-20 px-10 items-center text-start text-[#C2C2C2]">
          If you`re seeking personalized legal advice, don`t hesitate to reach
          out for expert counsel tailored to your specific needs and
          circumstances.
        </div>
        {/* form */}
        {/* form */}
        <div className=" bg-white p-10 mx-auto shadow-lg w-full max-w-lg">
          <div className="text-center mb-8">
            <Image src={Logo} alt="Logo" />
          </div>
          <form>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2 pl-2">
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Subject"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormsContact