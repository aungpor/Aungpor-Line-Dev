import { createWithEqualityFn } from "zustand/traditional";

interface IApp {}

const INIT_APP_STATE = {};

const useAppStore = createWithEqualityFn<IApp>()((set) => ({
  ...INIT_APP_STATE,
}));

export default useAppStore;
