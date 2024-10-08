import { Project } from '@/models/projects';

export const ProjectsData: Project[] = [
  {
    history: '🥇 헥토그룹 - 서경SW아카데미 프로젝트 금상',
    title: '자유도 (FreeLoad)',
    period: '2024.05.03 ~ 2024.06.25',
    unit: 'TEAM',
    memberNum: 2,
    description: '공공데이터를 활용한 고속도로 위 휴게소 정보 서비스',
    list: [
      '한국도로공사 공공데이터를 활용함',
      '모바일뷰에 적합하다 판단하여 PWA로 구현',
      '본인 기준 1km이내에 휴게소가 있을 경우 FCM 토큰을 활용한 푸시 기능 구현',
      '네이버 CLOVA OCR을 활용한 영주증 인증 기능 구현',
      '위치기반 API를 활용한 출발지, 도착지 정보 제공',
      'MSW 도입을 통한 탄력적 개발',
    ],
    url: 'https://freeload-fe.vercel.app',
    stacks: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Redux-Toolkit',
      '@tanstack/react-query',
      'MSW',
      'Firebase',
      'ChartJs',
    ],
    notionId: '116ba946abd8806f80f0ce6f7c3c80dd',
    repoName: 'freeload-fe',
  },
  {
    history: '🏆 멋쟁이사자처럼 중앙해커톤 12기 우수상',
    title: 'LIVFIT',
    period: ' 2024.07.26 ~ 2024.08.07',
    unit: 'TEAM',
    memberNum: 6,
    description: 'Media Pipe 기반 사용자 운동 자세 측정 서비스',
    list: [
      '프론트 전반적인 구조설계 담당',
      '프론트 전체적인 레이아웃 UI 퍼블리싱',
      'Media Pipe sdk를 사용한 포즈 측정 로직 구현',
      '거북목 자세 및 운동 측정 로직 구현 측정 구현',
      'Redux Toolkit 활용한 필터 기능 및 운동 기록결과 도출 구현',
      'ChartJS를 활용한 그래프 시각화 구현',
    ],
    url: 'https://www.livfit.xyz',
    stacks: [
      'Vite',
      'Javascript',
      'Tailwind CSS',
      'Vercel',
      'Redux-Toolkit',
      '@tanstack/react-query',
      'ChartJs',
    ],
    notionId: '118ba946abd8800c8d38c411b53e4f5a',
    repoName: 'livfit-fe',
  },
  {
    history: '👨‍🏫 UMC 5기 데모데이 작품',
    title: '올래',
    period: '2024.01.08 ~ 2024.02.25',
    unit: 'TEAM',
    memberNum: 8,
    description: '시니어를 위한 교육 매칭 웹 서비스',
    list: [
      '프론트 전체적인 구조설계 담당',
      '프론트 Lead 담당',
      'Redux Toolkit & RTK Query 활용한 API 캐싱 및 페이지네이션 구현',
      'Redux Persist 활용하여 쿠키 및 세션 데이터 활용',
      'React-Hook-Form & yup 활용하여 효과적으로 폼 구현',
    ],
    // url: 'https://freeload-fe.vercel.app',
    stacks: [
      'CRA',
      'TypeScript',
      'Tailwind CSS',
      'Redux-Toolkit',
      'Redux-Persist',
      'React-Hook-Form',
    ],
    notionId: '116ba946abd8800da02dd94fa13195b1',
    repoName: 'olleh_front',
  },
  {
    history: '💻 개인 포트폴리오',
    title: `Bigone's portfolio`,
    period: '2024.09.27 ~',
    unit: 'SOLO',
    memberNum: 1,
    description: 'Notion, Github API를 활용한 개인 포트폴리오',
    list: [
      'Swiper를 활용하여 FullPage로 구성',
      'Shadcn/ui 공통 컴포넌트 활용',
      '모바일, 데스크톱 반응형으로 구현',
    ],
    url: 'https://portfolio-cyan-eight-79.vercel.app/',
    stacks: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Framer-motion',
      'Swiper',
    ],
    notionId: '118ba946abd88041a53aef7d47239ce3',
    repoName: 'my_portfolio',
  },
];
