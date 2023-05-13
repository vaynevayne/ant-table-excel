import { TableColumnType } from 'antd';

export type ColumnState = {
  order?: number;

  visible?: boolean;
};

export type ColumnsState = Record<string, ColumnState>;

export type ColumnWithState = TableColumnType<any> & ColumnState;
