// import KakaoProvider from "next-auth/providers/kakao"
import kakao from 'next-auth/providers/kakao';
import google from 'next-auth/providers/google'; // import 추가
import apple from 'next-auth/providers/apple'; // import 추가
import NextAuth from 'next-auth';
import jwt from 'jsonwebtoken';

export const {
  handlers: { GET, POST }, // API Routes
  auth, // 요부분이 결국 미들웨어가 되는것 체크할것 / auth 함수 호출시 내가 로그인했는지 안했는지 여부 판단 가능.
  signIn, // 로그인용
} = NextAuth({
  trustHost: true,
  /** apple 로그인시 쿠키 설정 해줘야함 **/
  cookies: {
    pkceCodeVerifier: {
      name: 'next-auth.pkce.code_verifier',
      options: {
        httpOnly: true,
        sameSite: 'none',
        path: '/',
        secure: true,
      },
    },
    callbackUrl: {
      name: `__Secure-next-auth.callback-url`,
      options: {
        httpOnly: false,
        sameSite: 'none',
        path: '/',
        secure: true,
      },
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
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
      clientId: process.env.APPLE_CLIENT_ID ?? '',
      clientSecret: process.env.APPLE_CLIENT_SECRET ?? '',
      wellKnown: 'https://appleid.apple.com/.well-known/openid-configuration',
      checks: ['pkce'],
      token: {
        url: `https://appleid.apple.com/auth/token`,
      },
      authorization: {
        url: 'https://appleid.apple.com/auth/authorize',
        params: {
          scope: '',
          response_type: 'code',
          response_mode: 'query',
          state: crypto.randomUUID(),
        },
      },
      client: {
        token_endpoint_auth_method: 'client_secret_post',
      },
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
          token.accountId = result.data.accountId;
          token.type = result.data.type;
          token.accountId = result.data.accountId;
          token.profileImg = profile?.picture;
        } else if (account.provider === 'kakao') {
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
          token.accountId = result.data.accountId;
          // @ts-ignore
          token.profileImg = profile?.properties?.profile_image;
        } else if (account.provider === 'apple') {
          console.log(`로그인 넘어옴??`);
          console.log('Test 2');
          console.log(account);
          const response = await fetch(`${process.env.API_URL}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ accessToken: account.id_token, vendor: account.provider }),
          });

          const result = await response.json();
          token.accessToken = result.data.credentials.accessToken;
          token.refreshToken = result.data.credentials.refreshToken;
          token.type = result.data.type;
          token.accountId = result.data.accountId;
          // @ts-ignore
          token.profileImg = profile?.properties?.profile_image;
        }
      }

      return token;
    },

    async session({ session, token, trigger, newSession }) {
      if (session) {
        session.accessToken = token.accessToken + '';
        session.refreshToken = token.refreshToken + '';
        session.type = token.type + '';
        session.accountId = token.accountId + '';
        session.profileImg = token.profileImg + '';
      }

      return session;
    },
  },
});
