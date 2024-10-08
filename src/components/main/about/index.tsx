import Image from 'next/image';

import ProfileImage from '@/../public/profile.jpg';

import Top from '@/components/shared/Top';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AboutDiv() {
  return (
    <Top>
      <div className='max-w-5xl mx-auto flex-wrap flex flex-col px-4 h-full'>
        <p className='text-center font-bold font-logo text-3xl md:mb-6 md:text-4xl text-blue-600'>
          1. About
        </p>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='md:col-span-1 place-items-start flex md:flex-col items-center justify-between gap-2'>
            <Image
              src={ProfileImage}
              alt='profile'
              width={200}
              height={300}
              priority
              className='rounded-lg w-32 h-40 md:w-[200px] md:h-[300px]'
            />
            <div>
              <p className='my-4 font-bold text-2xl md:text-3xl'>신태일</p>
              {['긍정적', '침착함', '자신감'].map((keyword, index) => (
                <Badge className='bg-blue-600 mr-2' key={index}>
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
          <div className='col-span-2'>
            <Card className='w-full cursor-pointer hover:scale-105 transition-all break-words'>
              <CardHeader>
                <CardTitle className='font-logo text-xl md:text-2xl'>
                  <span className='flex'>
                    내가{' '}
                    <p className='font-bold text-blue-600 ml-1'>프론트엔드</p>를
                    선택한 이유
                  </span>
                </CardTitle>
                <CardDescription className='line-through'>
                  재밌어서!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-sm md:text-base break-words'>
                  UI를 통해 사용자와 직접 소통하며 그들의 피드백을 반영하는
                  과정이 저에게 큰 동기부여가 되었습니다. 프론트엔드 개발은
                  단순한 기능 구현을 넘어 사용자와의 끊임없는 소통을 통해 발전해
                  나가는 분야라는 점에서 매력을 느끼고 계속 빠져드는중입니다!
                </p>
              </CardContent>
            </Card>
            <Card className='w-full cursor-pointer hover:scale-105 transition-all mt-4 break-words'>
              <CardHeader>
                <CardTitle className='font-logo text-xl md:text-2xl'>
                  일에 관해서 가장 중요하게 여기는 부분
                </CardTitle>
                <CardDescription className='line-through'>
                  중요하지 않은 것은 없다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-sm md:text-base break-words'>
                  같은 분야든 다른 분야든 가장 중요한 것은{' '}
                  <span className='font-bold text-blue-600'>소통</span>이라고
                  생각합니다. 서로의 의견을 공유하고 취합해야 정해진 시간 안에
                  만족스러운 결과물로 이어지기 때문입니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Top>
  );
}
