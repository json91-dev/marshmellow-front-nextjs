'use client';

import React, { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import style from './accordiaon.module.scss';

type props = {
  title: string;
  children: React.ReactNode;
};

const DropDown = ({ title, children }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionContentRef = useRef<HTMLDivElement>(null!);
  const accordionToggleRef = useRef<HTMLDivElement>(null!);
  const isOpenedAccordion = useRef<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClickAccordionToggle = useCallback(() => {
    if (!isOpenedAccordion.current) {
      accordionContentRef.current.classList.add(style.active);
      accordionToggleRef.current.classList.add(style.active);
      isOpenedAccordion.current = true;
    } else {
      accordionContentRef.current.classList.remove(style.active);
      accordionToggleRef.current.classList.remove(style.active);
      isOpenedAccordion.current = false;
    }
  }, []);

  return (
    <div className={style.accordion}>
      <div className={style.accordionToggle} ref={accordionToggleRef} onClick={onClickAccordionToggle}>
        <p>{title}</p>
        <Image src={'/images/arrow.bottom.svg'} width={24} height={24} alt="No Image" />
      </div>
      <div className={style.accordionContent} ref={accordionContentRef}>
        {children}
      </div>
    </div>
  );
};

export default DropDown;
