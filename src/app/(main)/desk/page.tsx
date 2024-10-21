'use client';
import styles from './page.module.scss';
import NameCard from '@/app/(main)/desk/_components/namecard/NameCard';
import React from 'react';
import Options from '@/app/(main)/desk/_components/Options';
import TicketLinks from '@/app/(main)/desk/_components/TickekLinks';
import PageLinks from '@/app/(main)/desk/_components/PageLinks';
import AdBanner from '@/components/ads/AdBanner';

export default function DeskPage() {
  return (
    <div className={styles.deskPage}>
      <div className={styles.option}>
        <Options />
      </div>
      <div className={styles.main}>
        <NameCard />
        <TicketLinks />
        <div className={styles.banner2}>
          <AdBanner dataAdSlot={'3341770865'} dataAdFormat={'auto'} dataFullWidthResponsive={true} />
        </div>
        <PageLinks />
      </div>
    </div>
  );
}
