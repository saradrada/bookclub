"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'
import { montserrat } from './fonts';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions = [{ title: 'HOME', url: "/" },
  { title: 'BOOK OF THE MONTH', url: "/home" },
  { title: 'JOIN THE CLUB', url: "/home" },
  { title: 'EVENTS', url: "/home" },
  ]

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-8">
          {/* Left-side Menu */}
          <Link href="/"><p className= {`${montserrat.className} text-xs font-bold hover:text-gray-600`}>Home</p></Link>
          <Link href="/video"><p className={`${montserrat.className} text-xs font-bold hover:text-gray-600`}>Video</p></Link>
          <Link href="/about"><p className={`${montserrat.className} text-xs font-bold hover:text-gray-600`}>About</p></Link>
        </div>

        {/* Brand Name */}
        <div className={`${styles.sparkyStonesFont} text-4xl font-bold`}>berlin book babes</div>

        {/* Right-side Menu */}
        <div className="flex items-center space-x-8">
          <Link href="/search"><p className={`${montserrat.className} text-xs font-bold hover:text-gray-600`}>Search</p></Link>
          <Link href="/contact"><p className={`${montserrat.className} text-xs font-bold hover:text-gray-600`}>Contact</p></Link>
          <Link href="/subscribe"><p className={`${montserrat.className} text-xs font-bold hover:text-gray-600`}>Subscribe</p></Link>
        </div>
      </nav>

      {/* Bottom Menu */}
      <div className="bg-white">
        <nav className="container mx-auto py-3">
          <div className="flex justify-center space-x-10">
            {menuOptions && menuOptions.map(option =>
              <Link key={option.title} href={option.url}><p className={`${montserrat.className} text-black font-bold hover:text-gray-400`}>{option.title}</p></Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
