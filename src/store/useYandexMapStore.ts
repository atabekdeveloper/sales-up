import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IYandexMapState {
  location: number[];
  defaultLocation: number[];
  setMapLocation: (location: number[]) => void;
}

export const useYandexMapStore = create(
  devtools<IYandexMapState>((set) => ({
    location: [],
    defaultLocation: [42.474037, 59.617937],
    setMapLocation: (location) => set({ location }),
  })),
);
