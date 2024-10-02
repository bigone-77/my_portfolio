import Animate from '@/components/home/preview/Animate';

export default function PreviewDiv() {
  return (
    <div className='relative w-screen h-lvh grid place-items-center'>
      <div className='absolute inset-0 bg-profileBackgroundImage bg-cover bg-no-repeat bg-center w-full h-full before:content-[""] before:absolute before:inset-0 before:bg-black/50'></div>
      <div className='relative z-10'>
        <Animate />
      </div>
    </div>
  );
}
