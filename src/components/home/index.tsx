'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useAnimation, motion } from 'framer-motion';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Animate from '@/components/home/Animate';
import FlipCard from '@/components/home/FlipCard';

import SWSrc from '@awards/sw.png';
import PCCPSrc from '@awards/pccp.png';

export default function HomeDiv() {
  const controls = useAnimation();
  const textControls = useAnimation(); // 새로운 애니메이션 제어를 위한 useAnimation 추가

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Check if the scroll percent exceeds a certain threshold
      if (scrollPercent > 20) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }

      // 추가 텍스트 애니메이션을 위한 스크롤 감지
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
    <div className='relative w-full h-full'>
      <div className='fixed inset-0 bg-profileBackgroundImage bg-cover bg-no-repeat bg-center w-full h-full before:content-[""] before:absolute before:inset-0 before:bg-black/50' />

      <div className='relative w-full min-h-screen flex flex-col items-center justify-center'>
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <Animate />
        </div>
      </div>

      <motion.div
        className='flex flex-col md:grid md:grid-cols-2 mx-16 sm:mx-24 items-center md:items-start justify-between gap-12 md:gap-20 h-full'
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: '50%' },
          visible: { opacity: 1, y: '0%' },
        }}
        initial='hidden'
        transition={{ ease: 'backOut', duration: 1.2 }}
      >
        <Card className='w-full cursor-pointer hover:scale-95 transition-all'>
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
        <FlipCard
          images={[
            { imgSrc: SWSrc, description: '서경SW 헥토 금상' },
            { imgSrc: PCCPSrc, description: 'PCCP 대비 교육 수료증' },
          ]}
        />
      </motion.div>

      {/* 스크롤하면 나타나는 텍스트 추가 */}
      <motion.div
        className='mt-10 sm:mt-16 text-center text-lg md:text-xl'
        animate={textControls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        <Link
          href='/main'
          className='underline underline-offset-8 hover:opacity-80 cursor-pointer transition-all text-white text-lg'
        >
          👉About Me
        </Link>
      </motion.div>

      {/* Add more content to make the page scrollable */}
      <div className='h-60'></div>
    </div>
  );
}
