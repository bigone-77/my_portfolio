interface ITopProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export default function Top({ children }: ITopProps) {
  return (
    <div className='w-full h-screen grid grid-cols-1 place-items-center mt-[10%] px-10 sm:px-20'>
      {children}
    </div>
  );
}
