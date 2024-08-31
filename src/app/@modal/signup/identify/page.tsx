import AuthFailModal from '@/app/@modal/signup/identify/_components/AuthFailModal';
import AuthSuccessModal from '@/app/@modal/signup/identify/_components/AuthSuccessModal';
import QuitModal from '@/app/@modal/signup/identify/_components/QuitModal';
import TermsBottomSheet from '@/app/@modal/signup/identify/_components/TermsBottomSheet';
import ExistPhoneModal from '@/app/@modal/signup/identify/_components/ExistPhoneModal';

export default function IdentifyModals() {
  return (
    <>
      <AuthFailModal />
      <AuthSuccessModal />
      <QuitModal />
      <TermsBottomSheet />
      <ExistPhoneModal />
    </>
  );
}
