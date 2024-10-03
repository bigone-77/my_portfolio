import Top from '@/components/shared/Top';

import { Card, CardContent, CardTitle } from '@/components/ui/card';

import { Skills } from '@/constants/Skills';
import HoverText from '@/components/home/skills/HoverCard';

export default function SkillDiv() {
  return (
    <Top sequence={2} title='Skills' bgColor='#FFF5CD' textColor='#E78F81'>
      <div className='grid grid-cols-2 gap-4'>
        <section className='flex flex-col gap-2'>
          <Card className='p-4'>
            <CardTitle className='mb-2 font-logo'>{Skills[0].name}</CardTitle>
            <CardContent className='grid grid-cols-2 items-center gap-2 p-2'>
              {Skills[0].contents.map((e, idx) => (
                <HoverText
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
          <Card className='p-4'>
            <CardTitle className='mb-2 font-logo'>{Skills[2].name}</CardTitle>
            <CardContent className='grid grid-cols-2 items-center gap-2 p-2'>
              {Skills[2].contents.map((e, idx) => (
                <HoverText
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
        <section className='flex flex-col gap-2 -translate-y-12'>
          <Card className='p-4'>
            <CardTitle className='mb-2 font-logo'>{Skills[1].name}</CardTitle>
            <CardContent className='grid grid-cols-2 items-center gap-2 p-2'>
              {Skills[1].contents.map((e, idx) => (
                <HoverText
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
          <Card className='p-4'>
            <CardTitle className='mb-2 font-logo'>{Skills[3].name}</CardTitle>
            <CardContent className='grid grid-cols-2 items-center gap-2 p-2'>
              {Skills[3].contents.map((e, idx) => (
                <HoverText
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
        {/* <Card
          key={index}
          className={`p-4 ${
            d.contents.length > 6
              ? 'h-[400px]'
              : d.contents.length > 4
                ? 'h-80'
                : d.contents.length > 2
                  ? 'h-60'
                  : 'h-36'
          }`}
        >
          <CardTitle className='mb-2 font-logo'>{d.name}</CardTitle>
          <CardContent className='grid grid-cols-2 items-center gap-2 p-2'>
            {d.contents.map((e, idx) => (
              <HoverText
                key={idx}
                color={e.color}
                imageSrc={e.imageSrc}
                name={e.name}
                description={e.description}
                familier={e.familier}
              />
            ))}
          </CardContent>
        </Card> */}
      </div>
    </Top>
  );
}
