import Top from '@/components/shared/Top';

import { Card, CardContent, CardTitle } from '@/components/ui/card';

import { Skills } from '@/constants/Skills';
import HoverText from '@/components/home/skills/HoverCard';

export default function SkillDiv() {
  return (
    <Top sequence={2} title='Skills' bgColor='#FFF5CD' textColor='#E78F81'>
      <div className='grid grid-cols-2 row-span-6 gap-4'>
        {Skills.map((d, index) => (
          <Card
            key={index}
            className={`p-4 ${d.contents.length > 4 ? 'max-h-96 row-span-5' : d.contents.length > 2 ? 'max-h-60' : 'max-h-36'}`}
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
          </Card>
        ))}
      </div>
    </Top>
  );
}
