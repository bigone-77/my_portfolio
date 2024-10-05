'use client';

import { useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { getReadme } from '@/lib/readme';

import { useAlertContext } from '@/components/commons/AlertContextProvider';
import Loader from '@/components/shared/Loader';

export default function GitMarkdown({ repoName }: { repoName: string }) {
  const { close } = useAlertContext();
  const [readme, setReadme] = useState('');

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const data = await getReadme({ repoName });
        const decodedContent = decodeURIComponent(escape(atob(data.content)));
        setReadme(decodedContent);
      } catch (error) {
        console.error('Error fetching README:', error);
      }
    };

    fetchReadme();
  }, [repoName]);

  if (!readme) {
    return <Loader />;
  }

  return (
    <div className='relative'>
      {/* 닫기버튼: 최상위 요소에 배치 */}
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='fixed top-4 right-4 w-5 h-5 cursor-pointer z-50'
        onClick={() => close()}
      >
        <path
          d='M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z'
          fill='currentColor'
          fillRule='evenodd'
          clipRule='evenodd'
        ></path>
      </svg>

      <div className='prose max-w-none p-4 overflow-y-auto max-h-[80vh] scrollbar-hide'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
      </div>
    </div>
  );
}
