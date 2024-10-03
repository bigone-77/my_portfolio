import { NavMenu } from '@/constants/NavMenu';

interface HeaderProps {
  selectedIndex: number;
  navigateToSlide: (index: number) => void;
}

export default function Header({
  selectedIndex,
  navigateToSlide,
}: HeaderProps) {
  return (
    <header
      className={`${!selectedIndex && 'bg-zinc-800'} px-6 py-8 flex justify-between items-center mx-auto w-full top-0 backdrop-blur-sm fixed z-30 shadow-lg shadow-gray-500/50`}
    >
      <p
        className={`${!selectedIndex && 'text-zinc-400'} font-bold text-2xl text-blue-600 font-logo cursor-pointer`}
        onClick={() => navigateToSlide(0)}
      >
        Bigone&apos;s Portfolio
      </p>
      <ul className='flex items-center justify-center font-medium gap-x-8 text-xl text-gray-600 cursor-pointer'>
        {NavMenu.map((route, index) => (
          <li
            key={index}
            className={`relative hover:text-blue-600 transition-all cursor-pointer
              ${selectedIndex === index + 1 ? 'text-blue-600' : ''}
              ${!selectedIndex && 'text-white'}  
              `}
            onClick={() => navigateToSlide(index + 1)}
          >
            {route}
            <span
              className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-blue-600 transition-transform duration-300 ${
                selectedIndex === index + 1 ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </li>
        ))}
      </ul>
    </header>
  );
}
