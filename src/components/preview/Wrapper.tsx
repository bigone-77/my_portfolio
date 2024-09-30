'use client';

import useWindowSize from '@/hooks/useWindow';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { width: currentWidth, height: currentHeight } = useWindowSize();

  return (
    <div
      id='preview'
      style={{ width: `${currentWidth}px`, height: `${currentHeight}px` }}
    >
      {children}
    </div>
  );
}
