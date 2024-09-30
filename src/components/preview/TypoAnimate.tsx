'use client';

import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { Button } from '@/components/ui/button';

export default function TypoAnimate() {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className='flex flex-col items-center justify-center text-center gap-10'>
      <TypeAnimation
        key={key}
        sequence={[
          '안녕하세요.',
          1000,
          '끊임없이 문제해결을 고민하는',
          1000,
          '사용자 입장에서 다시 생각하는',
          1000,
          '프론트엔드 개발자\n신태일입니다.',
          1000,
        ]}
        style={{
          width: '400px',
          height: '100px',
          display: 'block',
          fontSize: '2em',
        }}
        className='whitespace-pre-line bg-gradient-to-r from-[#433878] to-[#E4B1F0] inline-block text-transparent bg-clip-text font-logo'
        repeat={0}
      />
      <Button onClick={handleReplay}>다시 보기</Button>
    </div>
  );
}
