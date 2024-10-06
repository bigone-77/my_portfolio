'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { slideTo } from '@/store/features/swiperReducer';

import { NavMenu } from '@/data/NavMenu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const selectedIndex = useAppSelector(
    (state) => state.swiperReducer.selectedIndex,
  );
  const dispatch = useAppDispatch();

  const listClickHandler = (index: number) => {
    if (pathname === '/') {
      router.push('main');
    }
    dispatch(slideTo(index));
  };

  return (
    <header
      className={`${
        pathname === '/' && 'bg-zinc-800'
      } px-6 py-4 md:py-8 flex justify-between items-center mx-auto w-full top-0 backdrop-blur-sm fixed z-30 shadow-lg shadow-gray-500/50 overflow-x-hidden`}
    >
      <Link href='/'>
        <p
          className={`font-bold text-xl md:text-2xl ${pathname === '/' ? 'text-gray-600' : 'text-blue-600'} font-logo cursor-pointer`}
        >
          Bigone&apos;s Portfolio
        </p>
      </Link>
      <ul className='hidden md:flex items-center justify-center font-medium gap-x-8 text-xl cursor-pointer'>
        {NavMenu.map((route, index) => (
          <li
            key={index}
            className={`relative hover:text-blue-600 transition-all cursor-pointer
              ${selectedIndex === index && pathname === '/main' ? 'text-blue-600' : 'text-gray-600'}
              
              `}
            onClick={() => listClickHandler(index)}
          >
            {route}
            <span
              className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-blue-600 transition-transform duration-300 ${
                selectedIndex === index && pathname === '/main'
                  ? 'scale-x-100'
                  : 'scale-x-0'
              }`}
            />
          </li>
        ))}
      </ul>
    </header>
  );
}
