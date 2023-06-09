import { TableColumnType } from 'antd';
import { ColumnsState, ColumnWithState } from './type';

export const findColKey = (column: TableColumnType<any>) => {
  if (!column) return '';
  const { key = '', dataIndex = '' } = column;

  if (!key && !dataIndex) {
    console.warn(
      `[ant-table-excel],错误: 请为列 ${JSON.stringify(
        column,
        null,
        2,
      )} 补充 key 或 dataIndex, 否则该列无法正常使用`,
    );
    return '';
  }

  return (key || dataIndex).toString(); // ['a','b'] => 'a,b'
};

export const getSorter =
  (columnsState: ColumnsState) =>
  (columnA: ColumnWithState, columnB: ColumnWithState) => {
    const stateA = columnsState[findColKey(columnA)] || {};
    const stateB = columnsState[findColKey(columnB)] || {};

    return (
      (stateA.order || columnA.order || 0) -
      (stateB.order || columnB.order || 0)
    );
  };

/** 先 sort 再 filter */
export const getVisible =
  (columnsState: ColumnsState, defaultVisible: boolean) =>
  (column: ColumnWithState) => {
    const state = columnsState[findColKey(column)] || {};
    if (Object.prototype.hasOwnProperty.call(state, 'visible')) {
      return state.visible;
    } else if (Object.prototype.hasOwnProperty.call(column, 'visible')) {
      return column.visible;
    } else {
      return defaultVisible || true;
    }
  };

/** 先 sort 再 filter */
export const getState = (columnsState: ColumnsState, column: ColumnWithState) =>
  columnsState[findColKey(column)] || {};
