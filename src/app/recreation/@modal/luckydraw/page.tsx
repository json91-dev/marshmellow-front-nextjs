import LuckyDrawErrorModal from '@/app/recreation/@modal/luckydraw/_components/LuckyDrawErrorModal';
import LuckyDrawPickUpModal from '@/app/recreation/@modal/luckydraw/_components/LuckyDrawPickUpModal';
import LuckyDrawWinningCheckModal from '@/app/recreation/@modal/luckydraw/_components/LuckyDrawWinningCheckModal';
import FeverGuideModal from '@/app/recreation/@modal/luckydraw/_components/FeverGuideModal';

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
