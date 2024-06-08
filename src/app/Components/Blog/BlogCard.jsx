import React from 'react'
import blog1 from "../../../../public/Assets/Images/blog1.png";
import blog2 from "../../../../public/Assets/Images/blog2.png";
import blog3 from "../../../../public/Assets/Images/blog3.png";
import blog4 from "../../../../public/Assets/Images/blog4.png";
import blog5 from "../../../../public/Assets/Images/blog5.png";
import blog6 from "../../../../public/Assets/Images/blog6.png";
import blog7 from "../../../../public/Assets/Images/blog7.png";
import blog8 from "../../../../public/Assets/Images/blog8.png";
import blog9 from "../../../../public/Assets/Images/blog9.png";
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleDoubleRight } from "react-icons/fa";

function BlogCard() {
  let data = [
    {
      id: 1,
      image: blog1,
      title: "Lorem ipsum dolor sit amet",
      name: "Lorem ipsum",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostr.",
    },
    {
      id: 2,
      image: blog2,
      title: "Lorem ipsum dolor sit amet",
      name: "Lorem ipsum",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostr.",
    },
    {
      id: 3,
      image: blog3,
      title: "Lorem ipsum dolor sit amet",
      name: "Lorem ipsum",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostr.",
    },
    { id: 4, image: blog4 ,title: "Lorem ipsum dolor sit amet",
      name: "Lorem ipsum",
      desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostr."},
    { id: 5, image: blog5 ,title: "Lorem ipsum dolor sit amet",
      name: "Lorem ipsum",
      desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostr."},
    { id: 6, image: blog6 ,title: "Lorem ipsum dolor sit amet",
      name: "Lorem ipsum",
      desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostr."},
    { id: 7, image: blog7 ,title: "Lorem ipsum dolor sit amet",
      name: "Lorem ipsum",
      desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostr."},
    { id: 8, image: blog8 ,title: "Lorem ipsum dolor sit amet",
      name: "Lorem ipsum",
      desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostr."},
    { id: 9, image: blog9 ,title: "Lorem ipsum dolor sit amet",
      name: "Lorem ipsum",
      desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostr."},
  ];

  let pages = [1, 2, 3, 4, 5, " ... ", 20 ];


  return (
    <>
      <div className=" py-4  mx-auto container my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {data.map((item, index) => (
            <div
              className="sm:p-0 p-5   rounded-lg hover:-translate-y-2 transition-all relative"
              key={index}
            >
              <div className="  rounded text-white cursor-pointer absolute top-5 left-5 backdrop-blur-xl bg-[#FFFFFF33] py-1 px-2">
                7 June
              </div>
              <div className=" h-[288.75px] overflow-hidden ">
                <Image
                  src={item.image}
                  alt="Product 1"
                  className="h-full w-full "
                />
              </div>
              <div className="py-6 bg-white">
                <h3 className="text-[21.04px] font-[400] leading-[28.05px] text-[#121416] my-5">
                  {item.title}
                </h3>
                <div className="flex space-x-2 my-5">
                  <div className="w-7 h-7">
                    <Image
                      src={blog1}
                      alt="Product 1"
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <span className="my-auto text-[21.04px] font-[400] leading-[28.05px] text-[#121416]">
                    {item.name}
                  </span>
                  <div className="w-[25.25px] h-[0.5px] bg-[#6C757D66] my-auto"></div>
                  <p className="my-auto text-[12.62px] font-[400] leading-[28.05px] text-[#6C757D]">
                    June 4, 2024
                  </p>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>
                <div className="my-5">
                  <Link
                    href={`/blog/${item.id}`}
                    alt=""
                    className="text-[21.04px] font-[400] leading-[28.05px] text-[#121416] underline underline-offset-[14px]"
                  >
                    View Post
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pagenamtion */}
      <div className="flex justify-center px-4 py-3 sm:px-6 my-20">
        <div className="">
          <div>
            {pages.map((page, index) => (
              <nav
                className="isolate inline-flex gap-4 rounded-md shadow-sm bg-[#F2F2F2]"
                aria-label="Pagination"
                key={index}
              >
                <a
                  href="#"
                  aria-current="page"
                  className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold  ${
                    page === 1
                      ? "bg-[#F0AE1F] text-white "
                      : "bg-[#F2F2F2] text-[#6C757D]"
                  }`}
                >
                  {page}
                  {/* {page !== FaAngleDoubleRight ? (
                    page
                  ) : (
                    <FaAngleDoubleRight
                      // className="h-5 w-5 my-auto"
                      // aria-hidden="true"
                    />
                  )} */}
                </a>
              </nav>
            ))}
            {/* <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 "
            >
              <span className="sr-only">Next</span>
              <FaAngleDoubleRight className="h-5 w-5" aria-hidden="true" />
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard