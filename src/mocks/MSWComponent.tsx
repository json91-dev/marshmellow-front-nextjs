'use client';

import { useEffect, useState } from 'react';
export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [mswInit, setMswInit] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const init = async () => {
        const initMsw = await import('./index').then((res) => res.initMsw);
        await initMsw();
        setMswInit(true);
      };

      if (!mswInit) {
        init();
      }
    }
  }, []);

  if (!mswInit) {
    return null;
  }

  return <>{children}</>;
};
