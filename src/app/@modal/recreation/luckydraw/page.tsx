import LuckyDrawErrorModal from '@/app/@modal/recreation/luckydraw/_components/LuckyDrawErrorModal';
import LuckyDrawPickUpModal from '@/app/@modal/recreation/luckydraw/_components/LuckyDrawPickUpModal';
import LuckyDrawWinningCheckModal from '@/app/@modal/recreation/luckydraw/_components/LuckyDrawWinningCheckModal';
import FeverGuideModal from '@/app/@modal/recreation/luckydraw/_components/FeverGuideModal';

export default function LuckyDrawPageModals() {
  return (
    <>
      <LuckyDrawErrorModal />
      <LuckyDrawPickUpModal />
      <LuckyDrawWinningCheckModal />
      <FeverGuideModal />
    </>
  );
}
