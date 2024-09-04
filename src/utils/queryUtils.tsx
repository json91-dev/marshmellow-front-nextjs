import { getSession } from 'next-auth/react';

export async function getAuthenticatedSession() {
  const session = await getSession();
  if (!session) {
    throw new Error('로그인이 되어있지 않음');
  }
  return session;
}
