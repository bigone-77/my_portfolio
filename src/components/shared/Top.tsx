interface ITopProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export default function Top({ children }: ITopProps) {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center px-10 sm:px-20'>
      {children}
    </div>
  );
}
