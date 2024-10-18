'use client';

import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { Badge } from '@/components/ui/badge';
import { ProjectsData as Projects } from '@/data/Projects';

export default function PostList() {
  return (
    <div className='w-full'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        // loop={true}
        breakpoints={{
          780: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
      >
        {Projects.map((project, index) => (
          <SwiperSlide key={index} className='flex items-center justify-center'>
            {/* 부모 컨테이너에 고정된 높이 적용 */}
            <div className='w-full h-[570px] sm: rounded-lg p-6 md:p-10 flex-shrink-0 flex flex-col border'>
              <p className='text-xs md:text-sm text-slate-900 font-medium py-2'>
                {project.history}
              </p>
              <div className='flex items-center justify-between'>
                <Badge className='font-semibold text-base md:text-lg py-1 px-2 rounded-xl text-center w-fit'>
                  {project.title}
                </Badge>
                <Link href={`https://github.com/bigone-77/${project.repoName}`}>
                  <svg
                    className='w-8 h-8 hover:-translate-y-2 transition-all cursor-pointer'
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z'
                      fill='currentColor'
                      fillRule='evenodd'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </Link>
              </div>
              <p className='text-xs md:text-sm text-slate-600 font-medium py-2'>
                {`${project.period} (${project.unit === 'SOLO' ? '솔로 프로젝트' : `${project.memberNum}인 프로젝트`})`}
              </p>

              <div className='h-[1px] w-full bg-black my-1' />

              {/* 내용 컨테이너에 overflow-y-auto 적용 */}
              <div className='flex flex-col gap-4 overflow-y-auto'>
                <h1 className='text-base md:text-lg font-semibold'>
                  {project.description}
                </h1>
                <ul className='list-disc pl-3 text-xs md:text-sm'>
                  {project.list.map((l, index) => (
                    <li key={index}>{l}</li>
                  ))}
                </ul>
                <section className='w-full rounded-lg border border-[#FAF7F0] bg-[#FAF7F0] p-2'>
                  {project.stacks.map((stack, index) => (
                    <Badge
                      className='bg-[#D8D2C2] text-[#EB5757] m-[2px]'
                      key={index}
                    >
                      {stack}
                    </Badge>
                  ))}
                </section>
                <div className='flex items-center gap-4'>
                  <Badge className='py-2 px-3 text-white bg-slate-600'>
                    <Link href={`main/${project.notionId}`}>Notion</Link>
                  </Badge>
                  {/* <Badge
                    className='py-2 px-3 text-white bg-slate-600 cursor-pointer'
                    onClick={() =>
                      open({
                        description: (
                          <GitMarkdown repoName={project.repoName} />
                        ),
                        onButtonClick: () => {},
                      })
                    }
                  >
                    README
                  </Badge> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
