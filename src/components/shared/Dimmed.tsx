'use client';

import { useAlertContext } from '@/components/commons/AlertContextProvider';
import { useRouter } from 'next/navigation';

interface IDimmedProps {
  children: React.ReactNode;
  goBack?: boolean;
}

function Dimmed({ children, goBack = false }: IDimmedProps) {
  const router = useRouter();
  const { close } = useAlertContext(); // 컨텍스트에서 `close` 가져오기

  const handleClick = () => {
    if (goBack) {
      router.back();
    } else {
      close();
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
