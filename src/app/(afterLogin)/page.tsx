import { redirect } from 'next/navigation';

export default function Home() {
  const loginSuccess = false;
  if (!loginSuccess) {
    redirect('/login');
  }
  return <>로그인 성공</>;
}
