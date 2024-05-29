"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import coverImage from "../../../../public/Assets/Images/cover.png";
import logo from "../../../../public/Assets/Images/talal.png";
import { usePathname } from 'next/navigation'
import { IoGlobeOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={coverImage}
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div
          style={{ position: "relative", zIndex: 1 }}
          className="container mx-auto"
        >
          <div className="flex justify-between ">
            {/* Icone */}
            <div className="w-14 mt-8 mb-12">
            <Link href="/" >
              <Image src={logo} alt="alfi" quality={100} className="w-full" />
            </Link>
            </div>
            {/* Linkes */}
      <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none mt-8 mb-12 block">
            {isOpen ? 'xxxxxxx' : <MdMenu className='my-auto ' size={25}/>}
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex lg:space-x-14 md:space-x-6 text-white uppercase ">
            <li className="mt-2 md:mt-0">
              <Link href='/' className={`link ${pathname === '/' ? ' text-yellow-500' : ''}`} >
                Home
              </Link>
            </li>
            <li className="mt-2 md:mt-0">
              <Link href="/about-us" className={`link ${pathname === '/about-us' ? ' text-yellow-500' : ''}`}>
                About us
              </Link>
            </li>
            <li className="mt-2 md:mt-0">
              <Link href="/expertise" className={`link ${pathname === '/expertise' ? ' text-yellow-500' : ''}`}>
              Expertise
              </Link>
            </li>
            <li className="mt-2 md:mt-0">
              <Link href="/video-gallery" className={`link ${pathname === '/video-gallery' ? ' text-yellow-500' : ''}`}>
              Video Gallery 
              </Link>
            </li>
            <li className="mt-2 md:mt-0">
              <Link href="/contact-us" className={`link ${pathname === '/contact-us' ? ' text-yellow-500' : ''}`}>
              Contact us 
              </Link>
            </li>
            <li className="mt-2 md:mt-0 flex">
            <IoGlobeOutline className='my-auto mr-1'/>
              <span > Language </span>
            </li>
          </ul>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

