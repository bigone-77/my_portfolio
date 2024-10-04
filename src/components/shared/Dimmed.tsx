'use client';

import { useRouter } from 'next/navigation';

interface IDimmedProps {
  children: React.ReactNode;
  goBack?: boolean;
}

function Dimmed({ children, goBack = false }: IDimmedProps) {
  const router = useRouter();

  const handleClick = () => {
    if (goBack) {
      router.back();
    }
  };

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-70 z-10'
      onClick={handleClick}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}

export default Dimmed;
