import style from './address.module.scss';
import TopNavigation from '@/app/_components/common/TopNavigation';

export default function AddressPage() {
  return (
    <div className={style.addressPage}>
      <TopNavigation title={'배송지 관리'} />
    </div>
  );
}
