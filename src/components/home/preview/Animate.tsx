'use client';

import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'react-lottie-player';

import ArrowJson from '@/../public/down-arrow.json';

import { Button } from '@/components/ui/button';

export default function Animate() {
  const [typeEnd, setTypeEnd] = useState(false);
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prevKey) => prevKey + 1);
    setTypeEnd(false);
  };

  return (
    <div className='flex flex-col items-center justify-center text-center gap-10 relative'>
      <TypeAnimation
        key={key}
        deletionSpeed={60}
        wrapper='span'
        sequence={[
          '안녕하세요.',
          1000,
          '야구와 개발을\n좋아하는',
          1000,
          '사용자 입장에서\n끊임없이 생각하는',
          1000,
          '프론트엔드 개발자\n신태일입니다.',
          100,
          () => setTypeEnd(true),
        ]}
        style={{
          width: '400px',
          height: '150px',
          display: 'block',
          fontSize: '2em',
        }}
        cursor={true}
        className='text-white whitespace-pre-line inline-block font-logo'
        repeat={0}
      />
      {typeEnd && (
        <div className='absolute -bottom-32 flex flex-col items-center gap-3'>
          <Button
            className='bg-white text-gray-700 fade-in-10'
            onClick={handleReplay}
          >
            다시 보기
          </Button>
          <Lottie
            loop
            animationData={ArrowJson}
            play
            style={{ width: '50px', height: '80px' }}
          />
        </div>
      )}
    </div>
  );
}
