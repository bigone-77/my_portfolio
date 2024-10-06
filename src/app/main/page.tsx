'use client';

import MainView from '@/components/main';
import FullColMenu from '@/components/shared/header/FullColMenu';
import { useAppSelector } from '@/store/hooks';

export default function MainPage() {
  const toggleOpen = useAppSelector((state) => state.toggleMenu.isOpen);

  return (
    <main className='w-screen h-full'>
      <MainView />
      <nav className='absolute w-full top-20 left-0 right-0'>
        <FullColMenu isOpen={toggleOpen} />
      </nav>
    </main>
  );
}
