'use client';

import Dimmed from './Dimmed';

interface AlertProps {
  open?: boolean;
  description: React.ReactNode;
  buttonLabel?: string;
  onButtonClick: () => void;
}

function Alert({
  open,
  description,
  buttonLabel = '확인',
  onButtonClick,
}: AlertProps) {
  if (open === false) {
    return null;
  }

  return (
    <Dimmed>
      <div className='w-full max-w-[calc(100vw-40px)] mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 box-border max-h-[80vh] overflow-y-auto'>
        {description}
        <div className='mt-4 hidden'>
          <button onClick={onButtonClick}>{buttonLabel}</button>
        </div>
      </div>
    </Dimmed>
  );
}

export default Alert;
