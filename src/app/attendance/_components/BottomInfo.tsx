import style from './bottomInfo.module.scss';
import Image from 'next/image';
import React, { useCallback, useRef } from 'react';
import { useWorkMonthlyQuery } from '@/app/_hook/queries/activity';
import dayjs from 'dayjs';
import { useModalStore } from '@/store/modal';

export default function BottomInfo() {
  const accordionContentRef = useRef<HTMLDivElement>(null!);
  const accordionToggleRef = useRef<HTMLDivElement>(null!);
  const isOpenedAccordion = useRef<boolean>(false);

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
    <div className={style.bottomInfo}>
      <FulfillAttendance />

      <p className={style.howToInfo}>참여방법</p>
      <div className={style.howToSteps}>
        <div className={style.step}>
          <div>1</div>
          <p>{`오늘의 업무를 1개 이상\n완수 시 출석 완료`}</p>
        </div>
        <div className={style.step}>
          <div>2</div>
          <p>{`일주일 한달 만근 시\n마시멜로우 증정`}</p>
        </div>
        <div className={style.step}>
          <div>3</div>
          <p>
            {`한달을`}
            <span>
              <Image src="/images/snack.purple.svg" alt="No Image" width={20} height={20} />
            </span>
            {`로 채우면\n뽀너스 마시멜로우 증정`}
          </p>
        </div>
        <div className={style.step}>
          <div>4</div>
          <p>
            {`출근 보충 시\n`}
            <span>
              <Image src="/images/snack.purple.svg" alt="No Image" width={20} height={20} />
            </span>
            {`로 채워져요`}
          </p>
        </div>
      </div>

      <div className={style.horizontalLine} />

      <div className={style.accordionInfo}>
        <div className={style.accordionToggle} ref={accordionToggleRef} onClick={onClickAccordionToggle}>
          <p>안내사항</p>
          <Image src={'/images/arrow.bottom.svg'} width={24} height={24} alt="No Image" />
        </div>
        <div className={style.accordionContent} ref={accordionContentRef}>
          <div className={style.col}>
            <p>•</p>
            <p>출석 이벤트는 입사완료한 직원에 한해 참여하실 수 있습니다.</p>
          </div>
          <div className={style.col}>
            <p>•</p>
            <p>일주일, 한 달 만근 뽀너스 마시멜로우는 달력에 있는 버튼을 클릭해야 획득이 가능합니다.</p>
          </div>
          <div className={style.col}>
            <p>•</p>
            <p>
              일주일, 한 달 만근 뽀너스 마시멜로우는 발생한 달의 다음 달 14일까지만 획득할 수 있으며, 이후 자동으로
              소멸됩니다.
            </p>
          </div>
          <div className={style.col}>
            <p>•</p>
            <p>출근 보충 사용횟수는 매달 초기화 됩니다.</p>
          </div>
          <div className={style.col}>
            <p>•</p>
            <p>출석은 오늘의 업무를 1번 이상 완수 시 출석 완료처리가 됩니다.</p>
          </div>
          <div className={style.col}>
            <p>•</p>
            <p>
              출근 보충 사용 시 오늘의 업무를 3개 모두 완수한 것으로 처리되며, 해당 날짜에 대한 출근 보충은 1회만 가능합니다.
            </p>
          </div>
          <div className={style.col}>
            <p>•</p>
            <p>사용하지 않은 마시멜로우는 12개월 뒤 소멸됩니다.</p>
          </div>
          <div className={style.col}>
            <p>•</p>
            <p>
              부적절한 방법으로 이벤트에 참여한 경우, 적립된 마시멜로우는 회수되며 추후 이벤트 참여에 제한될 수 있습니다.
            </p>
          </div>
          <div className={style.col}>
            <p>•</p>
            <p>운영사의 사정으로 사전 안내없이 변경 및 중단될 수 있습니다.</p>
          </div>
          <div className={style.col}>
            <p>•</p>
            <p>
              해당 월 마시멜로우를 클릭해 획득하지 않으면 다음 달로 넘어갈 때 이전 달 마시멜로우를 다시 획득할 수 없습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 근태관리 하단 출근 보충 일수 화면 **/
function FulfillAttendance() {
  const { data: workMonthlyResult, isLoading, isFetching } = useWorkMonthlyQuery(dayjs().format('YYYY-MM-DD'));
  const { showFulfillAttendanceDateSelectModal } = useModalStore();
  const onClickFillAds = useCallback(() => {
    showFulfillAttendanceDateSelectModal(true);
  }, []);

  return (
    <>
      <div className={style.headInfo}>
        <p className={style.first}>이번달 결근한 날이 있다면?</p>
        <p className={style.second}>최대 4일까지 마시멜로우로 출근 일수를 채울 수 있어요!</p>
      </div>

      <div className={style.fillMallow}>
        <div className={style.fillCount}>
          <p>보충일수: {workMonthlyResult?.data?.maxFillCount ? workMonthlyResult?.data?.maxFillCount : 0}/4</p>
        </div>
        <div className={style.fillAds} onClick={onClickFillAds}>
          <p>광고보고 출근 보충</p>
        </div>
      </div>
    </>
  );
}
