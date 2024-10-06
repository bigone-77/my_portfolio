import PostList from '@/components/main/projects/PostList';
import Footer from '@/components/shared/Footer';

import Top from '@/components/shared/Top';

export default function ProjectDiv() {
  return (
    <Top bgColor='#FFFFFF' textColor='black'>
      <p className='text-start font-bold font-logo mb-6 text-3xl text-blue-600'>
        3. Projects
      </p>
      <PostList />
      <div className='md:pt-10'>
      <Footer />
      </div>
    </Top>
  );
}
