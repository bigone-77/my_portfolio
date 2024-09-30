'use client';

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Header() {
  return (
    <header className='px-6 py-10 flex justify-between items-center mx-auto w-full top-0 backdrop-blur-sm sticky z-30'>
      <p
        className='font-bold text-2xl text-blue-600 font-logo'
        onClick={() => scroll.scrollToTop()}
      >
        Bigone&apos;s Portfolio
      </p>
      <ul className='flex items-center justify-center font-medium gap-x-8 text-xl text-gray-600 cursor-pointer'>
        {['Preview', 'About', 'Skills', 'Projects', 'Contact'].map(
          (route, index) => (
            <li key={index} className='hover:text-blue-600 transition-all'>
              <ScrollLink
                to={`${route.toLowerCase()}`}
                smooth={true}
                duration={500}
                offset={-120}
              >
                {route}
              </ScrollLink>
            </li>
          ),
        )}
      </ul>
    </header>
  );
}
