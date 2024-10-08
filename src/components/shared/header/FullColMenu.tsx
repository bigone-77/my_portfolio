'use client';

import { NavMenu } from '@/data/NavMenu';
import { slideTo } from '@/store/features/swiperReducer';
import { toggleOpen } from '@/store/features/toggleMenuReducer';
import { useAppDispatch } from '@/store/hooks';
import { AnimatePresence, motion } from 'framer-motion';

export default function FullColMenu({ isOpen }: { isOpen: boolean }) {
  const dispatch = useAppDispatch();

  const toggleHandler = (index: number) => {
    dispatch(slideTo(index));
    dispatch(toggleOpen(!isOpen));
  };

  return (
    <AnimatePresence mode='sync'>
      {isOpen && ( // 조건부 렌더링을 통해 `AnimatePresence`가 exit 애니메이션을 감지하게 함
        <motion.div
          className='w-full h-full text-center py-8 rounded-b-xl mx-auto backdrop-blur-sm z-10 shadow-lg shadow-gray-500/50 overflow-x-hidden'
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }} // 사라질 때 위로 올라가는 애니메이션
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <ul className='flex flex-col gap-4 text-2xl font-semibold text-blue-600'>
            {NavMenu.map((menu, index) => (
              <li
                key={index}
                onClick={() => toggleHandler(index)}
                cl