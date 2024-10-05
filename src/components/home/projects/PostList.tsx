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
import { ProjectsData as Projects } from '@/data/Projects';

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
          780: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
      >
        {Projects.map((project, index) => (
          <SwiperSlide key={index} className='flex items-center justify-center'>
            {/* 부모 컨테이너에 고정된 높이 적용 */}
            <div className='w-full h-[550px] rounded-lg p-4 md:p-10 bg-slate-200 flex-shrink-0 flex flex-col'>
              <p className='text-sm text-slate-900 font-medium py-2'>
                {project.history}
              </p>
              <Badge className='font-semibold text-lg py-1 px-2 rounded-xl text-center w-fit'>
                {project.title}
              </Badge>
              <p className='text-sm text-slate-600 font-medium py-2'>
                {`${project.period} (${project.unit === 'SOLO' ? '솔로 프로젝트' : `${project.memberNum}인 프로젝트`})`}
              </p>

              <div className='h-[1px] w-full bg-black my-1' />

              {/* 내용 컨테이너에 overflow-y-auto 적용 */}
              <div className='flex flex-col gap-4 overflow-y-auto'>
                <h1 className='text-lg font-semibold'>{project.description}</h1>
                <ul className='list-disc pl-3 text-sm'>
                  {project.list.map((l, index) => (
                    <li key={index}>{l}</li>
                  ))}
                </ul>
                {project.url && (
                  <Link
                    href={project.url}
                    className='border-l-4 border-l-blue-400 pl-2 text-blue-400 hover:opacity-60 transition-all'
                  >
                    {project.url}
                  </Link>
                )}
                <section className='w-full rounded-lg border border-[#7E60BF] bg-[#E4B1F0] p-2'>
                  {project.stacks.map((stack, index) => (
                    <Badge
                      className='bg-gray-300 text-[#EB5757] m-[2px]'
                      key={index}
                    >
                      {stack}
                    </Badge>
                  ))}
                </section>
                <div className='flex items-center gap-4'>
                  <Badge className='py-2 px-3 text-white bg-slate-600'>
                    <Link href={project.notionId}>Notion</Link>
                  </Badge>
                  <Badge
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
                  </Badge>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
