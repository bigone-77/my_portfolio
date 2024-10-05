export default function SideEmail() {
  return (
    <div className='fixed bottom-0 right-12 z-20 w-[20px] hidden sm:block'>
      <div className='flex flex-col items-center gap-4'>
        <div className='flex items-center gap-1 vertical-rl transition-all hover:-translate-y-2'>
          <svg
            className='rotate-90 cursor-pointer w-5 h-5'
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            ></path>
          </svg>
          <a
            href='mailto:taeill012@gmail.com'
            className='font-logo tracking-widest'
          >
            taeill012@gmail.com
          </a>
        </div>
        <div className='h-[160px] w-[1px] bg-black' />
      </div>
    </div>
  );
}
