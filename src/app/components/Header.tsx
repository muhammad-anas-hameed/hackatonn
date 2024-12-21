import React from 'react';
import { FaSearch, FaHeart, FaBell, FaCog } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#FFFFFF] w-full h-auto border border-[#C3D4E966] p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Search Bar Container */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          {/* Logo */}
          <h1 className="text-[#3563E9] text-[32px] leading-[48px] font-bold">MORENT</h1>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-[492px] h-[44px] mt-2 md:mt-0">
            <input
              type="text"
              placeholder="Search something here"
              className="w-full h-full border rounded-full pl-12 pr-4 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch />
            </div>
          </div>
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-2 lg:space-x-4 mt-4 md:mt-0">
          <Link href="/favorites">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <FaHeart className="text-lg md:text-xl text-gray-600 cursor-pointer" />
            </div>
          </Link>
          <Link href="/notifications">
            <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <FaBell className="text-lg md:text-xl text-gray-600 cursor-pointer" />
            </div>
          </Link>
          <Link href="/settings">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <FaCog className="text-lg md:text-xl text-gray-600 cursor-pointer" />
            </div>
          </Link>

          {/* Profile Picture */}
          <Link href="/profile">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
              <Image src="/avatar.png" alt="User Profile Picture" width={40} height={40} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

