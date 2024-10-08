'use client';

import Image from 'next/image';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useState } from 'react';

interface IHoverCardProps {
  color?: string;
  imageSrc: any;
  name: string;
  description: string;
  familier: '익숙해요' | '써봤어요';
}

export default function HoverText({
  color,
  imageSrc,
  name,
  description,
  familier,
}: IHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard key={name}>
      <div className='relative w-full'>
        {isHovered && (
          <p className='font-logo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none whitespace-nowrap text-center'>
            {familier}
          </p>
        )}
        <HoverCardTrigger
          className='flex flex-wrap flex-col items-center gap-1 p-1 cursor-pointer hover:scale-95 transition-all rounded-lg hover:opacity-30'
          style={{
            border: !color ? '1px solid black' : 'none',
            backgroundColor: color || 'transparent',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={imageSrc}
            alt='alt-image'
            width={40}
            height={40}
            className='w-4 h-4 sm:w-8 sm:h-8'
          />
          <p className='text-xs sm:text-sm text-center font-medium'>{name}</p>
        </HoverCardTrigger>
      </div>
      <HoverCardContent className='font-medium text-sm rounded-xl'>
        {description}
      </HoverCardContent>
    </HoverCard>
  );
}
