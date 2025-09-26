import { create } from "zustand";
import { TSearch } from "./types/search.type";

export const SearchStore = create<TSearch>((set, get) => ({
  searchTextStore: "",
  setSearchTextStore: (data: string) => {
    set({ searchTextStore: data });
  },
}));
