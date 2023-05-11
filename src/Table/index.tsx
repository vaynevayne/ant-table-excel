import { Button, ColumnType, Space, Table, TableProps } from 'antd';
import React, { useMemo, useState, type FC } from 'react';
import ReactDragListView from 'react-drag-listview';
import { useUncontrolled } from '../hooks/useUncontrolled';
import SettingModal from './SettingModal';
import './index.less';

type MyTableProps = {
  /**
   * @description 非受控模式
   */
  defaultColumns?: TableProps<any>['columns'];

  /**
   * @description 受控模式 注: defaultColumns 与 columns 至少传入一个
   */
  columns?: ColumnType[];

  /**
   * @description 当 columns 改变时调用; 如果传入 columns ,那么该值必传, 否则可选
   */
  onColumnsChange?: (columns: any[]) => void;

  /**
   * @description 列显示(受控模式) table 中显示的 columns 字符串数组, columns.key || columns.title; 不使用 dataIndex 是因为 dataIndex 可能为数组,不方便比较
   * 不传 或者 undefined null 表示全部可见
   */
  visibleColumnKeys?: string[];

  /**
   * @description 列显示(非受控模式) table 中显示的 columns 字符串数组, columns.key || columns.title
   */
  defaultVisibleColumnKeys?: string[];

  /**
   * @description visibleColumns 改变时触发
   */
  onVisibleColumnKeysChange?: (columns: string[]) => void;
} & TableProps<any>;

const MyTable: FC<MyTableProps> = ({
  columns,
  defaultColumns,
  onColumnsChange,
  visibleColumnKeys,
  defaultVisibleColumnKeys,
  onVisibleColumnKeysChange,
  ...tableProps
}) => {
  const [_columns, handleColumnsChange] = useUncontrolled<ColumnType[]>({
    value: columns,
    defaultValue: defaultColumns,
    finalValue: [],
    onChange: onColumnsChange,
  });
  // table 也需要使用 visibleColumns filter table, 针对 SettingModal 是个受控属性
  // useEffect columns 用于设置 visibleColumns
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const cloned = [..._columns];
      const item = cloned.splice(fromIndex, 1)[0];
      cloned.splice(toIndex, 0, item);
      handleColumnsChange(cloned);
    },
    nodeSelector: 'th',
  };

  const [checkedList, setCheckedList] = useUncontrolled<
    (ColumnType['key'] | ColumnType['title'])[] | undefined
  >({
    value: visibleColumnKeys,
    defaultValue: defaultVisibleColumnKeys,
    finalValue: undefined,
    onChange: onVisibleColumnKeysChange,
  });

  // Better: Adjust the state while rendering
  const uncontrolledColumns = columns || defaultColumns;
  const [prevColumns, setPrevColumns] = useState([]);

  if (uncontrolledColumns !== prevColumns) {
    setPrevColumns(uncontrolledColumns);
    setCheckedList(uncontrolledColumns.map((item) => item.key || item.title));
  }

  const visibleColumns = useMemo(
    () =>
      _columns.filter(
        (item) =>
          checkedList?.includes(item.key) || checkedList?.includes(item.title),
      ),
    [checkedList, _columns],
  );

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={() => setIsModalOpen(true)}>列设置</Button>
      </Space>

      <ReactDragListView.DragColumn {...dragProps}>
        <Table columns={visibleColumns} {...tableProps} />
      </ReactDragListView.DragColumn>

      <SettingModal
        columns={_columns}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
      ></SettingModal>
    </>
  );
};

export default MyTable;
