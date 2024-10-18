'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { useAnimation, motion } from 'framer-motion';

import Animate from '@/components/home/Animate';

const ScrollSection = dynamic(() => import('@/components/home/ScrollSection'));

export default function HomeDiv() {
  const controls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent > 20) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }

      if (scrollPercent > 50) {
        textControls.start('visible');
      } else {
        textControls.start('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, textControls]);

  return (
    <div className='relative w-screen h-full flex flex-col items-center'>
      <div className='fixed inset-0'>
        <Image
          src='/bg.webp'
          alt='Background'
          layout='fill'
          className='object-cover'
        />
      </div>
      <div className='fixed inset-0 bg-black/50' />

      <div className='relative w-full min-h-screen flex flex-col items-center justify-center'>
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Animate />
        </div>
      </div>

      <motion.div
        className='flex flex-col md:grid md:grid-cols-2 mx-16 sm:mx-24 items-center justify-between gap-4 md:gap-20 h-full'
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: '-50%' },
          visible: { opacity: 1, y: '0%' },
        }}
        initial='hidden'
        transition={{ ease: 'backOut', duration: 1.2 }}
      >
        <ScrollSection />
      </motion.div>
    </div>
  );
}
