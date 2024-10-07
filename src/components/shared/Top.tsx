interface ITopProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export default function Top({ children }: ITopProps) {
  return (
    <div
      className='w-full md:h-lvh flex flex-col items-center justify-center px-4 sm:px-10 md:px-32 pt-4 sm:pt-20'
      style={{
        height: 'calc(100vh - 140px)',
      }}
    >
      {children}
    </div>
  );
}
