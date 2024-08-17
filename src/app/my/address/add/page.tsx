'use client';
import styles from './page.module.scss';
import TopNavigation from '@/components/nav/TopNavigation';
import Checkbox from '@/components/common/Checkbox';
import Image from 'next/image';
import React from 'react';

export default function AddressAddPage() {
  return (
    <div className={styles.addressAddPage}>
      <TopNavigation title={'배송지 추가하기'} />
      <div className={styles.content}>
        <div className={styles.mainAddressCheck}>
          <Checkbox />
          <div>대표 배송지로 설정하기</div>
        </div>

        <div className={styles.addressName}>
          <label className={styles.label} htmlFor={'locationName'}>
            배송지명(선택)
          </label>
          <input id={'locationName'} placeholder={'배송지명'} type="text" />
        </div>

        <div className={styles.name}>
          <label className={styles.label} htmlFor={'name'}>
            *이름
          </label>
          <input id={'name'} type="text" placeholder={'이름'} />
        </div>

        <div className={styles.address}>
          <label className={styles.label} htmlFor={'address'}>
            *주소
          </label>
          <div className={styles.addressSearch}>
            <input id={'addressZip'} type="text" disabled={true} placeholder={'우편번호'} />
            <div>
              <button className={styles.addressSearchButton}>주소 검색</button>
            </div>
          </div>
          <div className={styles.addressStreet}>
            <input id={'addressStreet'} type="text" disabled={true} placeholder={'주소를 입력해주세요'} />
          </div>

          <div className={styles.addressDetail}>
            <input id={'addressDetail'} type="text" placeholder={'사는 곳 동,호수를 입력해 주세요.'} />
          </div>
        </div>

        <div className={styles.phone}>
          <label className={styles.label} htmlFor={'name'}>
            *연락처1
          </label>
          <div className={styles.phoneAddMore}>
            <input id={'number'} type="text" pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}" />
            <div className={styles.image}>
              <Image src="/images/plus.circle.svg" alt="No Image" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className={styles.request}>
          <label className={styles.label} htmlFor={'name'}>
            요청사항
          </label>
          <input id={'name'} type="text" />
        </div>

        <button className={styles.confirmButton}>확인</button>
      </div>
    </div>
  );
}
