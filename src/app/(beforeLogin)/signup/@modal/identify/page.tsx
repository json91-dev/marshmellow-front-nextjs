import AuthFailModal from '@/app/(beforeLogin)/signup/@modal/identify/_components/AuthFailModal';
import AuthSuccessModal from '@/app/(beforeLogin)/signup/@modal/identify/_components/AuthSuccessModal';
import QuitModal from '@/app/(beforeLogin)/signup/@modal/identify/_components/QuitModal';
import TermsBottomSheet from '@/app/(beforeLogin)/signup/@modal/identify/_components/TermsBottomSheet';

export default function IdentifyModals() {
  return (
    <>
      <AuthFailModal />
      <AuthSuccessModal />
      <QuitModal />
      <TermsBottomSheet />
    </>
  );
}
