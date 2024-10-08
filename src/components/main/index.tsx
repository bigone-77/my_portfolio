'use client';

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { slideTo } from '@/store/features/swiperReducer';

import SideSocial from '@/components/shared/SideSocial';
import SideEmail from '@/components/shared/SideEmail';

import AboutDiv from '@/components/main/about';
import SkillDiv from '@/components/main/skills';
import ProjectDiv from '@/components/main/projects';

export default function MainView() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const selectedIndex = useAppSelector((state) => state.swiper.selectedIndex);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(selectedIndex);
    }
  }, [selectedIndex, swiperInstance]);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className='w-full flex-1'
    >
      <Swiper
        direction='vertical'
        slidesPerView={1}
        mousewheel={true}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => dispatch(slideTo(swiper.activeIndex))}
        className='h-full mt-[80px] px-7 sm:px-16'
      >
        <SwiperSlide className='grid grid-cols-1 place-items-center'>
          <AboutDiv />
        </SwiperSlide>
        <SwiperSlide className='grid grid-cols-1 place-items-center'>
          <SkillDiv />
        </SwiperSlide>
        <SwiperSlide className='grid grid-cols-1 place-items-center'>
          <ProjectDiv />
        </SwiperSlide>
      </Swiper>
      <SideSocial />
      <SideEmail />
    </motion.div>
  );
}
