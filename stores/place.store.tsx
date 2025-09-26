import { create } from "zustand";
import { TPlace } from "./types/place.type";
import { IPlaceStore } from "interface/travel.interface";

export const PlaceProp = create<TPlace>((set, get) => ({
  placeProps: {
    toashHeaderMsg: undefined,
  } as IPlaceStore,
  setPlaceProps: (data: IPlaceStore) => {
    set({ placeProps: data });
  },
}));
