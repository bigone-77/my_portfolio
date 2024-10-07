import Top from '@/components/shared/Top';

import { Card, CardContent, CardTitle } from '@/components/ui/card';

import { SkillsData as Skills } from '@/data/Skills';
import HoverCard from '@/components/main/skills/HoverCard';

export default function SkillDiv() {
  return (
    <Top>
      <p className='text-start font-bold font-logo mb-6 text-3xl text-zinc-600'>
        2. Skills
      </p>
      <div className='grid grid-cols-2 gap-4'>
        <section className='flex flex-col gap-2'>
          <Card className='p-4 bg-[#FFF5CD]'>
            <CardTitle className='mb-2 text-sm md:text-base font-logo'>
              {Skills[0].name}
            </CardTitle>
            <CardContent className='grid grid-cols-2 items-center gap-2 p-2'>
              {Skills[0].contents.map((e, idx) => (
                <HoverCard
                  key={idx}
                  color={e.color}
                  imageSrc={e.imageSrc}
                  name={e.name}
                  description={e.description}
                  familier={e.familier}
                />
              ))}
            </CardContent>
          </Card>
          <Card className='p-4 bg-[#FFF5CD]'>
            <CardTitle className='mb-2 text-sm md:text-base font-logo'>
              {Skills[2].name}
            </CardTitle>
            <CardContent className='grid grid-cols-2 items-center gap-2 p-2'>
              {Skills[2].contents.map((e, idx) => (
                <HoverCard
                  key={idx}
                  color={e.color}
                  imageSrc={e.imageSrc}
                  name={e.name}
                  description={e.description}
                  familier={e.familier}
                />
              ))}
            </CardContent>
          </Card>
        </section>
        <section className='flex flex-col gap-2'>
          <Card className='p-4 bg-[#FFF5CD]'>
            <CardTitle className='mb-2 font-logo text-sm md:text-base'>
              {Skills[1].name}
            </CardTitle>
            <CardContent className='grid grid-cols-2 items-center gap-2 p-2'>
              {Skills[1].contents.map((e, idx) => (
                <HoverCard
                  key={idx}
                  color={e.color}
                  imageSrc={e.imageSrc}
                  name={e.name}
                  description={e.description}
                  familier={e.familier}
                />
              ))}
            </CardContent>
          </Card>
          <Card className='p-4 bg-[#FFF5CD]'>
            <CardTitle className='mb-2 font-logo text-sm md:text-base'>
              {Skills[3].name}
            </CardTitle>
            <CardContent className='grid grid-cols-2 items-center gap-2 p-2'>
              {Skills[3].contents.map((e, idx) => (
                <HoverCard
                  key={idx}
                  color={e.color}
                  imageSrc={e.imageSrc}
                  name={e.name}
                  description={e.description}
                  familier={e.familier}
                />
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </Top>
  );
}
