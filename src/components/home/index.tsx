'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Header from '@/components/shared/Header';

import PreviewDiv from '@/components/home/preview';
import AboutDiv from '@/components/home/about';
import SkillDiv from '@/components/home/skills';
import ProjectDiv from '@/components/home/projects';
import ContactDiv from '@/components/home/contact';

export default function HomeView() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 슬라이드를 이동시키는 핸들러(네비게이션)
  const navigateToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <main className='m-0'>
      <Header selectedIndex={selectedIndex} navigateToSlide={navigateToSlide} />
      <Swiper
        direction='vertical'
        spaceBetween={30}
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
          <PreviewDiv />
        </SwiperSlide>
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
          <ContactDiv />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
