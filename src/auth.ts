// import KakaoProvider from "next-auth/providers/kakao"
import kakao from 'next-auth/providers/kakao';
import google from 'next-auth/providers/google'; // import 추가
import apple from 'next-auth/providers/apple'; // import 추가
import NextAuth from 'next-auth';

export const {
  handlers: { GET, POST }, // API Routes
  auth, // 요부분이 결국 미들웨어가 되는것 체크할것 / auth 함수 호출시 내가 로그인했는지 안했는지 여부 판단 가능.
  signIn, // 로그인용
} = NextAuth({
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    kakao({
      clientId: process.env.KAKAO_CLIENT_ID ?? '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? '',
    }),
    apple({
      clientId: process.env.APPLE_ID ?? '',
      clientSecret: process.env.APPLE_SECRET_KEY ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser, trigger, session }) {
      if (account) {
        if (account.provider === 'google') {
          const response = await fetch(`${process.env.API_URL}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ accessToken: account.id_token, vendor: account.provider }),
          });
          console.log(`구글 로그인 토큰: ${account.id_token}`);
          const result = await response.json();
          token.accessToken = result.data.credentials.accessToken;
          token.refreshToken = result.data.credentials.refreshToken;
          token.type = result.data.type;
        } else {
          const response = await fetch(`${process.env.API_URL}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ accessToken: account.access_token, vendor: account.provider }),
          });

          console.log(`카카오 로그인 토큰: ${account.access_token}`);
          const result = await response.json();
          token.accessToken = result.data.credentials.accessToken;
          token.refreshToken = result.data.credentials.refreshToken;
          token.type = result.data.type;
        }
      }

      return token;
    },

    async session({ session, token, trigger, newSession }) {
      if (session) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.type = token.type;
        console.log('엑세스토큰: ', session.accessToken);
      }

      return session;
    },
  },
});
