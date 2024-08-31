'use client';
import styles from './luckydrawCarousel.module.scss';
import React, { useCallback, useRef } from 'react';
import { dummyLuckyDrawCardsData, LuckyDrawCard } from '@/constraints';
import Image from 'next/image';
import useModalStore from '@/store/modalStore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MIN_DRAG_DISTANCE = 10; // 최소 드래그 거리 (픽셀)
const MAX_CLICK_TIME = 200; // 클릭으로 간주할 최대 시간 (밀리초)

export default function LuckDrawCarousel() {
  const { showLuckyDrawPickUpModal, setLuckyDrawWinningCheckType } = useModalStore();

  const onDrawCardClick = useCallback((isOdd: boolean) => {
    isOdd ? setLuckyDrawWinningCheckType('VIOLET') : setLuckyDrawWinningCheckType('PURPLE');
    showLuckyDrawPickUpModal(true);
  }, []);

  const isDragging = useRef(false);
  const dragStartTime = useRef(0);
  const startPosition = useRef({ x: 0, y: 0 });
  const sliderRef = useRef(null!);

  /** 시간 및 이동 초기화 **/
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    dragStartTime.current = Date.now();
    startPosition.current = { x: e.clientX, y: e.clientY };
  };

  /** 일정 거리 이상 움직였을때 drag로 처리 **/
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const currentPosition = { x: e.clientX, y: e.clientY };
    // 피타고라스의 정리를 이용한 거리 계산
    const distance = Math.sqrt(
      Math.pow(currentPosition.x - startPosition.current.x, 2) + Math.pow(currentPosition.y - startPosition.current.y, 2),
    );

    if (distance > MIN_DRAG_DISTANCE) {
      isDragging.current = true;
    }
  };

  /** 특정 시간 이상 클릭중일때 drag로 감지 **/
  const handlePointerUp = (isOdd: boolean) => {
    const elapsedTime = Date.now() - dragStartTime.current;
    if (!isDragging.current && elapsedTime < MAX_CLICK_TIME) {
      onDrawCardClick(isOdd);
    }
  };

  return (
    <div className={styles.luckyDrawCards}>
      <Slider {...settings} touchThreshold={10} ref={sliderRef}>
        {dummyLuckyDrawCardsData.map((cardsItem, index) => {
          return (
            <div
              className={styles.carouselItem}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              key={index}
            >
              <div className={styles.drawCards}>
                {cardsItem.map((item) => {
                  if (item.status === 'default') {
                    const isOdd = Math.floor((item.id - 1) / 5) % 2 === 1;

                    return (
                      <div className={styles.cardItem} key={item.id}>
                        {isOdd && (
                          <Image
                            onPointerUp={() => handlePointerUp(isOdd)}
                            src="/images/luckydraw.card.violet.png"
                            alt="No Image"
                            width={56}
                            height={56}
                          />
                        )}
                        {!isOdd && (
                          <Image
                            onPointerUp={() => handlePointerUp(isOdd)}
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
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
