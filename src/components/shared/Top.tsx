interface ITopProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export default function Top({ children, bgColor, textColor }: ITopProps) {
  return (
    <div
      className='w-screen h-lvh flex flex-col items-center justify-center px-4 sm:px-10 md:px-32 pt-4'
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </div>
  );
}
