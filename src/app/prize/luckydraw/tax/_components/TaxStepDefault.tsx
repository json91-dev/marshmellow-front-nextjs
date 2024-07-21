import style from './taxStep.module.scss';
import TopNavigation from '@/app/_components/common/TopNavigation';

export default function TaxStepDefault() {
  return (
    <div className={style.taxStepDefault}>
      <TopNavigation title={'제세공과금 정보 입력'} />
    </div>
  );
}
