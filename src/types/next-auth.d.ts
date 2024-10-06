import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string;
    refreshToken: string;
    type: string;
    accountId: string;
    deletionId: string;
    deletionNickname: string;
    deleteDate: string;
    profileImg: string;
  }
}
