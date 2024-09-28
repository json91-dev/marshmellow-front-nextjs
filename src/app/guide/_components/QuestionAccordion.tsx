'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './accordiaon.module.scss';

type props = {
  title: string;
  children: React.ReactNode;
  isOpened: boolean; // 열림 상태
  onToggle: () => void; // 열림 상태 변경 함수
};

const QuestionAccordion = ({ title, children, isOpened, onToggle }: props) => {
  const accordionContentRef = useRef<HTMLDivElement>(null!);
  const accordionToggleRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (isOpened) {
      accordionContentRef.current.classList.add(styles.active);
      accordionToggleRef.current.classList.add(styles.active);
    } else {
      accordionContentRef.current.classList.remove(styles.active);
      accordionToggleRef.current.classList.remove(styles.active);
    }
  }, [isOpened]);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionToggle} ref={accordionToggleRef} onClick={onToggle}>
        <p>{title}</p>
        <Image src={'/images/arrow.bottom.svg'} width={24} height={24} alt="No Image" />
      </div>
      <div className={styles.accordionContent} ref={accordionContentRef}>
        {children}
      </div>
    </div>
  );
};

export default QuestionAccordion;
