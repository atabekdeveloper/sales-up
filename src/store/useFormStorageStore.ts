import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IFormStorageState {
  paramsForm: any;
  isDrawer: boolean;
  toggleDrawer: () => void;
  setParamsForm: (params: any) => void;
  setParamsItem: (params: any) => void;
}

export const useFormStorageStore = create(
  devtools<IFormStorageState>((set) => ({
    paramsForm: null,
    isDrawer: false,
    toggleDrawer: () => set((state) => ({ isDrawer: !state.isDrawer })),
    setParamsForm: (params) => set({ paramsForm: params, isDrawer: true }),
    setParamsItem: (params) => set({ paramsForm: params }),
  })),
);
