import style from './sectionInfo.module.scss';
import React from 'react';
import HorizontalLine from '@/app/(beforeLogin)/signup/_components/HorizontalLine';

type Props = {
  title: string;
};

export default function SectionInfo({ title }: Props) {
  return (
    <div className={style.sectionInfo}>
      <div>{title}</div>
      <HorizontalLine />
    </div>
  );
}
