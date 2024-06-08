import React from 'react'
import blogCover from '../../../../public/Assets/Images/blogCover.png';
import Image from 'next/image';
function BlogPage() {
  return (
    <>
      <div className="relative md:h-[415px] h-full bg-cover ">
        <Image
          src={blogCover}
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute  w-[100%] h-full"
        />
        <div className="absolute inset-0 bg-black opacity-[70%]"></div>
        <div className="relative top-1/3 z-10 text-white text-start container my-auto mx-auto p-4">
          <h3 className="text-[16px] leading-[15.14px] font-[500] uppercase mb-8">
            Blog
          </h3>
          <p className="text-[32px] leading-[46.75px] font-[400]">
            In our blog, we provide you with{" "}
            <span className="font-bold">
              many legal <br /> articles
            </span>{" "}
            that you can read to learn more <br /> about{" "}
            <span className="font-bold">updated</span> legal information.
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogPage