import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import 'react-notion-x/src/styles.css';
import { AlertContextProvider } from '@/components/commons/AlertContextProvider';
import { ReduxProvider } from '@/components/commons/ReduxProvider';
import Header from '@/components/shared/header';

const logoFont = localFont({
  src: './fonts/런드리고딕 Regular.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-logo',
});

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '신태일 | 프론트엔드 개발자',
  description: '안주하지 않는 개발자, 신태일입니다.',
  openGraph: {
    images: [
      {
        url: '/profile.jpg',
        alt: '이미지 설명',
      },
    ],
  },
  twitter: {
    images: [
      {
        url: '/profile.jpg',
        alt: '이미지 설명',
      },
    ],
  },
  verification: {
    other: {
      'naver-site-verification': 'cf512c84a17bf57fb05f3452cbc732a7f508612f',
    },
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body
        className={`${pretendard.variable} ${logoFont.variable} font-pretendard m-0 h-lvh w-screen flex`}
      >
        <ReduxProvider>
          <AlertContextProvider>
            <Header />
            {children}
            {modal}
            <div id='root-portal' />
          </AlertContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
