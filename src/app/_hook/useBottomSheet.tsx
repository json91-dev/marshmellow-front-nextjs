import { useEffect, useRef } from 'react';

type BottomSheetHookType = {
  bottomSheetRef: React.RefObject<HTMLDivElement>;
  backDropRef: React.RefObject<HTMLDivElement>;
  isShow: boolean;
  setIsShow: (value: boolean) => void;
};

export default function useBottomSheet({ bottomSheetRef, backDropRef, isShow, setIsShow }: BottomSheetHookType) {
  const startY = useRef(0);
  const isDragging = useRef(false);

  const onPointerDown = (e: PointerEvent) => {
    e.stopPropagation();

    if (bottomSheetRef.current !== null) {
      bottomSheetRef.current.style.transition = `none`;
      startY.current = e.clientY;
      isDragging.current = true;
    }
  };

  const onPointerMove = (e: PointerEvent) => {
    e.stopPropagation();
    if (!isDragging.current) return;

    const deltaY = e.clientY - startY.current;
    if (deltaY < 0) return;

    if (bottomSheetRef.current !== null) {
      bottomSheetRef.current.style.transform = `translateY(${deltaY}px)`;
    }
  };

  const closeBottomSheet = () => {
    if (bottomSheetRef.current !== null) {
      const bottomSheetHeight = bottomSheetRef.current.offsetHeight;
      bottomSheetRef.current.style.transition = `transform 200ms ease-in-out`;
      bottomSheetRef.current.style.transform = `translateY(${bottomSheetHeight}px`;
      setTimeout(() => {
        setIsShow(false);
        // router.back();
      }, 250);
    }
  };

  const onPointerUp = (e: PointerEvent) => {
    e.stopPropagation();
    if (!isDragging.current) return;
    isDragging.current = false;

    if (bottomSheetRef.current !== null) {
      const bottomSheetHeight = bottomSheetRef.current.offsetHeight;
      const currentTranslateY =
        parseInt(bottomSheetRef.current.style.transform.replace('translateY(', '').replace('px)', '')) || 0;

      /** 전체 영역중 1/6 이상 움직였을때 모달창이 닫히고 이전페이지 이동 **/
      if (Math.abs(currentTranslateY) >= bottomSheetHeight / 6) {
        closeBottomSheet();
      } else {
        bottomSheetRef.current.style.transition = `transform 300ms ease-in-out`;
        bottomSheetRef.current.style.transform = `translateY(0)`;
      }
    }
  };

  useEffect(() => {
    if (isShow) {
      bottomSheetRef.current?.addEventListener('pointerdown', onPointerDown);
      bottomSheetRef.current?.addEventListener('pointermove', onPointerMove);
      bottomSheetRef.current?.addEventListener('pointerup', onPointerUp);

      if (backDropRef.current !== null) {
        backDropRef.current.addEventListener('pointerup', () => {
          setIsShow(false);
        });
      }
    }
  }, [isShow]);

  useEffect(() => {
    return () => {
      bottomSheetRef.current?.removeEventListener('pointerdown', onPointerDown);
      bottomSheetRef.current?.removeEventListener('pointermove', onPointerDown);
      bottomSheetRef.current?.removeEventListener('pointerup', onPointerDown);
    };
  }, []);

  return { closeBottomSheet };
}
