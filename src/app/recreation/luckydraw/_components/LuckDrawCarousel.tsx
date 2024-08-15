'use client';
// import styles from '@/app/recreation/luckydraw/luckdraw.module.scss';
import styles from './luckydrawCarousel.module.scss';
import React, { PointerEventHandler, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { dummyLuckyDrawCardsData, LuckyDrawCard } from '@/constraints';
import Image from 'next/image';
import { isMobile } from '@/utils/utils';
import useModalStore from '@/store/modalStore';

export default function LuckDrawCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null!);
  const carouselItemWidthRef = useRef<number>(null!);
  const luckyDrawCardsRef = useRef<HTMLDivElement>(null!);
  const totalSlides = 6; // 전체 슬라이드 수

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
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      ref={luckyDrawCardsRef}
      className={styles.luckyDrawCards}
      onPointerLeave={isMobile.any() ? () => {} : handlePointerUp}
    >
      <div className={styles.carouselContainer}>
        <div ref={carouselRef} className={styles.carousel} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {dummyLuckyDrawCardsData.map((cardsItem, index) => (
            <div className={styles.carouselItem} key={cardsItem[index].id}>
              <LuckyDrawCards
                cardsItem={cardsItem}
                handlePointerDown={handlePointerDown}
                handlePointerMove={handlePointerMove}
                handlePointerUp={handlePointerUp}
              />
            </div>
          ))}
        </div>
        <div className={styles.carouselDots}>
          {[...Array(dummyLuckyDrawCardsData.length)].map((_, index) => (
            <span
              key={index}
              className={cx(styles.dot, index === currentIndex ? styles.active : '')}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

type LuckyDrawCardsPropsType = {
  cardsItem: LuckyDrawCard[];
  handlePointerDown: any;
  handlePointerMove: any;
  handlePointerUp: any;
};

function LuckyDrawCards({ cardsItem, handlePointerDown, handlePointerMove, handlePointerUp }: LuckyDrawCardsPropsType) {
  const { showLuckyDrawErrorModal, showLuckyDrawPickUpModal, showFeverGuideModal, setLuckyDrawWinningCheckType } =
    useModalStore();

  const onDrawCardClick = useCallback((isOdd: boolean) => {
    // showLuckyDrawErrorModal(true, 'DRAW_COUNT_EXCEED');
    isOdd ? setLuckyDrawWinningCheckType('VIOLET') : setLuckyDrawWinningCheckType('PURPLE');
    showLuckyDrawPickUpModal(true);
  }, []);

  return (
    <div
      className={styles.drawCards}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {cardsItem.map((item) => {
        if (item.status === 'default') {
          const isOdd = Math.floor((item.id - 1) / 5) % 2 === 1;

          return (
            <div
              className={styles.cardItem}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              key={item.id}
            >
              {isOdd && (
                <Image
                  onClick={() => onDrawCardClick(isOdd)}
                  src="/images/luckydraw.card.violet.png"
                  alt="No Image"
                  width={56}
                  height={56}
                />
              )}
              {!isOdd && (
                <Image
                  onClick={() => onDrawCardClick(isOdd)}
                  src="/images/luckydraw.card.purple.png"
                  alt="No Image"
                  width={56}
                  height={56}
                />
              )}
            </div>
          );
        }
      })}
    </div>
  );
}
