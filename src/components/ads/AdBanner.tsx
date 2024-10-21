'use client';
import React, { useEffect } from 'react';

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

export default function AdBanner({ dataAdSlot, dataAdFormat, dataFullWidthResponsive }: AdBannerTypes) {
  useEffect(() => {
    if (window) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      data-ad-client="ca-pub-6947622361382868"
      style={{ display: 'block' }}
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  );
}