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
    <header className='px-6 py-10 flex justify-between items-center mx-auto w-full top-0 backdrop-blur-sm sticky z-30'>
      <p
        className='font-bold text-2xl text-blue-600 font-logo cursor-pointer'
        onClick={() => navigateToSlide(0)}
      >
        Bigone&apos;s Portfolio
      </p>
      <ul className='flex items-center justify-center font-medium gap-x-8 text-xl text-gray-600 cursor-pointer'>
        {NavMenu.map((route, index) => (
          <li
            key={index}
            className={`relative hover:text-blue-600 transition-all cursor-pointer ${
              selectedIndex === index ? 'text-blue-600' : ''
            }`}
            onClick={() => navigateToSlide(index)}
          >
            {route}
            <span
              className={`absolute left-0 right-0 bottom-[-2px] h-[2px] bg-blue-600 transition-transform duration-300 ${
                selectedIndex === index ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </li>
        ))}
      </ul>
    </header>
  );
}
