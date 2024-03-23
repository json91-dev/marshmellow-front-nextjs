import AuthFailModal from '@/app/signup/@modal/identify/_components/AuthFailModal';
import AuthSuccessModal from '@/app/signup/@modal/identify/_components/AuthSuccessModal';
import QuitModal from '@/app/signup/@modal/identify/_components/QuitModal';
import TermsBottomSheet from '@/app/signup/@modal/identify/_components/TermsBottomSheet';

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
