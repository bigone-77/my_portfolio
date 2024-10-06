import Loader from '@/components/shared/Loader';

export default function Loading() {
  return (
    <div className='w-screen h-lvh grid grid-cols-1 place-items-center'>
      <Loader />
    </div>
  );
}
