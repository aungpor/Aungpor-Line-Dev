import { IPlaceStore } from "interface/travel.interface";

export type TPlace = {
  placeProps: IPlaceStore;
  setPlaceProps: (data: IPlaceStore) => void;
};
