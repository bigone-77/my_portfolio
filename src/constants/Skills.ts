import JsSrc from '@logo/javascript.svg';
import TsSrc from '@logo/typescript.svg';

import PostgreSrc from '@logo/postgresql.svg';
import DockerSrc from '@logo/docker.svg';
import S3Src from '@logo/amazons3.svg';
import VercelSrc from '@logo/vercel.svg';
import MongoSrc from '@logo/mongodb.svg';

import NextSrc from '@logo/nextdotjs.svg';
import ReactSrc from '@logo/react.svg';
import TailSrc from '@logo/tailwindcss.svg';
import TanSrc from '@logo/reactquery.svg';
import ReduxSrc from '@logo/redux.svg';
import StorySrc from '@logo/storybook.svg';
import PWASrc from '@logo/pwa.svg';
import MSWSrc from '@logo/msw.svg';

import GitSrc from '@logo/github.svg';
import SwitSrc from '@logo/swit.svg';
import DiscordSrc from '@logo/discord.svg';
import NotionSrc from '@logo/notion.svg';

type Content = {
  name: string;
  imageSrc: any;
  color?: string;
  description: string;
  familier: '익숙해요' | '써봤어요';
};

interface ISkillsProps {
  name: string;
  contents: Content[];
}

export const Skills: ISkillsProps[] = [
  {
    name: 'Language',
    contents: [
      {
        name: 'JavaScript',
        imageSrc: JsSrc,
        color: '#F7DF1E',
        description:
          'ES6+ 문법을 활용하여 코드를 작성할 수 있습니다.\n최근에는 Semantic 태그를 적극 활용 중입니다.',
        familier: '익숙해요',
      },
      {
        name: 'TypeScript',
        imageSrc: TsSrc,
        color: '#3178C6',
        description:
          '인터페이스 및 타입 설정으로 프론트 구조를 설정할때 효과적이라 생각합니다, 코드의 가독성과 유지 보수성을 향상시킬수 있었습니다.',
        familier: '익숙해요',
      },
    ],
  },

  {
    name: 'BackEnd & DB',
    contents: [
      {
        name: 'PostgreSQL',
        imageSrc: PostgreSrc,
        color: '#4169E1',
        description:
          '관계형 데이터베이스로, SQL 문법을 사용해 데이터를 효율적으로 관리합니다.\n솔로 프로젝트할 때 Next Auth를 사용할때 데이터 저장 및 확인에 용이했습니다.',
        familier: '써봤어요',
      },
      {
        name: 'Docker',
        imageSrc: DockerSrc,
        color: '#2496ED',
        description:
          '애플리케이션을 컨테이너로 묶어 이식성을 높입니다.\n주로 PostgreSQL을 실행할때 유용함을 느꼈습니다.',
        familier: '써봤어요',
      },
      {
        name: 'AWS S3',
        imageSrc: S3Src,
        color: '#569A31',
        description:
          '리액트 프로젝트를 정적 빌드하여 배포하고 이미지 저장소로 사용한 경험이 있습니다.(CRUD)',
        familier: '써봤어요',
      },
      {
        name: 'Vercel',
        imageSrc: VercelSrc,
        description:
          '배포 네트워킹이 간편하고, 특히 SSR을 지원해준다는 점에서 Next 프로젝트 배포할때 수월했었습니다.',
        familier: '익숙해요',
      },
      {
        name: 'MongoDB',
        imageSrc: MongoSrc,
        color: '#47A248',
        description:
          'NoSQL 데이터베이스로, 유연한 스키마를 통해 대규모 데이터를 관리할 수 있습니다.\n솔로 프로젝트 당시 채팅방 구현해본적이 있습니다.',
        familier: '써봤어요',
      },
    ],
  },
  {
    name: 'FrontEnd',
    contents: [
      {
        name: 'NextJS',
        imageSrc: NextSrc,
        description:
          '상황별로 SSR, CSR 화면을 구현할 수 있고, Next에서 지원해주는 라우팅을 이해하고 있습니다\n상황별 메타 데이터를 생성하여 검색 엔진 최적화에도 신경쓴 바 있습니다.',
        familier: '익숙해요',
      },
      {
        name: 'React',
        imageSrc: ReactSrc,
        color: '#61DAFB',
        description:
          '리액트에서 제공해주는 에러 및 로딩 처리를 할 수 있습니다\nNextJs에서의 미들웨어 기능을 HOC 훅을 붙힘으로써 프론트에서의 예외처리도 진행한 적이 있습니다.',
        familier: '익숙해요',
      },
      {
        name: 'TailwindCSS',
        imageSrc: TailSrc,
        color: '#06B6D4',
        description:
          '저만의 디자인 시스템을 가져갈 수 있습니다.\n shadcn/ui와 함께 사용하여 편리하게 공통 컴포넌트를 사용할 수 있습니다.',
        familier: '익숙해요',
      },
      {
        name: 'TanstackQuery',
        imageSrc: TanSrc,
        color: '#FF4154',
        description:
          '서버 통신을 정해진 규칙에 따라 키로 분리하여 API를 효과적으로 다룰 수 있습니다\n또한 Suspense, Hydration을 사용하여 UX 구성에도 쉽게 가져갈 수 있었습니다.',
        familier: '익숙해요',
      },
      {
        name: 'Redux Toolkit',
        imageSrc: ReduxSrc,
        color: '#764ABC',
        description:
          '즐겨쓰는 전역상태 라이브러리입니다.\nRedux DevTool과 함께 사용하여 콘솔에 찍는거 없이도 개발환경에서 실시간 확인이 가능합니다.',
        familier: '익숙해요',
      },
      {
        name: 'StoryBook',
        imageSrc: StorySrc,
        color: '#FF4785',
        description:
          '멀티레포로 한 프로젝트를 구성할 때 사용했습니다\n개발자가 아닌 기획자, 디자이너와 협업할 때 좋았고 접근성과 상호작용 테스트, npm 배포해본 경험이 있습니다.',
        familier: '써봤어요',
      },
      {
        name: 'PWA',
        imageSrc: PWASrc,
        color: '#5A0FC8',
        description:
          '웹 앱을 모바일 기기처럼 사용할 수 있습니다\n fcm토큰과 함께 사용하여 푸시 기능을 구현한 적이 있습니다.',
        familier: '써봤어요',
      },
      {
        name: 'MSW',
        imageSrc: MSWSrc,
        description:
          '백엔드에서 API개발을 마치지 못했을때, 쉽게 테스트해본적이 있습니다\n 또한 API 명세서를 미리 건네서 개발 기간을 단축했습니다.',
        familier: '써봤어요',
      },
    ],
  },
  {
    name: 'ETC',
    contents: [
      {
        name: 'Github',
        imageSrc: GitSrc,
        description:
          '소스 코드를 버전별로 관리하고 커밋 내용을 바탕으로 태스크 스케줄링을 가져갔습니다\n브랜치 전략으로 CI/CD를 원하는대로 가져갈수 있었습니다. ',
        familier: '익숙해요',
      },
      {
        name: 'Swit',
        imageSrc: SwitSrc,
        description:
          '하나의 플랫폼 안에서 팀원들과 커뮤니케이션과 태스크 관리를 수행할 수 있었습니다.',
        familier: '써봤어요',
      },
      {
        name: 'Discord',
        imageSrc: DiscordSrc,
        color: '#5865F2',
        description:
          '실시간 채팅 및 음성 통화를 지원하는 커뮤니케이션 플랫폼으로, 팀원 간의 소통과 협업에 사용됩니다.',
        familier: '익숙해요',
      },
      {
        name: 'Notion',
        imageSrc: NotionSrc,
        description:
          '프로젝트 일정 관리를 공유하거나, 학습 기록을 남길수 있습니다',
        familier: '익숙해요',
      },
    ],
  },
];
