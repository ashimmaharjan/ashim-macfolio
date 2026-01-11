import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useLocationStore = create(
  immer((set) => ({
    activeLocation: locations,

    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = locations;
      }),
  }))
);

export default useLocationStore;
