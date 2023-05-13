import { ColumnsStateContext } from 'ant-table-excel/context';
import { Button, Space, Table, TableProps } from 'antd';
import { arrayMoveImmutable } from 'array-move';
import { produce } from 'immer';
import React, {
  Dispatch,
  memo,
  useCallback,
  useMemo,
  useState,
  type FC,
} from 'react';
import ReactDragListView from 'react-drag-listview';
import { useUncontrolled } from '../hooks/useUncontrolled';
import './index.less';
import SettingModal from './SettingModal';
import { ColumnsState, ColumnWithState } from './type';
import { calcVisible, findColKey, getSorter } from './util';

type MyTableProps = {
  /**
   * @description 可以在 column 中传入相关 columnState, 将作为默认值使用
   */
  columns: ColumnWithState[];

  defaultColumnsState?: ColumnsState;

  columnsState?: ColumnsState;

  onColumnsStateChange: Dispatch<ColumnsState>;

  /**
   * @description 默认状态下,所有列的显示情况
   * @default true
   */

  defaultVisible?: boolean;
} & TableProps<any>;

const MyTable: FC<MyTableProps> = ({
  columns: propColumns,
  defaultColumnsState,
  columnsState: propColumnsState,
  onColumnsStateChange,
  defaultVisible = true,
  ...tableProps
}) => {
  // 传入 null, 不会触发函数参数默认值,所以在这里写引用类型默认值
  const columns = propColumns || [];

  const [columnsState, setColumnsState] = useUncontrolled<ColumnsState>({
    value: propColumnsState,
    defaultValue: defaultColumnsState,
    finalValue: {},
    onChange: onColumnsStateChange,
  });

  console.log('columnsState', columnsState);

  const tableColumns = useMemo(
    () =>
      columns
        .filter(Boolean)
        .sort(getSorter(columnsState))
        .filter(calcVisible(columnsState, defaultVisible)),
    [columns, columnsState],
  );

  console.log('tableColumns', tableColumns);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const moved = arrayMoveImmutable<ColumnWithState>(
        tableColumns,
        fromIndex,
        toIndex,
      );

      const newColumnsState = produce(columnsState, (draft) => {
        moved.forEach((col, idx) => {
          const colKey = findColKey(col);
          draft[colKey] = {
            ...draft[colKey],
            order: idx,
          };
        });
      });
      setColumnsState(newColumnsState);
    },
    nodeSelector: 'th',
  };

  const contextValue = useMemo(
    () => ({
      columnsState,
      setColumnsState,
    }),
    [columnsState, setColumnsState],
  );

  const onOk = useCallback(() => setIsModalOpen(false), []);
  const onCancel = useCallback(() => setIsModalOpen(false), []);

  const [s, setS] = useState();
  console.log('s', s);

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={() => setIsModalOpen(true)}>列设置</Button>
      </Space>

      <ReactDragListView.DragColumn {...dragProps}>
        <Table columns={tableColumns} {...tableProps} />
      </ReactDragListView.DragColumn>

      <Button
        onClick={() => {
          setS({});
        }}
      >
        {' '}
        aasa
      </Button>

      <ColumnsStateContext.Provider value={contextValue}>
        <SettingModal
          columns={columns}
          open={isModalOpen}
          onOk={onOk}
          onCancel={onCancel}
          defaultVisible
        ></SettingModal>
      </ColumnsStateContext.Provider>
    </>
  );
};

const MemoTable = memo(MyTable);
export default MemoTable;
