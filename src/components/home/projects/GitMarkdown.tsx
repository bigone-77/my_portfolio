'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getReadme } from '@/lib/readme';
import 'github-markdown-css';

export default function GitMarkdown({ repoName }: { repoName: string }) {
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

  return (
    <div className='markdown-body'>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
    </div>
  );
}
