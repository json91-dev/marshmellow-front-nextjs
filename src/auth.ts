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
      profile(profile, tokens) {
        // appleFirstInfo는 처음 로그인할 때 Apple에서 제공하는 사용자 정보입니다.
        const appleFirstInfo: any = tokens.id_token ? jwt.decode(tokens.id_token) : null;
        console.log('Test 1');
        console.log(appleFirstInfo);

        // 처음 로그인 시 Apple에서 전달된 이름 정보가 있다면 사용
        if (appleFirstInfo && appleFirstInfo.name) {
          profile.name = `${appleFirstInfo.name.firstName} ${appleFirstInfo.name.lastName}`;
        }

        return {
          id: profile.sub,
          name: profile.name || null,
          email: profile.email || null,
          image: null, // Apple은 기본적으로 프로필 이미지를 제공하지 않습니다.
        };
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
