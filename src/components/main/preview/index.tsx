import Animate from '@/components/home/Animate';

export default function PreviewDiv() {
  return (
    <div className='relative w-full h-lvh grid place-items-center'>
      <div className='absolute inset-0 bg-profileBackgroundImage bg-cover bg-no-repeat bg-center w-full h-full before:content-[""] before:absolute before:inset-0 before:bg-black/50' />
      <Animate />
    </div>
  );
}
