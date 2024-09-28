import NextAuth, { NextAuthOptions } from 'next-auth';
import google from 'next-auth/providers/google';
import kakao from 'next-auth/providers/kakao';
import apple from 'next-auth/providers/apple';

export const authOptions: NextAuthOptions = {
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
    async jwt({ token, trigger, account, profile, session }) {
      if (trigger === 'update' && session?.type) {
        // Update token with the new type
        token.type = session.type;
        return token;
      }

      if (account) {
        console.log(account.provider + ' 로그인 시도');
        console.log('토큰', account.id_token ? account.id_token : account.access_token);

        if (account.provider === 'google') {
          const response = await fetch(`${process.env.API_URL}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ accessToken: account.id_token, vendor: account.provider }),
          });

          const result = await response.json();
          console.log(result.data);
          token.accessToken = result.data.credentials.accessToken;
          token.refreshToken = result.data.credentials.refreshToken;
          token.accountId = result.data.accountId;
          token.type = result.data.type;
        } else if (account.provider === 'kakao') {
          const response = await fetch(`${process.env.API_URL}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ accessToken: account.access_token, vendor: account.provider }),
          });

          const result = await response.json();

          token.accessToken = result.data.credentials.accessToken;
          token.refreshToken = result.data.credentials.refreshToken;
          token.type = result.data.type;
          token.accountId = result.data.accountId;
        } else if (account.provider === 'apple') {
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
        }
      }

      return token;
    },

    async session({ session, token }) {
      console.log('session 콜백 실행');
      if (session) {
        session.accessToken = token.accessToken + '';
        session.refreshToken = token.refreshToken + '';
        session.type = token.type + '';
        session.accountId = token.accountId + '';
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
