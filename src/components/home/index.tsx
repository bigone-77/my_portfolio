'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import ScrollSection from '@/components/home/ScrollSection';

export default function ScrollDiv() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // 조건문을 통합하여 하나의 애니메이션 상태를 관리
      if (scrollPercent > 20) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      className='flex flex-col items-center justify-center min-h-full z-20 mx-16 sm:mx-24 gap-4 md:gap-20'
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial='hidden'
      transition={{ ease: 'linear', duration: 1.6 }}
    >
      <ScrollSection />
      <Link
        href='/main'
        className='col-span-2 underline underline-offset-8 hover:opacity-80 cursor-pointer transition-all text-white text-lg text-center'
      >
        👉About Me
      </Link>
    </motion.div>
  );
}
