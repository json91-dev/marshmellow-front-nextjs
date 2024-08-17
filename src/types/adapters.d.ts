import type { AdapterUser as BaseAdapterUser } from 'next-auth/adapters';

declare module '@auth/core/adapters' {
  interface AdapterUser extends BaseAdapterUser {
    ghId: number;
    isAdmin: boolean;
    accessToken: string;
  }
}
