export type Project = {
  history?: string;
  title: string;
  period: string;
  unit: 'SOLO' | 'TEAM';
  memberNum: number;
  description: string;
  list: string[];
  url?: string;
  stacks: string[];
  notionId: string;
  repoName: string;
};
