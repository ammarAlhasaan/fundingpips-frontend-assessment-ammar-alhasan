import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

//  Define Zustand store for managing watchlist
type WatchlistStore = {
  watchlist: string[];
  addStock: (ticker: string) => void;
  removeStock: (ticker: string) => void;
  resetWatchlist: () => void;
};

export const useWatchlistStore = create<WatchlistStore>()(
  persist(
    (set, get) => ({
      watchlist: [], // Initial empty watchlist
      addStock: (ticker) => {
        const {watchlist} = get();

        if (!watchlist.includes(ticker)) {
          set({watchlist: [...watchlist, ticker]});
        }
      },
      removeStock: (ticker) => {
        set((state) => ({
          watchlist: state.watchlist.filter((t) => t !== ticker),
        }));
      },
      resetWatchlist: () => set({watchlist: []}), // Clear all stocks
    }),
    {
      name: "watchlist-storage", // Unique storage key
      storage: createJSONStorage(() => localStorage), // Persist in localStorage
    },
  ),
);
