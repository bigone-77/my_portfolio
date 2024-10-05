type Content = {
  name: string;
  imageSrc: any;
  color?: string;
  description: string;
  familier: '익숙해요' | '써봤어요';
};

export interface ISkillsProps {
  name: string;
  contents: Content[];
}
