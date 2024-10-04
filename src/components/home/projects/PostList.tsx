'use client';

import Link from 'next/link';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { Badge } from '@/components/ui/badge';
import { useAlertContext } from '@/components/commons/AlertContextProvider';
import GitMarkdown from '@/components/home/projects/GitMarkdown';

export default function PostList() {
  const { open } = useAlertContext();
  return (
    <div className='w-full'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          750: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <div className='w-full h-full rounded-lg p-10 bg-slate-200 flex-shrink-0'>
            <p className='text-sm text-slate-900 font-medium py-2'>
              🥇헥토그룹 - 서경SW아카데미 프로젝트 금상
            </p>
            <Badge className='font-semibold text-lg py-1 px-2 rounded-xl text-center'>
              자유도 (FreeLoad)
            </Badge>
            <p className='text-sm text-slate-600 font-medium py-2'>
              2024.05.03 ~ 2024.06.25 (2인 프로젝트)
            </p>

            <div className='h-[1px] w-full bg-black my-1' />

            <div className='flex flex-col gap-4'>
              <h1 className='text-lg font-semibold'>
                공공데이터를 활용한 고속도로 위 휴게소 정보 서비스
              </h1>
              <ul className='list-disc pl-3 text-sm'>
                <li>한국도로공사 공공데이터를 활용함</li>
                <li>모바일뷰에 적합하다 판단하여 PWA로 구현</li>
                <li>
                  본인 기준 1km이내에 휴게소가 있을 경우 FCM 토큰을 활용한 푸시
                  기능 구현
                </li>
                <li>네이버 CLOVA OCR을 활용한 영주증 인증 기능 구현</li>
                <li>위치기반 API를 활용한 출발지, 도착지 정보 제공</li>
                <li>MSW 도입을 통한 촉진적인 개발</li>
              </ul>
              <Link
                href='https://freeload-fe.vercel.app'
                className='border-l-4 border-l-blue-400 pl-2 text-blue-400 hover:opacity-60 transition-all'
              >
                https://freeload-fe.vercel.app
              </Link>
              <section className='w-full rounded-lg border border-[#7E60BF] bg-[#E4B1F0] p-2'>
                TypeScript, Next.js, Redux-Toolkit, @tanstack/react-query,
                Tailwind CSS, Vercel, MSW, Firebase, ChartJs
              </section>
              <div className='flex items-center gap-4'>
                <Badge className='py-2 px-3 text-white bg-slate-600'>
                  <Link href={'634b99f01ac2450698386853797c3af1'}>Notion</Link>
                </Badge>
                <Badge
                  className='py-2 px-3 text-white bg-slate-600 cursor-pointer'
                  onClick={() =>
                    open({
                      description: <GitMarkdown repoName='olleh_front' />,
                      onButtonClick: () => {},
                    })
                  }
                >
                  README
                </Badge>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full rounded-lg p-8 bg-slate-200 flex-shrink-0'>
            <p className='text-sm text-slate-900 font-medium py-2'>
              🥇헥토그룹 - 서경SW아카데미 프로젝트 금상
            </p>
            <Badge className='font-semibold text-lg py-1 px-2 rounded-xl text-center'>
              자유도 (FreeLoad)
            </Badge>
            <p className='text-sm text-slate-600 font-medium py-2'>
              2024.05.03 ~ 2024.07.25 (2인 프로젝트)
            </p>
            <div className='h-[1px] w-full bg-black my-1' />
            <h1>공공데이터를 활용한 고속도로 위 휴게소 정보 서비스</h1>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full rounded-lg p-8 bg-slate-200 flex-shrink-0'>
            <p className='text-sm text-slate-900 font-medium py-2'>
              🥇헥토그룹 - 서경SW아카데미 프로젝트 금상
            </p>
            <Badge className='font-semibold text-lg py-1 px-2 rounded-xl text-center'>
              자유도 (FreeLoad)
            </Badge>
            <p className='text-sm text-slate-600 font-medium py-2'>
              2024.05.03 ~ 2024.07.25 (2인 프로젝트)
            </p>
            <div className='h-[1px] w-full bg-black my-1' />
            <h1>공공데이터를 활용한 고속도로 위 휴게소 정보 서비스</h1>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full rounded-lg p-8 bg-slate-200 flex-shrink-0'>
            <p className='text-sm text-slate-900 font-medium py-2'>
              🥇헥토그룹 - 서경SW아카데미 프로젝트 금상
            </p>
            <Badge className='font-semibold text-lg py-1 px-2 rounded-xl text-center'>
              자유도 (FreeLoad)
            </Badge>
            <p className='text-sm text-slate-600 font-medium py-2'>
              2024.05.03 ~ 2024.07.25 (2인 프로젝트)
            </p>
            <div className='h-[1px] w-full bg-black my-1' />
            <h1>공공데이터를 활용한 고속도로 위 휴게소 정보 서비스</h1>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full rounded-lg p-8 bg-slate-200 flex-shrink-0'>
            <p className='text-sm text-slate-900 font-medium py-2'>
              🥇헥토그룹 - 서경SW아카데미 프로젝트 금상
            </p>
            <Badge className='font-semibold text-lg py-1 px-2 rounded-xl text-center'>
              자유도 (FreeLoad)
            </Badge>
            <p className='text-sm text-slate-600 font-medium py-2'>
              2024.05.03 ~ 2024.07.25 (2인 프로젝트)
            </p>
            <div className='h-[1px] w-full bg-black my-1' />
            <h1>공공데이터를 활용한 고속도로 위 휴게소 정보 서비스</h1>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
            <p>이번 프로젝트는 말이죠</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
