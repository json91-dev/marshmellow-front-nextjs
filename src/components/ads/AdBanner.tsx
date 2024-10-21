'use client';
import React, { useEffect, useRef } from 'react';

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive: boolean;
};

export default function AdBanner({ dataAdSlot, dataAdFormat, dataFullWidthResponsive }: AdBannerTypes) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      hasRun.current = true;
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      data-ad-client="ca-pub-6947622361382868"
      style={{ display: 'inline-block', width: '430px', height: '50px' }}
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  );
}
