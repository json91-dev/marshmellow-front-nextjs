import NextAuth from 'next-auth';
import google from 'next-auth/providers/google';
import kakao from 'next-auth/providers/kakao';
import apple from 'next-auth/providers/apple';

const handler = NextAuth({
  debug: true,
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
      profile(profile) {
        console.log(profile);
        return {
          id: profile.sub,
          name: 'Person Doe',
          email: profile.email,
          image: '',
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      console.log(account);
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

export { handler as GET, handler as POST };
