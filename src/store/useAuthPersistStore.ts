import { TRoleItemTypes } from 'src/services/index.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthPerisistState {
  accessToken: string | null;
  roleName: TRoleItemTypes | null;
  signIn: (tokens: { accessToken: string; roleName: TRoleItemTypes }) => void;
  signOut: () => void;
}

export const useAuthPersistStore = create(
  persist<IAuthPerisistState>(
    (set) => ({
      accessToken: null,
      roleName: null,
      signIn: ({ accessToken, roleName }) => set({ accessToken, roleName }),
      signOut: () => set({ accessToken: null, roleName: null }),
    }),
    {
      name: 'token',
    },
  ),
);
