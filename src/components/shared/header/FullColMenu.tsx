'use client';

import { NavMenu } from '@/data/NavMenu';
import { slideTo } from '@/store/features/swiperReducer';
import { useAppDispatch } from '@/store/hooks';
import { AnimatePresence, motion } from 'framer-motion';

export default function FullColMenu({ isOpen }: { isOpen: boolean }) {
  const dispatch = useAppDispatch();

  return (
    <AnimatePresence mode='sync'>
      {isOpen && ( // 조건부 렌더링을 통해 `AnimatePresence`가 exit 애니메이션을 감지하게 함
        <motion.div
          className='w-full h-full bg-white flex flex-col items-center justify-center z-50 py-8 rounded-b-xl shadow-2xl'
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }} // 사라질 때 위로 올라가는 애니메이션
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <ul className='space-y-8 text-2xl font-semibold'>
            {NavMenu.map((menu, index) => (
              <li
                key={index}
                onClick={() => dispatch(slideTo(index))}
                className='cursor-pointer'
              >
                {menu}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
