'use client';

import { useEffect } from 'react';

import { useAnimation, motion } from 'framer-motion';

import ScrollSection from '@/components/home/ScrollSection';

export default function ScrollDiv() {
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
  );
}
