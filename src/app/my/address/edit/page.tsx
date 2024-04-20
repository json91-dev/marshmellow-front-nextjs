import style from './addressEdit.module.scss';
import TopNavigation from '@/app/_components/common/TopNavigation';
import Checkbox from '@/app/_components/common/Checkbox';
import Image from 'next/image';
import React from 'react';

export default function AddressEditPage() {
  return (
    <div className={style.addressEditPage}>
      <TopNavigation title={'배송지 수정하기'} />
      <div className={style.content}>
        <div className={style.mainAddressCheck}>
          <Checkbox />
          <div>대표 배송지로 설정하기</div>
        </div>

        <div className={style.addressName}>
          <label className={style.label} htmlFor={'locationName'}>
            배송지명(선택)
          </label>
          <input id={'locationName'} placeholder={'배송지명'} type="text" />
        </div>

        <div className={style.name}>
          <label className={style.label} htmlFor={'name'}>
            *이름
          </label>
          <input id={'name'} type="text" placeholder={'이름'} />
        </div>

        <div className={style.address}>
          <label className={style.label} htmlFor={'address'}>
            *주소
          </label>
          <div className={style.addressSearch}>
            <input id={'addressZip'} type="text" disabled={true} placeholder={'우편번호'} />
            <div>
              <button className={style.addressSearchButton}>주소 검색</button>
            </div>
          </div>
          <div className={style.addressStreet}>
            <input id={'addressStreet'} type="text" disabled={true} placeholder={'주소를 입력해주세요'} />
          </div>

          <div className={style.addressDetail}>
            <input id={'addressDetail'} type="text" placeholder={'사는 곳 동,호수를 입력해 주세요.'} />
          </div>
        </div>

        <div className={style.phone}>
          <label className={style.label} htmlFor={'name'}>
            *연락처1
          </label>
          <div className={style.phoneAddMore}>
            <input id={'number'} type="text" pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}" />
            <div className={style.image}>
              <Image src="/images/plus.circle.svg" alt="No Image" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className={style.request}>
          <label className={style.label} htmlFor={'name'}>
            요청사항
          </label>
          <input id={'name'} type="text" />
        </div>

        <button className={style.confirmButton}>확인</button>
      </div>
    </div>
  );
}
