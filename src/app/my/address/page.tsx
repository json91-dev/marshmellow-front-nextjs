import style from './address.module.scss';
import TopNavigation from '@/app/_components/common/TopNavigation';
import Image from 'next/image';
import { router } from 'next/client';
import Link from 'next/link';

export default function AddressPage() {
  return (
    <div className={style.addressPage}>
      <TopNavigation title={'배송지 관리'} />
      <div className={style.content}>
        <div className={style.addressCard}>
          <div className={style.rightTopArea}>
            <div className={style.mainAddressTag}>대표배송지</div>
            {/*<button className={style.deleteAddressButton}>aa</button>*/}
          </div>

          <div className={style.name}>
            <p>우리집</p>
            <p>김이름</p>
          </div>

          <div className={style.addressArea}>
            <p className={style.address}>서울특별시 서대문구 도로동 00-00</p>
            <p className={style.detail}>상세 주소를 여기서 보여줍니다요. 사는 곳 동, 호수도</p>
            <p className={style.phone}>010-0000-0000</p>
            <p className={style.require}>요청사항 : 집 앞에다 두고가주세요</p>
          </div>
          <button className={style.editButton}>수정하기</button>
        </div>

        <div className={style.addressCard}>
          <div className={style.rightTopArea}>
            <button className={style.deleteAddressButton}>
              <Image src={'/images/x.cancel.svg'} width={20} height={20} alt="No Image" />
            </button>
          </div>

          <div className={style.name}>
            <p>우리집</p>
            <p>김이름</p>
          </div>

          <div className={style.addressArea}>
            <p className={style.address}>서울특별시 서대문구 도로동 00-00</p>
            <p className={style.detail}>상세 주소를 여기서 보여줍니다요. 사는 곳 동, 호수도</p>
            <p className={style.phone}>010-0000-0000</p>
            <p className={style.require}>요청사항 : 집 앞에다 두고가주세요</p>
          </div>
          <button className={style.editButton}>수정하기</button>
        </div>

        <div className={style.addressCard}>
          <div className={style.rightTopArea}>
            <button className={style.deleteAddressButton}>
              <Image src={'/images/x.cancel.svg'} width={20} height={20} alt="No Image" />
            </button>
          </div>

          <div className={style.name}>
            <p>우리집</p>
            <p>김이름</p>
          </div>

          <div className={style.addressArea}>
            <p className={style.address}>서울특별시 서대문구 도로동 00-00</p>
            <p className={style.detail}>상세 주소를 여기서 보여줍니다요. 사는 곳 동, 호수도</p>
            <p className={style.phone}>010-0000-0000</p>
            <p className={style.require}>요청사항 : 집 앞에다 두고가주세요</p>
          </div>
          <button className={style.editButton}>수정하기</button>
        </div>

        <div className={style.addressCard}>
          <div className={style.rightTopArea}>
            <button className={style.deleteAddressButton}>
              <Image src={'/images/x.cancel.svg'} width={20} height={20} alt="No Image" />
            </button>
          </div>

          <div className={style.name}>
            <p>우리집</p>
            <p>김이름</p>
          </div>

          <div className={style.addressArea}>
            <p className={style.address}>서울특별시 서대문구 도로동 00-00</p>
            <p className={style.detail}>상세 주소를 여기서 보여줍니다요. 사는 곳 동, 호수도</p>
            <p className={style.phone}>010-0000-0000</p>
            <p className={style.require}>요청사항 : 집 앞에다 두고가주세요</p>
          </div>
          <button className={style.editButton}>수정하기</button>
        </div>

        <Link href={'/my/address/add'} className={style.addButton}>
          <p>배송지 추가하기 +</p>
        </Link>

        <p className={style.addressMaxInfo}></p>
      </div>
    </div>
  );
}
