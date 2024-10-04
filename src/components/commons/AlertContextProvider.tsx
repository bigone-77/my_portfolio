'use client';

import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import Alert from '@/components/shared/Alert';

type AlertProps = ComponentProps<typeof Alert>;
type AlertOptions = Omit<AlertProps, 'open'>;

interface AlertContextValue {
  open: (options: AlertOptions) => void;
}

const Context = createContext<AlertContextValue | undefined>(undefined);

const defaultValues: AlertProps = {
  open: false,
  description: null,
  onButtonClick: () => {},
};

export function AlertContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [alertState, setAlertState] = useState(defaultValues);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // 포털 루트를 클라이언트 측에서 설정
    const $portal_root = document.getElementById('root-portal');
    setPortalRoot($portal_root);
  }, []);

  const close = useCallback(() => {
    setAlertState(defaultValues);
  }, []);

  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        onButtonClick: () => {
          close();
          onButtonClick();
        },
        open: true,
      });
    },
    [close],
  );

  const values = useMemo(() => ({ open }), [open]);

  return (
    <Context.Provider value={values}>
      {children}
      {portalRoot !== null
        ? createPortal(<Alert {...alertState} />, portalRoot)
        : null}
    </Context.Provider>
  );
}

export function useAlertContext() {
  const values = useContext(Context);

  if (!values) {
    throw new Error('AlertContext 내부에서 사용해주세요');
  }
  return values;
}
