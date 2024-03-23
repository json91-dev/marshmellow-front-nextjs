// import KakaoProvider from "next-auth/providers/kakao"
// import KakaoProvider from "next-auth/providers/kakao"
import google from 'next-auth/providers/google'; // import 추가
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
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },

    async session({ session, token }) {
      if (session) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
});
