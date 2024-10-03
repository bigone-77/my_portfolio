'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='w-full h-full relative cursor-pointer hover:scale-95 transition-all'>
      <motion.div
        className='w-full h-full relative rounded-lg shadow-lg'
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={handleFlip}
      >
        <Card
          className='absolute w-full h-full bg-blue-500 text-white flex justify-center items-center rounded-lg'
          style={{ backfaceVisibility: 'hidden' }}
        >
          <CardContent>Front Side</CardContent>
        </Card>

        <Card
          className='absolute w-full h-full bg-red-500 text-white flex justify-center items-center rounded-lg'
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <CardContent>Back Side</CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
