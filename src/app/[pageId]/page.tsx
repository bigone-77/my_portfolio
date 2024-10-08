import { NotionAPI } from 'notion-client';

import NotionContent from '@/components/shared/NotionContent';
import Dimmed from '@/components/shared/Dimmed';

type Props = {
  params: { pageId: string };
};

const notion = new NotionAPI();

export default async function NotionPage({
  params,
}: Props): Promise<JSX.Element> {
  const { pageId } = params;

  if (!pageId) {
    return <div>Error: Invalid page ID</div>;
  }

  const recordMap = await notion.getPage(pageId);
  return (
    <Dimmed goBack>
      <div className='w-full max-w-[calc(100vw-40px)] mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 box-border max-h-[80vh] overflow-y-auto'>
        <NotionContent recordMap={recordMap} />
      </div>
    </Dimmed>
  );
}
