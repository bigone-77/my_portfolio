'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import SideSocial from '@/components/shared/SideSocial';
import SideEmail from '@/components/shared/SideEmail';

import AboutDiv from '@/components/main/about';
import SkillDiv from '@/components/main/skills';
import ProjectDiv from '@/components/main/projects';
import ExperienceDiv from '@/components/main/experience';

export default function MainView() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigateToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      <main className='relative w-full h-full'>
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
          onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
          className='w-full h-screen'
        >
          <SwiperSlide>
            <AboutDiv />
          </SwiperSlide>
          <SwiperSlide>
            <SkillDiv />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectDiv />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceDiv />
          </SwiperSlide>
        </Swiper>
        <SideSocial />
        <SideEmail />
      </main>
    </motion.div>
  );
}
