'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './Step5.module.scss';
import { useForm } from 'react-hook-form';
import buttonStyle from '../../../../../_style/Button.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import useLuckyDrawStore from '@/store/luckydrawStore';

export default function Step5() {
  const router = useRouter();
  const { register, handleSubmit, setValue, watch } = useForm();
  const [isAddressSearchVisible, setIsAddressSearchVisible] = useState(false);
  const [addressData, setAddressData] = useState<Address | null>(null!);
  const detailAddress = watch('detailAddress');
  const { setTaxInfo } = useLuckyDrawStore();

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  const onClickButton = useCallback(() => {
    router.push('/prize/luckydraw/tax/info/complete');
  }, []);

  /** 다음 지도 API 에서 주소 선택 이후 호출되는 콜백 **/
  const handleAddressSearchComplete = useCallback(
    (data: Address) => {
      setAddressData(data);
      setIsAddressSearchVisible(false);
    },
    [addressData, isAddressSearchVisible],
  );

  /** 주소 검색 버튼 클릭시 기존 주소 초기화 **/
  const onSearchButtonClick = useCallback(() => {
    setIsAddressSearchVisible(true);
    setAddressData(null);
  }, [addressData, isAddressSearchVisible]);

  useEffect(() => {
    setTaxInfo({ currentStep: 5 });
  }, []);

  /** 주소 변경 처리 **/
  useEffect(() => {
    if (addressData) {
      setValue('address', addressData.address);
      setValue('zonecode', addressData.zonecode);
    } else {
      setValue('address', '');
      setValue('zonecode', '');
      setValue('detailAddress', '');
    }
  }, [addressData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.addressStep5}>
      <div className={style.headInfoBox}>
        <p>
          {'해당 상품을 마시멜로우가\n'}
          <span>{'직접 찾아가서 전달드립니다 :)'}</span>
        </p>
      </div>
      <div className={style.winnerInfoLabel}>
        <div className={style.info}>
          <p>당첨자 정보</p>
          <p>내 정보가 변경되었다면 본인확인을 통해 정보를 수정 할 수 있습니다.</p>
        </div>
        <Image src="/images/arrow.right.svg" alt="No Image" width={24} height={24} />
      </div>

      <div className={style.winnerName}>
        <p>이름</p>
        <p>김이름</p>
      </div>

      <div className={style.winnerPhone}>
        <p>연락처</p>
        <p>010-0000-0000</p>
      </div>

      <div className={style.horizontalLine}></div>

      <div className={style.addressInfoLabel}>
        <p>경품 수령 주소</p>
        <p>
          {'경품을 수령할 주소를 정확하게 입력해주세요. '}
          <span>{'오기제시 불이익은 책임지지 않아요.'}</span>
        </p>
      </div>

      <div className={style.addressInputArea}>
        <div className={style.search}>
          <input readOnly disabled type="text" {...register('zonecode')} placeholder={'주소를 검색해 주세요.'} />
          <button onClick={onSearchButtonClick}>주소 검색</button>
        </div>
        {addressData && (
          <>
            <input readOnly type="text" {...register('address')} />
            <input type="text" {...register('detailAddress')} placeholder={'사는 곳 동,호수를 입력해 주세요.'} />
          </>
        )}
      </div>

      {isAddressSearchVisible && (
        <div className={style.daumPostCodeContainer}>
          <div className={style.xButton} onClick={() => setIsAddressSearchVisible(false)}>
            <Image src="/images/x.cancel.black.svg" alt={'No Image'} width={24} height={24} />
          </div>
          <DaumPostcodeEmbed
            scriptUrl={'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'}
            onComplete={handleAddressSearchComplete}
            style={{ flexGrow: 1 }}
          />
        </div>
      )}

      <div className={buttonStyle.buttonsArea}>
        <div onClick={onClickButton} className={cx(buttonStyle.confirmButton, detailAddress && buttonStyle.active)}>
          저장 후 입력 정보 확인
        </div>
      </div>
    </form>
  );
}
