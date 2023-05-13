import { createContext, Dispatch } from 'react';
import { ColumnsState } from './Table/type';

/** Table columnsState */

export const ColumnsStateContext = createContext<{
  columnsState: ColumnsState;
  setColumnsState: Dispatch<ColumnsState>;
}>({ columnsState: {}, setColumnsState: () => {} });
