import { create } from 'zustand';

interface ISearchListState {
  searchValue: string;
  debounceValue: string;
  setSearchValue: (value: { searchValue: string }) => void;
  setDebounceValue: (value: { debounceValue: string }) => void;
}

export const useSearchListStore = create<ISearchListState>((set) => ({
  searchValue: '',
  debounceValue: '',
  setSearchValue: ({ searchValue }) => set({ searchValue }),
  setDebounceValue: ({ debounceValue }) => set({ debounceValue }),
}));
