"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoGlobeOutline } from "react-icons/io5";
import { MdMenu, MdClose } from "react-icons/md";
import coverImage from "../../../../public/Assets/Images/cover.png";
import logo from "../../../../public/Assets/Images/talal.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-full">
      <Image
        src={coverImage}
        alt="Cover Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute w-full h-full"
      />
      <div className="relative z-10 container mx-auto p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-14 mt-8 mb-12">
            <Link href="/">
              <Image src={logo} alt="alfi" quality={100} className="w-full" />
            </Link>
          </div>
          {/* Menu Button for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none mt-8 mb-12"
            >
              {isOpen ? <MdClose size={25} /> : <MdMenu size={25} />}
            </button>
          </div>
          {/* Links */}
          <div className={`w-full lg:flex md:items-center md:w-auto hidden`}>
            <ul className="md:flex lg:space-x-10 md:space-x-4 text-white uppercase space-y-2 md:space-y-0">
              <li className="mt-2 md:mt-0">
                <Link
                  href="/"
                  className={`link ${
                    pathname === "/" ? "text-yellow-500" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="mt-2 md:mt-0">
                <Link
                  href="/about-us"
                  className={`link ${
                    pathname === "/about-us" ? "text-yellow-500" : ""
                  }`}
                >
                  About us
                </Link>
              </li>
              <li className="mt-2 md:mt-0">
                <Link
                  href="/expertise"
                  className={`link ${
                    pathname === "/expertise" ? "text-yellow-500" : ""
                  }`}
                >
                  Expertise
                </Link>
              </li>
              <li className="mt-2 md:mt-0">
                <Link
                  href="/video-gallery"
                  className={`link ${
                    pathname === "/video-gallery" ? "text-yellow-500" : ""
                  }`}
                >
                  Video Gallery
                </Link>
              </li>
              <li className="mt-2 md:mt-0">
                <Link
                  href="/blog"
                  className={`link ${
                    pathname === "/blog" ? "text-yellow-500" : ""
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li className="mt-2 md:mt-0">
                <Link
                  href="/contact-us"
                  className={`link ${
                    pathname === "/contact-us" ? "text-yellow-500" : ""
                  }`}
                >
                  Contact us
                </Link>
              </li>
              <li className="mt-2 md:mt-0 flex items-center">
                <IoGlobeOutline className="mr-1" />
                <span>Language</span>
              </li>
            </ul>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-4 px-2 space-y-2 ">
            <ul className="text-white uppercase flex flex-col justify-center items-center">
              <li>
                <Link
                  href="/"
                  className={`block px-3 py-2 rounded-md ${
                    pathname === "/" ? "text-yellow-500" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`block px-3 py-2 rounded-md ${
                    pathname === "/about-us" ? "text-yellow-500" : ""
                  }`}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  className={`block px-3 py-2 rounded-md ${
                    pathname === "/expertise" ? "text-yellow-500" : ""
                  }`}
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/video-gallery"
                  className={`block px-3 py-2 rounded-md ${
                    pathname === "/video-gallery" ? "text-yellow-500" : ""
                  }`}
                >
                  Video Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`block px-3 py-2 rounded-md ${
                    pathname === "/blog" ? "text-yellow-500" : ""
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={`block px-3 py-2 rounded-md ${
                    pathname === "/contact-us" ? "text-yellow-500" : ""
                  }`}
                >
                  Contact us
                </Link>
              </li>
              <li className="flex items-center px-3 py-2">
                <IoGlobeOutline className="mr-1" />
                <span>Language</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
