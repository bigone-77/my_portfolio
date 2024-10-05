'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

export default function FlipCard({ images }: { images: StaticImageData[] }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className='w-full relative cursor-pointer'
      onClick={handleFlip}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className='relative w-full h-64'
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of the card */}
        <Card
          className='absolute w-full h-full bg-blue-500 text-white rounded-lg'
          style={{ backfaceVisibility: 'hidden' }}
        >
          <CardHeader>
            <CardTitle className='font-logo text-lg md:text-xl'>
              🎉수상 및 자격증
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='list-disc pl-3 text-xs md:text-sm space-y-2'>
              <li>서경SW 아카데미 헥토 금상</li>
              <li>PCCP 대비 교육 이수 수료증</li>
            </ul>
          </CardContent>
        </Card>

        {/* Back of the card */}
        <Card
          className='absolute w-full h-full flex justify-center items-center rounded-lg'
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <CardContent className='grid grid-cols-2 place-items-center'>
            <Image src={images[0]} alt='0번째 이미지' />
            <Image src={images[1]} alt='1번째 이미지' />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
