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
      // session 값 변경 처리
      if (trigger === 'update' && session?.type) {
        // Update token with the new type
        token.type = session.type;
        return token;
      }

      if (account) {
        const accessToken: any = account.id_token || account.access_token;
        console.log(`${account.provider} 로그인 시도`, accessToken);

        try {
          const result = await signInWithProvider(accessToken, account.provider);

          if (result.data.deletionId) {
            token.type = 'DISABLED_MEMBER_ACCOUNT';
            token.accountId = result.data.deletionId;
          } else {
            token.accessToken = result.data.credentials.accessToken;
            token.refreshToken = result.data.credentials.refreshToken;
            token.accountId = result.data.accountId;
            token.type = result.data.type;
          }
        } catch (error) {
          console.error('Authentication error:', error);
        }

        return token;
      }

      return token;
    },

    async session({ session, token }) {
      console.log('session 콜백 실행');
      if (session) {
        session.accessToken = token.accessToken ? token.accessToken + '' : '';
        session.refreshToken = token.refreshToken ? token.refreshToken + '' : '';
        session.type = token.type ? token.type + '' : '';
        session.accountId = token.accountId ? token.accountId + '' : '';
      }

      return session;
    },
  },
};

async function signInWithProvider(accessToken: string, provider: string) {
  const response = await fetch(`${process.env.API_URL}/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ accessToken, vendor: provider }),
  });

  // if (!response.ok) {
  //   throw new Error('Authentication failed');
  // }

  return await response.json();
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
