import { redirect } from 'next/navigation';
export default function RootPage() {
  const loginSuccess = false;
  if (!loginSuccess) {
    redirect('/login');
  }
  return <>로그인 성공</>;
}
