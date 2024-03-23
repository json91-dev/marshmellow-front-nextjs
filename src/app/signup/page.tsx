import { redirect } from 'next/navigation';

export default function SignupRootPage() {
  const loginSuccess = false;
  if (!loginSuccess) {
    redirect('/signup/identify');
  }
  return <>로그인 성공</>;
}
