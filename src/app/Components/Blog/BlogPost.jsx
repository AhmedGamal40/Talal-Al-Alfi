import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";

const BlogPost = () => {

  return (
   <>
   {/* blog content */}
   <div className="container mx-auto md:px-20 px-5 ">
        <div className="text-start text-lg font-medium leading-relaxed mt-16">
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="flex space-x-5">
          <BiSolidQuoteRight className="text-gray-400" size={60}/>
          <p className="uppercase text-gray-800 md:text-4xl text-2xl leading-tight tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
          </p>
        </div>
        <div className="text-start text-lg font-medium leading-relaxed mt-16">
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="mt-16">
          <h1 className="md:text-[40px] text-[19px] font-[400] md:leading-[40px] leading-[22px] tracking-[0.5px] mb-10 uppercase">Lorem ipsum dolor sit amet</h1>
          <p className="mb-10 text-lg font-medium leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ad minim veniam, quis nostrud exercitation ullamco labori</p>
          <ul className="list-disc md:mx-20 mx-10 my-10 text-lg font-medium leading-relaxed">
            <li>Crisp fresh iconic elegant timeless clean perfume</li>
            <li>Neck straight sharp silhouette and dart detail</li>
            <li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li>
          </ul>
        </div>
        <div className="text-start text-lg font-medium leading-relaxed mt-16">
          <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
   </>
  );
};

export default BlogPost;
