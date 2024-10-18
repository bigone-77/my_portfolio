import Image from 'next/legacy/image';
import dynamic from 'next/dynamic';

import Animate from '@/components/home/Animate';

const ScrollDiv = dynamic(() => import('@/components/home'));

export default function HomePage() {
  return (
    <main className='relative w-screen h-full flex flex-col items-center'>
      <div className='fixed inset-0'>
        <Image
          src='/bg.webp'
          alt='Background'
          layout='fill'
          className='object-cover'
          priority
        />
      </div>
      <div className='fixed inset-0 bg-black/50' />

      <div className='relative w-full min-h-screen flex flex-col items-center justify-center'>
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Animate />
        </div>
      </div>
      <ScrollDiv />
    </main>
  );
}
