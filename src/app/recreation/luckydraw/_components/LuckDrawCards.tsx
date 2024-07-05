'use client';
import style from '@/app/recreation/luckydraw/luckdraw.module.scss';
import React, { PointerEventHandler, useEffect, useLayoutEffect, useRef, useState } from 'react';
import cx from 'classnames';

export default function LuckDrawCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null!);
  const carouselItemWidthRef = useRef<number>(null!);

  const totalSlides = 5; // 전체 슬라이드 수

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
    setCurrentTranslate(-currentIndex * 100); // 현재 변환 값을 백분율로 저장
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startX === 0) return;
    const moveX = e.clientX - startX;
    carouselRef.current.style.transform = `translateX(${currentTranslate + (moveX / carouselItemWidthRef.current) * 100}%)`;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startX === 0) return;
    const moveX = e.clientX - startX;
    const threshold = carouselItemWidthRef.current / 4; // 임계값을 필요에 따라 조정합니다

    if (moveX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // 이전 슬라이드로 이동
    } else if (moveX < -threshold && currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1); // 다음 슬라이드로 이동
    } else {
      // 현재 슬라이드로 리셋
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // 스타일과 상태를 리셋
    setStartX(0);
    setCurrentTranslate(0);
    carouselRef.current.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
      carouselRef.current.style.transition = ''; // 전환이 완료된 후 전환을 제거합니다
    }, 300);
  };

  useLayoutEffect(() => {
    carouselItemWidthRef.current = carouselRef.current.children[0].clientWidth;
    console.log(carouselItemWidthRef.current);
  }, []);

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

  useEffect(() => {}, []);

  return (
    <div
      className={style.luckyDrawCards}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div className={style.carouselContainer}>
        <div ref={carouselRef} className={style.carousel} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
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
