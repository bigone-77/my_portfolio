import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import FlipCard from '@/components/home/FlipCard';

import SWSrc from '@awards/sw.png';
import PCCPSrc from '@awards/pccp.png';
import LionSrc from '@awards/LionSrc.jpg';

export default function ScrollSection() {
  return (
    <>
      <Card className='w-full cursor-pointer hover:scale-95 transition-all bg-[#ECDFCC]'>
        <CardHeader>
          <CardTitle className='font-logo text-lg md:text-xl'>
            ⏳ 저는 이런 활동들을 했어요
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='list-disc pl-3 text-xs md:text-sm space-y-2'>
            <li>
              서경대학교 소프트웨어학과
              <br />
              (19년도 입학 ~ 2025 2월 졸업 예정)
            </li>
            <li>
              UMC 5기 프론트엔드 수료
              <br />
              (23.09.12 ~ 24.02.25)
            </li>
            <li>
              서경SW인재양성 교육 수료
              <br />
              (24.02.14 ~ 24.06.26)
            </li>
            <li>
              goorm x goormthon UNIV. 3기 프론트엔드
              <br />
              (24.07.23 ~)
            </li>
          </ul>
        </CardContent>
      </Card>
      <FlipCard
        images={[
          { imgSrc: SWSrc, description: '서경SW 헥토 금상' },
          { imgSrc: PCCPSrc, description: 'PCCP 대비 교육 수료증' },
          { imgSrc: LionSrc, description: '멋쟁이사자 해커톤 우수상' },
        ]}
      />
      <Link
        href='/main'
        className='col-span-2 underline underline-offset-8 hover:opacity-80 cursor-pointer transition-all text-white text-lg text-center'
      >
        👉About Me
      </Link>
      <div className='h-20'></div>
    </>
  );
}
