import PostList from '@/components/main/projects/PostList';

import Top from '@/components/shared/Top';

export default function ProjectDiv() {
  return (
    <Top bgColor='#B7B7B7' textColor='black'>
      <p className='text-start font-bold font-logo mb-6 text-3xl text-[#705C53]'>
        3. Projects
      </p>
      <PostList />
    </Top>
  );
}
