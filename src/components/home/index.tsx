'use client';

import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Animate from '@/components/home/Animate';
import FlipCard from '@/components/home/FlipCard';

import SWSrc from '@awards/sw.png';
import PCCPSrc from '@awards/pccp.png';

export default function HomeDiv() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Check if the scroll percent exceeds a certain threshold
      if (scrollPercent > 20) {
        // 20% is an example threshold
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
    <div className='relative w-full h-full'>
      <div className='fixed inset-0 bg-profileBackgroundImage bg-cover bg-no-repeat bg-center w-full h-full before:content-[""] before:absolute before:inset-0 before:bg-black/50' />

      <div className='relative w-full min-h-screen flex flex-col items-center justify-center'>
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <Animate />
        </div>

        <motion.div
          className='flex flex-col items-center justify-between gap-2 pt-24'
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: '-50%' }, // Start from above the viewport
            visible: { opacity: 1, y: '45%' }, // Move to the center
          }}
          initial='hidden'
          transition={{ ease: 'backOut', duration: 1.2 }}
        >
          {/* <motion.div className='flex flex-col items-center justify-between gap-y-10 mx-10 sm:mx-20 md:mx-52'> */}
          <Card className='cursor-pointer hover:scale-95 transition-all w-fit'>
            <CardHeader>
              <CardTitle className='font-logo text-lg md:text-xl'>
                ⏳ 저는 이런 활동들을 했어요
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='list-disc pl-3 text-xs md:text-sm space-y-2'>
                <li>
                  서경대학교 소프트웨어학과
                  <br />
                  (19년도 입학 ~ 2025 2월 졸업 예정)
                </li>
                <li>
                  UMC 5기 프론트엔드 수료
                  <br />
                  (23.09.12 ~ 24.02.25)
                </li>
                <li>
                  서경SW인재양성 교육 수료
                  <br />
                  (24.02.14 ~ 24.06.26)
                </li>
                <li>
                  goorm x goormthon UNIV. 3기 프론트엔드
                  <br />
                  (24.07.23 ~)
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* </motion.div> */}
          <FlipCard images={[SWSrc, PCCPSrc]} />
        </motion.div>
      </div>

      {/* Add more content to make the page scrollable */}
      <div className='h-80'></div>
    </div>
  );
}
