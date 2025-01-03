'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <div className="relative z-50">
        {/* Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <section className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          md:flex 
          flex-col 
          md:flex-row 
          gap-10 
          font-dm-sans 
          text-sm
          absolute 
          md:relative 
          right-0 
          top-12 
          md:top-0
          bg-white 
          md:bg-transparent
          p-6 
          md:p-0
          shadow-lg 
          md:shadow-none
          rounded-lg 
          md:rounded-none
          min-w-[200px]
          md:min-w-0
        `}>
          <Link 
            href="/palace" 
            className={`relative ${pathname === '/palace' ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-black hover:text-gray-400' : 'hover:text-gray-400'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Palace
          </Link>
          <Link 
            href="/daewoong-academy"
            className={`relative ${pathname === '/daewoong-academy' ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-black hover:text-gray-400' : 'hover:text-gray-400'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Daewoong Academy
          </Link>
          <Link 
            href="/projects"
            className={`relative ${pathname === '/projects' ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-black hover:text-gray-400' : 'hover:text-gray-400'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </section>
      </div>
    </>
  );
} 