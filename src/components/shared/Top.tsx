interface ITopProps {
  title: string;
  children: React.ReactNode;
}

export default function Top({ title, children }: ITopProps) {
  return (
    <div className='w-screen h-lvh px-32 pt-10'>
      <p className='font-bold font-logo mb-6 text-3xl text-blue-600'>{title}</p>
      {children}
    </div>
  );
}
