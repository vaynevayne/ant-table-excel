import React, { createContext, useContext, useRef } from 'react';

import { temporal, TemporalState } from 'zundo';
import { createStore, useStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const BearContext = createContext<BearStore | null>(null);

type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

export type BearStore = ReturnType<typeof createBearStore>;

const createBearStore = (initProps?: Partial<State>) => {
  const DEFAULT_PROPS: State = {
    count: 0,
  };

  return createStore<State & Actions>()(
    temporal(
      immer<State & Actions>((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        increment: (qty: number) =>
          set((state) => {
            state.count += qty;
          }),
        decrement: (qty: number) =>
          set((state) => {
            state.count -= qty;
          }),
      })),
    ),
  );
};

type BearProviderProps = React.PropsWithChildren<State>;

export function BearProvider({ children, ...props }: BearProviderProps) {
  const storeRef = useRef<BearStore>();
  if (!storeRef.current) {
    storeRef.current = createBearStore(props);
  }
  return (
    <BearContext.Provider value={storeRef.current}>
      {children}
    </BearContext.Provider>
  );
}

export function useBearContext<T>(
  selector: (state: State & Actions) => T,
  equalityFn?: (left: T, right: T) => boolean,
): T {
  const store = useContext(BearContext);
  if (!store) throw new Error('Missing BearContext.Provider in the tree');
  return useStore(store, selector, equalityFn);
}

export const useTemporalStore = <T extends unknown>(
  selector: (state: TemporalState<State & Actions>) => T,
  equality?: (a: T, b: T) => boolean,
) => useStore(useStore.temporal, selector, equality);
