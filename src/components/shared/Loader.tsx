'use client';

import Lottie from 'react-lottie-player';

import LoadingJson from '@/../public/loading.json';

export default function Loader() {
  return (
    <Lottie
      loop
      animationData={LoadingJson}
      play
      // style={{ width: '50px', height: '80px' }}
    />
  );
}
