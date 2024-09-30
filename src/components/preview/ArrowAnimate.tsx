'use client';

import Lottie from 'react-lottie-player';

import ArrowJson from '@/../public/down-arrow.json';

export default function ArrowAnimate() {
  return (
    <Lottie
      loop
      animationData={ArrowJson}
      play
      style={{ width: '150px', height: '150px' }}
    />
  );
}
