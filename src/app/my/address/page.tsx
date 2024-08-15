'use client';

import styles from './page.module.scss';
import TopNavigation from '@/components/nav/TopNavigation';
import Image from 'next/image';
import Link from 'next/link';
import useModalStore from '@/store/modalStore';
import { useRouter } from 'next/navigation';

export default function AddressPage() {
  const { showAddressDeleteModal } = useModalStore();
  const router = useRouter();

  return (
    <div className={styles.addressPage}>
      <TopNavigation title={'배송지 관리'} />
      <div className={styles.content}>
        <div className={styles.addressCard}>
          <div className={styles.rightTopArea}>
            <div className={styles.mainAddressTag}>대표배송지</div>
          </div>

          <div className={styles.name}>
            <p>우리집</p>
            <p>김이름</p>
          </div>

          <div className={styles.addressArea}>
            <p className={styles.address}>서울특별시 서대문구 도로동 00-00</p>
            <p className={styles.detail}>상세 주소를 여기서 보여줍니다요. 사는 곳 동, 호수도</p>
            <p className={styles.phone}>010-0000-0000</p>
            <p className={styles.require}>요청사항 : 집 앞에다 두고가주세요</p>
          </div>
          <button className={styles.editButton} onClick={() => router.push('/my/address/edit')}>
            수정하기
          </button>
        </div>

        <div className={styles.addressCard}>
          <div className={styles.rightTopArea}>
            <button className={styles.deleteAddressButton} onClick={() => showAddressDeleteModal(true)}>
              <Image src={'/images/x.cancel.svg'} width={20} height={20} alt="No Image" />
            </button>
          </div>

          <div className={styles.name}>
            <p>우리집</p>
            <p>김이름</p>
          </div>

          <div className={styles.addressArea}>
            <p className={styles.address}>서울특별시 서대문구 도로동 00-00</p>
            <p className={styles.detail}>상세 주소를 여기서 보여줍니다요. 사는 곳 동, 호수도</p>
            <p className={styles.phone}>010-0000-0000</p>
            <p className={styles.require}>요청사항 : 집 앞에다 두고가주세요</p>
          </div>
          <button className={styles.editButton} onClick={() => router.push('/my/address/edit')}>
            수정하기
          </button>
        </div>

        <div className={styles.addressCard}>
          <div className={styles.rightTopArea}>
            <button className={styles.deleteAddressButton} onClick={() => showAddressDeleteModal(true)}>
              <Image src={'/images/x.cancel.svg'} width={20} height={20} alt="No Image" />
            </button>
          </div>

          <div className={styles.name}>
            <p>우리집</p>
            <p>김이름</p>
          </div>

          <div className={styles.addressArea}>
            <p className={styles.address}>서울특별시 서대문구 도로동 00-00</p>
            <p className={styles.detail}>상세 주소를 여기서 보여줍니다요. 사는 곳 동, 호수도</p>
            <p className={styles.phone}>010-0000-0000</p>
            <p className={styles.require}>요청사항 : 집 앞에다 두고가주세요</p>
          </div>
          <button className={styles.editButton} onClick={() => router.push('/my/address/edit')}>
            수정하기
          </button>
        </div>

        <div className={styles.addressCard}>
          <div className={styles.rightTopArea}>
            <button className={styles.deleteAddressButton} onClick={() => showAddressDeleteModal(true)}>
              <Image src={'/images/x.cancel.svg'} width={20} height={20} alt="No Image" />
            </button>
          </div>

          <div className={styles.name}>
            <p>우리집</p>
            <p>김이름</p>
          </div>

          <div className={styles.addressArea}>
            <p className={styles.address}>서울특별시 서대문구 도로동 00-00</p>
            <p className={styles.detail}>상세 주소를 여기서 보여줍니다요. 사는 곳 동, 호수도</p>
            <p className={styles.phone}>010-0000-0000</p>
            <p className={styles.require}>요청사항 : 집 앞에다 두고가주세요</p>
          </div>
          <button className={styles.editButton} onClick={() => router.push('/my/address/edit')}>
            수정하기
          </button>
        </div>

        <Link href={'/my/address/add'} className={styles.addButton}>
          <p>배송지 추가하기 +</p>
        </Link>

        <p className={styles.addressMaxInfo}>최대 10개까지 추가 가능합니다.</p>
      </div>
    </div>
  );
}
