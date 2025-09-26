import { create } from "zustand";
import { ISubPackage } from "interface/travel.interface";
import { TPackage } from "./types/package.type";
import { persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

export const PackageStore = createWithEqualityFn<TPackage>()(
  persist(
    (set, get) => ({
      subPackageSelect: null,
      setSubPackageSelect: (data: ISubPackage[]) => {
        set({ subPackageSelect: data });
      },
    }),
    {
      name: "package-booking-storage", // name of the item in the storage (must be unique)
    },
  ),
);
