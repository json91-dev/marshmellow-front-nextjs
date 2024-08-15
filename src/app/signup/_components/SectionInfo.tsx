import styles from './sectionInfo.module.scss';
import React from 'react';
import HorizontalLine from '@/app/signup/_components/HorizontalLine';

type Props = {
  title: string;
};

export default function SectionInfo({ title }: Props) {
  return (
    <div className={styles.sectionInfo}>
      <div>{title}</div>
      <HorizontalLine />
    </div>
  );
}
