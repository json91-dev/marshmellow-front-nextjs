import Script from 'next/script';

type AdsenseTypes = {
  pId: string;
};

export default function ({ pId }: AdsenseTypes) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      crossOrigin={'anonymous'}
      strategy={'lazyOnload'}
    />
  );
}
