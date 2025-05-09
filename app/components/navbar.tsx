'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent group-hover:from-red-500 group-hover:to-red-300 transition-all duration-300">
                Ambulan
              </span>
              <span className="text-gray-700 font-semibold group-hover:text-red-500 transition-colors">24/7</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-red-600 transition-colors text-sm uppercase font-medium tracking-wider py-2"
                >
                  <span className="relative">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
              <a
                href="https://wa.me/6281225852454"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-2.5 rounded-full font-semibold hover:from-red-500 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12c0 1.825.494 3.535 1.352 5.004L2 22l5.035-1.316A9.945 9.945 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.42 0-2.79-.369-4.006-1.072l-.277-.167-2.879.754.771-2.82-.181-.289A7.957 7.957 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                  </svg>
                  <span>Hubungi WA</span>
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isOpen
            ? 'translate-x-0 opacity-100 visible'
            : 'translate-x-full opacity-0 invisible'
        } md:hidden fixed top-20 right-0 bottom-0 w-full bg-white/95 backdrop-blur-lg`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
              className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm uppercase font-medium tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <a
            href="https://wa.me/6281225852454"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 mx-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12c0 1.825.494 3.535 1.352 5.004L2 22l5.035-1.316A9.945 9.945 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.42 0-2.79-.369-4.006-1.072l-.277-.167-2.879.754.771-2.82-.181-.289A7.957 7.957 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
              <span>Hubungi WA</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
