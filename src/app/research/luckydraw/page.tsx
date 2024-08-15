'use client';
import styles from './page.module.scss';
import { dummyLuckyDrawResearchItems } from '@/constraints';
import React from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';
import { useRouter } from 'next/navigation';

export default function LuckyDrawResearchPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data: { optionRadio: number }) => {
    router.push('/research/luckydraw/complete');
  };
  const selectedValue = watch('optionRadio');

  return (
    <div className={styles.luckyDrawResearchPage}>
      <div className={styles.scrollArea}>
        <p className={styles.title}>행운의 뽑기 경품 투표</p>
        <div className={styles.main}>
          <div className={styles.info}>
            <p>{`{스타벅스 아메리카노}를\n추첨을 통해 총 N분께 드려요!`}</p>
            <p>
              경품 투표는 해당 1번째 뽑기판 종료시 종료되며 당첨자에게는 경품 투표 종료 후 14일 이내 개별적으로 연락드려요.
            </p>
          </div>

          <div className={styles.question}>
            <p>다음 뽑기판에서 받고싶은 경품은 무엇인가요?</p>
          </div>

          <div className={styles.selectInfo}>
            <p>1개 선택</p>
          </div>

          <form className={styles.selectArea}>
            {dummyLuckyDrawResearchItems.map((item, index) => {
              return (
                <div className={styles.radioWrapper} key={item.id}>
                  <label className={styles.radioLabel}>
                    <input type="radio" value={item.id} {...register('optionRadio', { required: true })} />
                    <span className={styles.radioInnerCircle}></span>
                    <p>{item.name}</p>
                  </label>
                  {index === dummyLuckyDrawResearchItems.length - 1 && (
                    <div className={styles.textInputWrapper}>
                      <input type={'text'} placeholder={'ex) 호캉스 떠나고 싶어요.'} />
                    </div>
                  )}
                </div>
              );
            })}
          </form>
        </div>
      </div>

      <div className={styles.buttonArea}>
        <div className={styles.horizontalLine}></div>

        <button
          onClick={handleSubmit(() => onSubmit({ optionRadio: selectedValue }))}
          className={cx(styles.confirmButton, selectedValue && styles.active)}
        >
          제출하기
        </button>
        <button className={styles.cancelButton}>다음에 하기</button>
      </div>
    </div>
  );
}
