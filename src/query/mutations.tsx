import { useMutation } from '@tanstack/react-query';

export const LoginMutation = useMutation({
  async mutationFn(data: { accessToken: string; vendor: string; idToken: string }) {
    const { accessToken, vendor, idToken } = data;
    if (vendor === 'kakao') {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken: accessToken, vendor: vendor }),
      });
    } else if (vendor === 'google') {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken: idToken, vendor: vendor }),
      });
    }
  },
  async onSuccess(response: any) {
    const result = await response.json();
    // await update({ id: result.data.accountId });
    // cookies().set('accountId', result.data.accountId )
    // cookies().get('accountId');
  },

  onError: (error: string) => {
    console.error(error);
    alert('업로드 중 에러가 발생했습니다.');
  },
  onSettled() {},
});
