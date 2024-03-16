import style from './identify.module.scss';
import { useIdentifyStore } from '@/store/identify';
import AuthFailModal from '@/app/(beforeLogin)/signup/@modal/identify/_components/AuthFailModal';
import AuthSuccessModal from '@/app/(beforeLogin)/signup/@modal/identify/_components/AuthSuccessModal';
import QuitModal from '@/app/(beforeLogin)/signup/@modal/identify/_components/QuitModal';

export default function Identify() {
  const { isOpenAuthFailModal, isOpenAuthSuccessModal, isOpenQuitModal } = useIdentifyStore();

  return (
    <>
      <AuthFailModal />
      <AuthSuccessModal />
      <QuitModal />
    </>
  );
}
