import { ISubPackage } from "interface/travel.interface";

export type TPackage = {
  subPackageSelect: ISubPackage[] | null;
  setSubPackageSelect: (data: ISubPackage[]) => void;
};
