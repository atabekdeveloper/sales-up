import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface INumericStringVault {
  numericStringVault: number | string | null;
  setNumericStringVault: (value: number | string | null) => void;
}

export const useNumericStringVault = create(
  devtools<INumericStringVault>((set) => ({
    numericStringVault: null,
    setNumericStringVault: (value) => set({ numericStringVault: value }),
  })),
);
