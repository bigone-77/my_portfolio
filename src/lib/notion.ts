import { NotionAPI } from 'notion-client';

import { TOKEN } from '@/config/notion';

export const notion = new NotionAPI({
  authToken: TOKEN,
});
