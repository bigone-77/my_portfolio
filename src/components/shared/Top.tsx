interface ITopProps {
  sequence: number;
  title: string;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

export default function Top({
  sequence,
  title,
  children,
  bgColor,
  textColor,
}: ITopProps) {
  return (
    <div
      className='w-screen h-lvh px-32 pt-28 pb-6'
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <p className='font-bold font-logo mb-6 text-3xl text-blue-600'>{`${sequence}. ${title}`}</p>
      {children}
    </