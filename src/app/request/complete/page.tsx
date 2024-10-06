'use client';

import React from 'react';
import styles from './page.module.scss';
import TopNavigation from '@/components/nav/TopNavigation';
import buttonStyle from '@/moduleStyle/Button.module.scss';
import cx from 'classnames';

export default function RequestCompletePage() {
  return (
    <div className={styles.requestCompletePage}>
      <TopNavigation title={'문의하기'} />
      <div className={styles.scrollArea}>
        <p className={styles.header}>{'{닉네임}님의 문의내용이\n마시멜로우 팀에게 전달되었어요!'}</p>

        <p className={styles.description}>
          {'문의주신 내용은 마시멜로우 팀이 최대한 빠르게 답변드릴게요! '}
          <span>{'문의 답변 내용은 답변 완료 후 알림 내역에서 확인 하실 수 있어요.\n\n'}</span>
          {'마시멜로우를 이용하면서 어려운 부분이 있거나 문제가 생기면 언제든지 문의하기를 이용해주세요. 😀\n\n'}

          {'마시멜로우 임직원 여러분들의 소중한 의견들에 귀를 기울여 더 좋은 복지혜택을 드릴 수 있도록 노력할게요.\n\n'}
          {'항상 감사합니다. :)'}
        </p>
      </div>

      <div className={buttonStyle.horizontalButtonArea}>
        <div className={cx(buttonStyle.confirmButton, buttonStyle.active)}>확인</div>
      </div>
    </div>
  );
}
