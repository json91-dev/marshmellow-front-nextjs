'use client';
import style from '@/app/recreation/luckydraw/luckdraw.module.scss';
import React, { PointerEventHandler, useRef, useState } from 'react';
import cx from 'classnames';

export default function LuckDrawCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null!);
  const totalSlides = 5; // 전체 슬라이드 수

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!startX) return;
    const moveX = e.clientX - startX;
    carouselRef.current.style.transform = `translateX(${currentTranslate + moveX}px)`;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!startX) return;
    carouselRef.current.style.transition = 'none';
    setStartX(0);
  };

  const handleNext = () => {
    // if (currentIndex === 0) {
    //   // 첫 번째 페이지에서 이전 페이지로 넘어갈 때
    //   setCurrentIndex(totalSlides - 1); // 마지막 페이지로 이동
    //   setCurrentTranslate(-(totalSlides - 1) * slideWidth); // 마지막 페이지 위치로 돌아가기
    // } else {
    //   setCurrentIndex((prevIndex) => prevIndex - 1);
    // }
  };

  const handlePrev = () => {
    // setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={style.luckyDrawCards}>
      <div
        className={style.carousel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div ref={carouselRef} className={style.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {[...Array(totalSlides)].map((_, index) => (
            <div key={index} className={style.carouselItem}>
              Slide {index + 1}
            </div>
          ))}
        </div>
        <div className={style.carouselDots}>
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={cx(style.dot, index === currentIndex ? style.active : '')}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
